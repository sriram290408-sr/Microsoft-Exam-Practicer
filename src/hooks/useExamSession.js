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
  const [timeLeft, setTimeLeft] = useState(6000);
  const [elapsed, setElapsed] = useState(0);
  const [pausesUsed, setPausesUsed] = useState(0);
  const [questionTimes, setQuestionTimes] = useState([]);
  const [isRetest, setIsRetest] = useState(false);
  const [lastWeakSpots, setLastWeakSpots] = useState(null);

  // Resume state available in storage
  const [savedSession, setSavedSession] = useState(() => storage.get(STORAGE_KEYS.SAVE, null));

  // Timer interval reference
  const timerRef = useRef(null);
  const currentPosRef = useRef(pos);
  currentPosRef.current = pos;

  const currentExam = EXAMS[examKey] || EXAMS.PL300;

  // Track time per question
  useEffect(() => {
    if (screen !== 'exam') return;

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
            handleSubmit();
            return 0;
          }
          return t - 1;
        });
      }
    }, 1000);

    timerRef.current = interval;
    return () => clearInterval(interval);
  }, [screen, timed]);

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
        isRetest
      });
    }
  }, [screen, examKey, items, answers, flags, pos, timed, learn, checked, timeLeft, elapsed, pausesUsed, questionTimes, isRetest]);

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
    setTimeLeft(examDef.min * 60);
    setElapsed(0);
    setPausesUsed(0);
    setIsRetest(retestMode);
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

  // Navigation
  const goToQuestion = useCallback((index) => {
    if (index >= 0 && index < items.length) {
      setPos(index);
    }
  }, [items.length]);

  const nextQuestion = useCallback(() => {
    if (pos < items.length - 1) {
      setPos(pos + 1);
    }
  }, [pos, items.length]);

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

    const nextPauses = pausesUsed + 1;
    setPausesUsed(nextPauses);

    // Save state
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
      isRetest
    };
    storage.set(STORAGE_KEYS.SAVE, savedData);
    setSavedSession(savedData);
    setScreen('start');
    return true;
  }, [pausesUsed, examKey, items, answers, flags, pos, timed, learn, checked, timeLeft, elapsed, questionTimes, isRetest, onCatAlert]);

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
    setScreen('exam');
  }, []);

  // Discard paused test
  const discardExam = useCallback(() => {
    storage.remove(STORAGE_KEYS.SAVE);
    setSavedSession(null);
  }, []);

  // Submit test and compute results
  const handleSubmit = useCallback((proctorStrikes = []) => {
    if (timerRef.current) clearInterval(timerRef.current);

    // Calculate score
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
        // Collect question for weak spots
        weakQuestions.push(item);
      }
    });

    const scorePct = Math.round((correctCount / items.length) * 100);
    setLastWeakSpots(weakQuestions);

    // Record history
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

    // Clear saved test
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
