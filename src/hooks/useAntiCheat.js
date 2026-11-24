import { useState, useEffect, useRef, useCallback } from 'react';

const MAX_STRIKES = 3;

export function useAntiCheat({ isActive, onAutoSubmit, onBlockAction }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [awaySeconds, setAwaySeconds] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [strikeLog, setStrikeLog] = useState([]);
  
  const awayTimestampRef = useRef(null);
  const guardPauseRef = useRef(false);

  // Detect leaving the page
  const handleLeave = useCallback(() => {
    if (!isActive || guardPauseRef.current || awayTimestampRef.current !== null) return;
    awayTimestampRef.current = Date.now();
  }, [isActive]);

  const handleReturn = useCallback(() => {
    if (!isActive || guardPauseRef.current || awayTimestampRef.current === null) return;
    
    const awayMs = Date.now() - awayTimestampRef.current;
    awayTimestampRef.current = null;
    const secs = Math.max(1, Math.round(awayMs / 1000));
    setAwaySeconds(secs);
    
    guardPauseRef.current = true;
    setStrikes(prev => {
      const newStrikes = prev + 1;
      return newStrikes;
    });
    setModalOpen(true);
  }, [isActive]);

  // Window blur and visibilitychange listeners
  useEffect(() => {
    if (!isActive) return;

    const onVisibilityChange = () => {
      if (document.hidden) {
        handleLeave();
      } else {
        handleReturn();
      }
    };

    const onBlur = () => handleLeave();
    const onFocus = () => handleReturn();

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('blur', onBlur);
    window.addEventListener('focus', onFocus);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('blur', onBlur);
      window.removeEventListener('focus', onFocus);
    };
  }, [isActive, handleLeave, handleReturn]);

  // Intercept Copy / Cut / Paste / Context Menu
  useEffect(() => {
    if (!isActive) return;

    const handleCopy = (e) => {
      e.preventDefault();
      onBlockAction?.('Copying content is disabled during exams! 🐾');
    };

    const handleCut = (e) => {
      e.preventDefault();
      onBlockAction?.('Cutting content is disabled! 🐾');
    };

    const handlePaste = (e) => {
      e.preventDefault();
      onBlockAction?.('Pasting is disabled! 🐾');
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
      onBlockAction?.('Right-click menu is disabled during the test. 🐾');
    };

    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [isActive, onBlockAction]);

  const confirmModalReason = (reason) => {
    const logEntry = {
      strike: strikes,
      awaySecs: awaySeconds,
      reason: reason.trim(),
      timestamp: new Date().toLocaleTimeString()
    };
    const updatedLog = [...strikeLog, logEntry];
    setStrikeLog(updatedLog);

    setModalOpen(false);
    guardPauseRef.current = false;

    if (strikes >= MAX_STRIKES) {
      onAutoSubmit?.(updatedLog);
    }
  };

  const resetAntiCheat = (initialStrikes = 0, initialLog = []) => {
    setStrikes(initialStrikes);
    setStrikeLog(initialLog);
    setModalOpen(false);
    awayTimestampRef.current = null;
    guardPauseRef.current = false;
  };

  return {
    strikes,
    maxStrikes: MAX_STRIKES,
    strikeLog,
    modalOpen,
    awaySeconds,
    isProctorPaused: guardPauseRef.current,
    confirmModalReason,
    resetAntiCheat
  };
}
