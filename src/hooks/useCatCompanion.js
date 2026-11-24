import { useState, useRef, useCallback, useEffect } from 'react';

const CHEER_MESSAGES = [
  'Purr-fect! You nailed it! 🐾✨',
  'Meow-velous! 100% correct! ⭐',
  'Spot on! Your hard work is showing! 🎉',
  'Brilliant! Keep this momentum going! 🚀',
  'You mastered that one! High paw! 🐾💫'
];

const SUPPORT_MESSAGES = [
  'Don’t worry, mistakes help us learn! 🐱💛',
  'You’ll get the next one! Shake it off! 🐾',
  'Good try! Read the explanation to master it! 📖',
  'Every mistake is a step toward passing! 💡',
  'I believe in you! Keep going! ✨'
];

const PET_TIPS = [
  'Take your time! Read each question carefully. 🐾',
  'You’re doing great! Keep your focus. ✨',
  'Remember to eliminate obvious wrong answers first! 💡',
  'Purr... I’m rooting for you! 😸',
  'Flag tough questions and come back with fresh eyes! 🚩',
  'Deep breath! You’ve got this! 🌟',
  'Always pay attention to keywords like NOT, ONLY, or TWO! 🔍'
];

export function useCatCompanion() {
  const [mood, setMood] = useState('idle'); // 'idle' | 'happy' | 'comfort' | 'alert'
  const [message, setMessage] = useState('');
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  
  const timerRef = useRef(null);
  const moodTimerRef = useRef(null);

  const showBubble = useCallback((text, duration = 3500) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setMessage(text);
    setIsBubbleVisible(true);

    timerRef.current = setTimeout(() => {
      setIsBubbleVisible(false);
    }, duration);
  }, []);

  const cheer = useCallback((customMsg) => {
    if (moodTimerRef.current) clearTimeout(moodTimerRef.current);
    setMood('happy');
    const msg = customMsg || CHEER_MESSAGES[Math.floor(Math.random() * CHEER_MESSAGES.length)];
    showBubble(msg, 4000);

    moodTimerRef.current = setTimeout(() => {
      setMood('idle');
    }, 3800);
  }, [showBubble]);

  const comfort = useCallback((customMsg) => {
    if (moodTimerRef.current) clearTimeout(moodTimerRef.current);
    setMood('comfort');
    const msg = customMsg || SUPPORT_MESSAGES[Math.floor(Math.random() * SUPPORT_MESSAGES.length)];
    showBubble(msg, 4000);

    moodTimerRef.current = setTimeout(() => {
      setMood('idle');
    }, 3800);
  }, [showBubble]);

  const alert = useCallback((text) => {
    if (moodTimerRef.current) clearTimeout(moodTimerRef.current);
    setMood('alert');
    showBubble(text, 4500);

    moodTimerRef.current = setTimeout(() => {
      setMood('idle');
    }, 4000);
  }, [showBubble]);

  const pet = useCallback(() => {
    if (mood === 'idle') {
      setMood('happy');
      const tip = PET_TIPS[Math.floor(Math.random() * PET_TIPS.length)];
      showBubble(tip, 4000);

      setTimeout(() => {
        setMood('idle');
      }, 3000);
    }
  }, [mood, showBubble]);

  const commentOnFlag = useCallback((isFlagged) => {
    if (isFlagged) {
      showBubble('Flagged for review! We’ll double-check it later. 🚩', 2800);
    } else {
      showBubble('Unflagged! Feeling confident! ✨', 2400);
    }
  }, [showBubble]);

  const commentOnProgress = useCallback((answeredCount, totalCount) => {
    const ratio = answeredCount / totalCount;
    if (answeredCount === totalCount) {
      cheer('All questions answered! Great pace! Review before submitting. 🏆');
    } else if (ratio === 0.75) {
      showBubble('75% complete! Final stretch, you’ve got this! 🏁', 3000);
    } else if (ratio === 0.5) {
      showBubble('Halfway there! Keep that stamina going! 🎯', 3000);
    } else if (ratio === 0.25) {
      showBubble('25% done! Off to a solid start! 🐾', 3000);
    }
  }, [showBubble, cheer]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (moodTimerRef.current) clearTimeout(moodTimerRef.current);
    };
  }, []);

  return {
    mood,
    message,
    isBubbleVisible,
    cheer,
    comfort,
    alert,
    pet,
    showBubble,
    commentOnFlag,
    commentOnProgress
  };
}
