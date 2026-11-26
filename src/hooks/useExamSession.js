import { useState, useEffect, useRef, useCallback } from 'react';
import { EXAMS } from '../data/exams/index.js';
import { STORAGE_KEYS, MAX_PAUSES, SECTION_DURATION_SECONDS } from '../data/constants.js';
import { storage } from '../utils/storage.js';
import { prepareExamQuestions } from '../utils/formatters.js';

export function useExamSession({ onCatAlert, onCatCheer, onCatSupport, onCatProgress }) {
  const [screen, setScreen] = useState('start'); // 'start' | 'exam' | 'results' | 'manage_banks'
  const [examKey, setExamKey] = useState('PL300');

  // Active test state
  const [items, setItems] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [flags, setFlags] = useState([]);
  const [pos, setPos] = useState(0);
  const [timed, setTimed] = useState(false);
  const [learn, setLearn] = useState(false);
  const [checked, setChecked] = useState([]);

  // Configurable per-exam section timers:
  // For 200Q exams: 60m (3600s) each. For 100Q exams: single section using exam.min * 60s
  const [sec1Time, setSec1Time] = useState(SECTION_DURATION_SECONDS);
  const [sec2Time, setSec2Time] = useState(SECTION_DURATION_SECONDS);
  const [elapsed, setElapsed] = useState(0);
  const [pausesUsed, setPausesUsed] = useState(0);
  const [questionTimes, setQuestionTimes] = useState([]);
  const [isRetest, setIsRetest] = useState(false);
  const [lastWeakSpots, setLastWeakSpots] = useState(null);

  // Section 1 submit + break (for 2-section exams with > 100 questions)
  const [sec1Locked, setSec1Locked] = useState(false);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [breakTaken, setBreakTaken] = useState(false);

  const [savedSession, setSavedSession] = useState(() => storage.get(STORAGE_KEYS.SAVE, null));

  // Refs to avoid stale closures in timer callbacks
  const timerRef = useRef(null);
  const posRef = useRef(pos);               posRef.current = pos;
  const sec1LockedRef = useRef(sec1Locked); sec1LockedRef.current = sec1Locked;
  const itemsRef = useRef(items);           itemsRef.current = items;
  const answersRef = useRef(answers);       answersRef.current = answers;
  const examKeyRef = useRef(examKey);       examKeyRef.current = examKey;
  const elapsedRef = useRef(elapsed);       elapsedRef.current = elapsed;
  const autoSubmittedRef = useRef(false);

  const currentExam = EXAMS[examKey] || EXAMS.PL300;
  const hasSections = items.length > 100;
  const currentSection = hasSections ? (sec1Locked || pos >= 100 ? 2 : 1) : 1;
  const timeLeft = currentSection === 1 ? sec1Time : sec2Time;

  const s1AnsweredCount = answers.slice(0, 100).filter(a => a && a.length > 0).length;
  const isSection1Complete = !hasSections || sec1Locked || breakTaken || pos >= 100 || s1AnsweredCount >= 100;

  // ─── Auto-submit entire exam (Timer expires) ─────────────────────────────
  const autoSubmitFromTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (autoSubmittedRef.current) return;
    autoSubmittedRef.current = true;

    const its = itemsRef.current;
    const ans = answersRef.current;
    const ek  = examKeyRef.current;
    const el  = elapsedRef.current;
    const def = EXAMS[ek] || EXAMS.PL300;

    let correct = 0;
    const weak = [];
    its.forEach((item, idx) => {
      const ua = ans[idx] || [];
      const ok = ua.length === item.correctAnswers.length &&
                 item.correctAnswers.every(a => ua.includes(a));
      if (ok) correct++; else weak.push(item);
    });

    setLastWeakSpots(weak);
    const score = Math.round((correct / Math.max(its.length, 1)) * 100);
    const hist = storage.get(STORAGE_KEYS.HISTORY, []);
    storage.set(STORAGE_KEYS.HISTORY, [{
      id: Date.now(), examKey: ek, examCode: def.code, examName: def.name,
      platform: def.platform || 'General',
      score, correctCount: correct, totalCount: its.length,
      elapsed: el, date: new Date().toLocaleDateString(), proctorStrikesCount: 0
    }, ...hist].slice(0, 50));
    storage.remove(STORAGE_KEYS.SAVE);
    setSavedSession(null);
    setScreen('results');
  }, []);

  // ─── Submit Section 1 → start break (only for multi-section exams) ────────
  const submitSection1 = useCallback(() => {
    if (!hasSections) return;
    setSec1Locked(true);
    setIsOnBreak(true);
    setBreakTaken(true);
    setPos(100);
    onCatCheer?.('Section 1 submitted! Enjoy your 10-minute cat dance break! 🐾🕺');
  }, [hasSections, onCatCheer]);

  // ─── End break → move to Section 2 ───────────────────────────────────────
  const endBreak = useCallback(() => {
    setIsOnBreak(false);
    setSec1Locked(true);
    setBreakTaken(true);
    setPos(100);
    onCatCheer?.('Section 2 starts now (60 min)! Section 1 is locked. Go get it! 🐾✨');
  }, [onCatCheer]);

  // ─── Main exam timer (paused during break) ───────────────────────────────
  useEffect(() => {
    if (screen !== 'exam' || isOnBreak) return;
    autoSubmittedRef.current = false;

    const id = setInterval(() => {
      setElapsed(e => e + 1);
      setQuestionTimes(prev => {
        const copy = [...prev];
        const p = posRef.current;
        copy[p] = (copy[p] || 0) + 1;
        return copy;
      });

      if (timed) {
        const inSec1 = hasSections ? (!sec1LockedRef.current && posRef.current < 100) : true;
        if (inSec1) {
          setSec1Time(t => {
            if (t <= 1) {
              clearInterval(id);
              if (hasSections) {
                // Auto-submit Section 1 when 60 min expires
                setTimeout(() => {
                  submitSection1();
                  onCatAlert?.('Section 1 time up! Auto-submitted — enjoy your break! 🐾⏱️');
                }, 0);
              } else {
                // For single section exam, auto-submit entire exam
                setTimeout(() => {
                  autoSubmitFromTimer();
                  onCatAlert?.('Time is up! Exam auto-submitted. 🐾⏱️');
                }, 0);
              }
              return 0;
            }
            return t - 1;
          });
        } else {
          setSec2Time(t => {
            if (t <= 1) {
              clearInterval(id);
              // Auto-submit whole exam when Section 2 expires
              setTimeout(() => {
                autoSubmitFromTimer();
                onCatAlert?.('Section 2 time up (60 min)! Exam auto-submitted. 🐾⏱️');
              }, 0);
              return 0;
            }
            return t - 1;
          });
        }
      }
    }, 1000);

    timerRef.current = id;
    return () => clearInterval(id);
  }, [screen, timed, isOnBreak, hasSections, submitSection1, autoSubmitFromTimer, onCatAlert]);

  // ─── Auto-save session state ──────────────────────────────────────────────
  useEffect(() => {
    if (screen === 'exam' && items.length > 0) {
      storage.set(STORAGE_KEYS.SAVE, {
        _v: 5, examKey, items, answers, flags, pos, timed, learn, checked,
        sec1Time, sec2Time, elapsed, pausesUsed, questionTimes, isRetest,
        sec1Locked, isOnBreak, breakTaken
      });
    }
  }, [screen, examKey, items, answers, flags, pos, timed, learn, checked,
      sec1Time, sec2Time, elapsed, pausesUsed, questionTimes, isRetest,
      sec1Locked, isOnBreak, breakTaken]);

  // ─── Start new exam ───────────────────────────────────────────────────────
  const startExam = useCallback(({
    selectedExamKey, isTimed = false, isLearning = false, customItems = null, retestMode = false
  }) => {
    const key = selectedExamKey || examKey;
    const def = EXAMS[key] || EXAMS.PL300;
    const qs  = customItems || prepareExamQuestions(def.bank);

    const isMultiSection = qs.length > 100;
    const defaultSec1Secs = isMultiSection ? SECTION_DURATION_SECONDS : (def.min || 90) * 60;
    const defaultSec2Secs = isMultiSection ? SECTION_DURATION_SECONDS : 0;

    setExamKey(key);
    setItems(qs);
    setAnswers(qs.map(() => []));
    setFlags(qs.map(() => false));
    setChecked(qs.map(() => false));
    setQuestionTimes(qs.map(() => 0));
    setPos(0);
    setTimed(isTimed);
    setLearn(isLearning);
    setSec1Time(defaultSec1Secs);
    setSec2Time(defaultSec2Secs);
    setElapsed(0);
    setPausesUsed(0);
    setIsRetest(retestMode);
    setSec1Locked(false);
    setIsOnBreak(false);
    setBreakTaken(false);
    autoSubmittedRef.current = false;
    setScreen('exam');
  }, [examKey]);

  // ─── Toggle answer option ─────────────────────────────────────────────────
  const toggleOption = useCallback((optIndex) => {
    if (hasSections && sec1Locked && pos < 100) return; // Section 1 locked
    const item = items[pos];
    if (!item) return;
    setAnswers(prev => {
      const copy = [...prev];
      const cur  = copy[pos] || [];
      if (item.multi) {
        copy[pos] = cur.includes(optIndex)
          ? cur.filter(i => i !== optIndex)
          : [...cur, optIndex].sort();
      } else {
        copy[pos] = [optIndex];
      }
      onCatProgress?.(copy.filter(a => a && a.length > 0).length, items.length);
      return copy;
    });
  }, [items, pos, hasSections, sec1Locked, onCatProgress]);

  // ─── Check answer (learning mode) ────────────────────────────────────────
  const checkAnswer = useCallback(() => {
    const item = items[pos];
    const ans  = answers[pos] || [];
    if (!item || ans.length === 0) return;
    setChecked(prev => { const c = [...prev]; c[pos] = true; return c; });
    const ok = ans.length === item.correctAnswers.length &&
               item.correctAnswers.every(i => ans.includes(i));
    if (ok) onCatCheer?.(); else onCatSupport?.();
  }, [items, pos, answers, onCatCheer, onCatSupport]);

  // ─── Toggle flag ──────────────────────────────────────────────────────────
  const toggleFlag = useCallback(() => {
    if (hasSections && sec1Locked && pos < 100) return;
    setFlags(prev => { const c = [...prev]; c[pos] = !c[pos]; return c; });
  }, [pos, hasSections, sec1Locked]);

  // ─── Navigation ───────────────────────────────────────────────────────────
  const goToQuestion = useCallback((index) => {
    if (index < 0 || index >= items.length) return;
    if (hasSections) {
      if (sec1Locked && index < 100) {
        onCatAlert?.('Section 1 is locked! Focus on Section 2. 🐾🔒');
        return;
      }
      if (!sec1Locked && items.length > 100 && index >= 100) {
        onCatAlert?.('Complete and submit Section 1 first! 🐾');
        return;
      }
    }
    setPos(index);
  }, [items.length, hasSections, sec1Locked, onCatAlert]);

  const nextQuestion = useCallback(() => {
    if (hasSections && pos === 99 && !sec1Locked) {
      submitSection1();
      return;
    }
    if (pos < items.length - 1) {
      setPos(pos + 1);
    } else {
      // Wrap to first unanswered in current section
      const min = hasSections && sec1Locked ? 100 : 0;
      const max = hasSections && !sec1Locked ? 100 : items.length;
      for (let i = min; i < max; i++) {
        if (!answers[i] || answers[i].length === 0) { setPos(i); return; }
      }
    }
  }, [pos, items.length, answers, hasSections, sec1Locked, submitSection1]);

  const prevQuestion = useCallback(() => {
    const min = hasSections && sec1Locked ? 100 : 0;
    if (pos > min) setPos(pos - 1);
  }, [pos, hasSections, sec1Locked]);

  // ─── Pause ────────────────────────────────────────────────────────────────
  const pauseExam = useCallback(() => {
    if (pausesUsed >= MAX_PAUSES) {
      onCatAlert?.('Pause limit reached! Max 2 pauses per attempt. 🐾⏱️');
      return false;
    }
    if (timerRef.current) clearInterval(timerRef.current);
    const next = pausesUsed + 1;
    setPausesUsed(next);
    const data = {
      _v: 5, examKey, items, answers, flags, pos, timed, learn, checked,
      sec1Time, sec2Time, elapsed, pausesUsed: next, questionTimes, isRetest,
      sec1Locked, isOnBreak, breakTaken
    };
    storage.set(STORAGE_KEYS.SAVE, data);
    setSavedSession(data);
    setScreen('start');
    return true;
  }, [pausesUsed, examKey, items, answers, flags, pos, timed, learn, checked,
      sec1Time, sec2Time, elapsed, questionTimes, isRetest,
      sec1Locked, isOnBreak, breakTaken, onCatAlert]);

  // ─── Resume ───────────────────────────────────────────────────────────────
  const resumeExam = useCallback(() => {
    const s = storage.get(STORAGE_KEYS.SAVE);
    if (!s) return;
    if (!s._v || s._v < 4) {
      storage.remove(STORAGE_KEYS.SAVE);
      setSavedSession(null);
      onCatAlert?.('Old saved session cleared — please start a new test. 🐾');
      return;
    }
    setExamKey(s.examKey);
    setItems(s.items);
    setAnswers(s.answers);
    setFlags(s.flags);
    setPos(s.pos);
    setTimed(s.timed);
    setLearn(s.learn);
    setChecked(s.checked || []);
    setSec1Time(s.sec1Time ?? SECTION_DURATION_SECONDS);
    setSec2Time(s.sec2Time ?? SECTION_DURATION_SECONDS);
    setElapsed(s.elapsed || 0);
    setPausesUsed(s.pausesUsed || 0);
    setQuestionTimes(s.questionTimes || []);
    setIsRetest(s.isRetest || false);
    setSec1Locked(s.sec1Locked || false);
    setIsOnBreak(s.isOnBreak || false);
    setBreakTaken(s.breakTaken || false);
    setScreen('exam');
    onCatCheer?.('Welcome back! Let\'s crush this test! 🐾✨');
  }, [onCatCheer, onCatAlert]);

  // ─── Discard ──────────────────────────────────────────────────────────────
  const discardExam = useCallback(() => {
    storage.remove(STORAGE_KEYS.SAVE);
    setSavedSession(null);
  }, []);

  // ─── Manual submit ────────────────────────────────────────────────────────
  const handleSubmit = useCallback((proctorStrikes = []) => {
    if (timerRef.current) clearInterval(timerRef.current);
    let correct = 0;
    const weak = [];
    items.forEach((item, idx) => {
      const ua = answers[idx] || [];
      const ok = ua.length === item.correctAnswers.length &&
                 item.correctAnswers.every(a => ua.includes(a));
      if (ok) correct++; else weak.push(item);
    });
    setLastWeakSpots(weak);
    const score = Math.round((correct / Math.max(items.length, 1)) * 100);
    const hist = storage.get(STORAGE_KEYS.HISTORY, []);
    storage.set(STORAGE_KEYS.HISTORY, [{
      id: Date.now(), examKey, examCode: currentExam.code, examName: currentExam.name,
      platform: currentExam.platform || 'General',
      score, correctCount: correct, totalCount: items.length,
      elapsed, date: new Date().toLocaleDateString(), proctorStrikesCount: proctorStrikes.length
    }, ...hist].slice(0, 50));
    storage.remove(STORAGE_KEYS.SAVE);
    setSavedSession(null);
    setScreen('results');
  }, [items, answers, examKey, currentExam, elapsed]);

  // ─── Weak-spots retest ────────────────────────────────────────────────────
  const startWeakSpotsRetest = useCallback(() => {
    if (!lastWeakSpots || lastWeakSpots.length === 0) return;
    startExam({
      selectedExamKey: examKey,
      isTimed: false,
      isLearning: true,
      customItems: prepareExamQuestions(lastWeakSpots.map(q => ({
        d: q.domain, q: q.question, c: q.code,
        o: q.options, a: q.correctAnswers, e: q.explanation, multi: q.multi
      }))),
      retestMode: true
    });
  }, [lastWeakSpots, examKey, startExam]);

  return {
    screen, setScreen,
    examKey, setExamKey,
    currentExam,
    items, answers, flags, pos,
    timed, learn, checked,
    sec1Time, sec2Time,
    timeLeft,
    elapsed, pausesUsed, maxPauses: MAX_PAUSES,
    questionTimes, isRetest,
    savedSession, lastWeakSpots,
    sec1Locked,
    isOnBreak, breakTaken,
    hasSections,
    currentSection, isSection1Complete, s1AnsweredCount,
    // actions
    submitSection1,
    startBreak: submitSection1,
    endBreak,
    startExam,
    toggleOption, checkAnswer, toggleFlag,
    goToQuestion, nextQuestion, prevQuestion,
    pauseExam, resumeExam, discardExam,
    handleSubmit,
    startWeakSpotsRetest
  };
}
