import { useState, useEffect, useRef, useCallback } from 'react';
import { EXAMS } from '../data/exams/index.js';
import { STORAGE_KEYS, MAX_PAUSES } from '../data/constants.js';
import { storage } from '../utils/storage.js';
import { prepareExamQuestions } from '../utils/formatters.js';

export function useExamSession({ onCatAlert, onCatCheer, onCatSupport, onCatProgress }) {
  const [screen, setScreen] = useState('start'); // 'start' | 'exam' | 'results'
  const [examKey, setExamKey] = useState('PL300');
  
  // Active test state
  const [items, setItems] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [flags, setFlags] = useState([]);
  const [pos, setPos] = useState(0);
  const [timed, setTimed] = useState(false);
  const [learn, setLearn] = useState(false);
  const [checked, setChecked] = useState([]); // for learn mode
  const [timeLeft, setTimeLeft] = useState(7200); // 120 mins default for 200 Qs
  const [elapsed, setElapsed] = useState(0);
  const [pausesUsed, setPausesUsed] = useState(0);
  const [questionTimes, setQuestionTimes] = useState([]);
  const [isRetest, setIsRetest] = useState(false);
  const [lastWeakSpots, setLastWeakSpots] = useState(null);

  // 2-Section & 10-Minute Break states
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breakTaken, setBreakTaken] = useState(false);

  // Resume state available in storage
  const [savedSession, setSavedSession] = useState(() => storage.get(STORAGE_KEYS.SAVE, null));

  // Timer interval reference
  const timerRef = useRef(null);
  const currentPosRef = useRef(pos);
  currentPosRef.current = pos;

  // Refs to avoid stale closures in timer callback
  const itemsRef = useRef(items);
  itemsRef.current = items;
  const answersRef = useRef(answers);
  answersRef.current = answers;
  const examKeyRef = useRef(examKey);
  examKeyRef.current = examKey;
  const elapsedRef = useRef(elapsed);
  elapsedRef.current = elapsed;
  const timedAutoSubmitRef = useRef(false);

  const currentExam = EXAMS[examKey] || EXAMS.PL300;
  const currentSection = pos < 100 ? 1 : 2;

  // Auto-submit when timer expires
  const autoSubmitFromTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (timedAutoSubmitRef.current) return;
    timedAutoSubmitRef.current = true;

    const currentItems = itemsRef.current;
    const currentAnswers = answersRef.current;
    const currentExamKey = examKeyRef.current;
    const currentElapsed = elapsedRef.current;
    const currentExamDef = EXAMS[currentExamKey] || EXAMS.PL300;

    let correctCount = 0;
    const weakQuestions = [];
    currentItems.forEach((item, idx) => {
      const userAns = currentAnswers[idx] || [];
      const isCorrect =
        userAns.length === item.correctAnswers.length &&
        item.correctAnswers.every(ans => userAns.includes(ans));
      if (isCorrect) correctCount++;
      else weakQuestions.push(item);
    });

    const scorePct = Math.round((correctCount / Math.max(currentItems.length, 1)) * 100);
    setLastWeakSpots(weakQuestions);

    const historyEntry = {
      id: Date.now(),
      examKey: currentExamKey,
      examCode: currentExamDef.code,
      examName: currentExamDef.name,
      score: scorePct,
      correctCount,
      totalCount: currentItems.length,
      elapsed: currentElapsed,
      date: new Date().toLocaleDateString(),
      proctorStrikesCount: 0
    };

    const existingHist = storage.get(STORAGE_KEYS.HISTORY, []);
    storage.set(STORAGE_KEYS.HISTORY, [historyEntry, ...existingHist].slice(0, 50));
    storage.remove(STORAGE_KEYS.SAVE);
    setSavedSession(null);
    setScreen('results');
  }, []);

  // Track time per question (PAUSED during break)
  useEffect(() => {
    if (screen !== 'exam' || isOnBreak) return;
    timedAutoSubmitRef.current = false;

    const interval = setInterval(() => {
      setElapsed(e => e + 1);
      
      setQuestionTimes(prev => {
        const copy = [...prev];
        const p = currentPosRef.current;
        copy[p] = (copy[p] || 0) + 1;
        return copy;
      });

      if (timed) {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(interval);
            setTimeout(() => autoSubmitFromTimer(), 0);
            return 0;
          }
          return t - 1;
        });
      }
    }, 1000);

    timerRef.current = interval;
    return () => clearInterval(interval);
  }, [screen, timed, isOnBreak, autoSubmitFromTimer]);

  // Sync saved session whenever exam state changes during exam
  useEffect(() => {
    if (screen === 'exam' && items.length > 0) {
      storage.set(STORAGE_KEYS.SAVE, {
        examKey,
        items,
        answers,
        flags,
        pos,
        timed,
        learn,
        checked,
        timeLeft,
        elapsed,
        pausesUsed,
        questionTimes,
        isRetest,
        isOnBreak,
        breakTaken
      });
    }
  }, [screen, examKey, items, answers, flags, pos, timed, learn, checked, timeLeft, elapsed, pausesUsed, questionTimes, isRetest, isOnBreak, breakTaken]);

  // Start new test
  const startExam = useCallback(({ selectedExamKey, isTimed = false, isLearning = false, customItems = null, retestMode = false }) => {
    const targetKey = selectedExamKey || examKey;
    const examDef = EXAMS[targetKey] || EXAMS.PL300;
    const examQuestions = customItems || prepareExamQuestions(examDef.bank);

    setExamKey(targetKey);
    setItems(examQuestions);
    setAnswers(examQuestions.map(() => []));
    setFlags(examQuestions.map(() => false));
    setChecked(examQuestions.map(() => false));
    setQuestionTimes(examQuestions.map(() => 0));
    setPos(0);
    setTimed(isTimed);
    setLearn(isLearning);
    // Double time allowance for 200 questions: 180 mins or custom min * 1.8
    setTimeLeft(Math.round(examDef.min * 60 * 1.8));
    setElapsed(0);
    setPausesUsed(0);
    setIsRetest(retestMode);
    setIsOnBreak(false);
    setBreakTaken(false);
    setScreen('exam');
  }, [examKey]);

  // Select or toggle an answer option
  const toggleOption = useCallback((optIndex) => {
    const currentItem = items[pos];
    if (!currentItem) return;

    setAnswers(prev => {
      const copy = [...prev];
      const currentSelected = copy[pos] || [];

      if (currentItem.multi) {
        if (currentSelected.includes(optIndex)) {
          copy[pos] = currentSelected.filter(i => i !== optIndex);
        } else {
          copy[pos] = [...currentSelected, optIndex].sort();
        }
      } else {
        copy[pos] = [optIndex];
      }

      // Check progress milestones
      const answeredTotal = copy.filter(a => a && a.length > 0).length;
      onCatProgress?.(answeredTotal, items.length);

      return copy;
    });
  }, [items, pos, onCatProgress]);

  // Check answer immediately (Learning Mode)
  const checkAnswer = useCallback(() => {
    const currentItem = items[pos];
    const currentAns = answers[pos] || [];
    if (!currentItem || currentAns.length === 0) return;

    setChecked(prev => {
      const copy = [...prev];
      copy[pos] = true;
      return copy;
    });

    const isCorrect = 
      currentAns.length === currentItem.correctAnswers.length &&
      currentItem.correctAnswers.every(idx => currentAns.includes(idx));

    if (isCorrect) {
      onCatCheer?.();
    } else {
      onCatSupport?.();
    }
  }, [items, pos, answers, onCatCheer, onCatSupport]);

  // Toggle flag on current question
  const toggleFlag = useCallback(() => {
    setFlags(prev => {
      const copy = [...prev];
      copy[pos] = !copy[pos];
      return copy;
    });
  }, [pos]);

  // Break controls
  const startBreak = useCallback(() => {
    setIsOnBreak(true);
    setBreakTaken(true);
    onCatCheer?.('Section 1 complete! Enjoy your 10-minute dance break! 🐾🪩');
  }, [onCatCheer]);

  const endBreak = useCallback(() => {
    setIsOnBreak(false);
    setBreakTaken(true);
    if (pos < 100 && items.length > 100) {
      setPos(100);
    }
    onCatCheer?.('Section 2 begins! Let’s crush the rest of the test! 🐾✨');
  }, [pos, items.length, onCatCheer]);

  // Navigation
  const goToQuestion = useCallback((index) => {
    if (index >= 0 && index < items.length) {
      setPos(index);
    }
  }, [items.length]);

  const nextQuestion = useCallback(() => {
    // When finishing question 100 (index 99) in a 200-question test and break hasn't been taken
    if (pos === 99 && !breakTaken && items.length > 100) {
      startBreak();
      return;
    }
    if (pos < items.length - 1) {
      setPos(pos + 1);
    } else {
      // Go to first unanswered
      const firstUnanswered = answers.findIndex(a => !a || a.length === 0);
      if (firstUnanswered !== -1) setPos(firstUnanswered);
    }
  }, [pos, items.length, answers, breakTaken, startBreak]);

  const prevQuestion = useCallback(() => {
    if (pos > 0) {
      setPos(pos - 1);
    }
  }, [pos]);

  // Pause test
  const pauseExam = useCallback(() => {
    if (pausesUsed >= MAX_PAUSES) {
      onCatAlert?.('Pause limit reached! Maximum 2 pauses allowed per test attempt. 🐾⏱️');
      return false;
    }

    if (timerRef.current) clearInterval(timerRef.current);

    const nextPauses = pausesUsed + 1;
    setPausesUsed(nextPauses);

    const savedData = {
      examKey,
      items,
      answers,
      flags,
      pos,
      timed,
      learn,
      checked,
      timeLeft,
      elapsed,
      pausesUsed: nextPauses,
      questionTimes,
      isRetest,
      isOnBreak,
      breakTaken
    };
    storage.set(STORAGE_KEYS.SAVE, savedData);
    setSavedSession(savedData);
    setScreen('start');
    return true;
  }, [pausesUsed, examKey, items, answers, flags, pos, timed, learn, checked, timeLeft, elapsed, questionTimes, isRetest, isOnBreak, breakTaken, onCatAlert]);

  // Resume paused test
  const resumeExam = useCallback(() => {
    const saved = storage.get(STORAGE_KEYS.SAVE);
    if (!saved) return;

    setExamKey(saved.examKey);
    setItems(saved.items);
    setAnswers(saved.answers);
    setFlags(saved.flags);
    setPos(saved.pos);
    setTimed(saved.timed);
    setLearn(saved.learn);
    setChecked(saved.checked || []);
    setTimeLeft(saved.timeLeft);
    setElapsed(saved.elapsed);
    setPausesUsed(saved.pausesUsed || 0);
    setQuestionTimes(saved.questionTimes || []);
    setIsRetest(saved.isRetest || false);
    setIsOnBreak(saved.isOnBreak || false);
    setBreakTaken(saved.breakTaken || false);
    setScreen('exam');

    onCatCheer?.('Welcome back! Let\'s crush this test together! 🐾✨');
  }, [onCatCheer]);

  // Discard paused test
  const discardExam = useCallback(() => {
    storage.remove(STORAGE_KEYS.SAVE);
    setSavedSession(null);
  }, []);

  // Submit test and compute results
  const handleSubmit = useCallback((proctorStrikes = []) => {
    if (timerRef.current) clearInterval(timerRef.current);

    let correctCount = 0;
    const weakQuestions = [];

    items.forEach((item, idx) => {
      const userAns = answers[idx] || [];
      const isCorrect =
        userAns.length === item.correctAnswers.length &&
        item.correctAnswers.every(ans => userAns.includes(ans));

      if (isCorrect) {
        correctCount++;
      } else {
        weakQuestions.push(item);
      }
    });

    const scorePct = Math.round((correctCount / Math.max(items.length, 1)) * 100);
    setLastWeakSpots(weakQuestions);

    const historyEntry = {
      id: Date.now(),
      examKey,
      examCode: currentExam.code,
      examName: currentExam.name,
      score: scorePct,
      correctCount,
      totalCount: items.length,
      elapsed,
      date: new Date().toLocaleDateString(),
      proctorStrikesCount: proctorStrikes.length
    };

    const existingHist = storage.get(STORAGE_KEYS.HISTORY, []);
    storage.set(STORAGE_KEYS.HISTORY, [historyEntry, ...existingHist].slice(0, 50));

    storage.remove(STORAGE_KEYS.SAVE);
    setSavedSession(null);

    setScreen('results');
  }, [items, answers, examKey, currentExam, elapsed]);

  // Practice weak spots
  const startWeakSpotsRetest = useCallback(() => {
    if (!lastWeakSpots || lastWeakSpots.length === 0) return;
    startExam({
      selectedExamKey: examKey,
      isTimed: false,
      isLearning: true,
      customItems: prepareExamQuestions(lastWeakSpots.map(q => ({
        d: q.domain,
        q: q.question,
        c: q.code,
        o: q.options,
        a: q.correctAnswers,
        e: q.explanation,
        multi: q.multi
      }))),
      retestMode: true
    });
  }, [lastWeakSpots, examKey, startExam]);

  return {
    screen,
    setScreen,
    examKey,
    setExamKey,
    currentExam,
    items,
    answers,
    flags,
    pos,
    timed,
    learn,
    checked,
    timeLeft,
    elapsed,
    pausesUsed,
    maxPauses: MAX_PAUSES,
    questionTimes,
    isRetest,
    savedSession,
    lastWeakSpots,
    isOnBreak,
    breakTaken,
    currentSection,
    startBreak,
    endBreak,
    startExam,
    toggleOption,
    checkAnswer,
    toggleFlag,
    goToQuestion,
    nextQuestion,
    prevQuestion,
    pauseExam,
    resumeExam,
    discardExam,
    handleSubmit,
    startWeakSpotsRetest
  };
}
