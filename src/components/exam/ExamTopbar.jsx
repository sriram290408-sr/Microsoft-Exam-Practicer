import React from 'react';
import { formatTime } from '../../utils/formatters.js';

export function ExamTopbar({
  examCode,
  answeredCount,
  totalCount,
  timed,
  timeLeft,
  elapsed,
  pausesUsed,
  maxPauses,
  onPause,
  onSubmit,
  isRetest,
  currentSection = 1,
  onTriggerBreak,
  breakTaken = false,
  s1Completed = false
}) {
  const displayTimer = timed ? formatTime(timeLeft) : formatTime(elapsed);
  const remainingPauses = Math.max(0, maxPauses - pausesUsed);
  const progressPct = totalCount > 0 ? (answeredCount / totalCount) * 100 : 0;
  const pauseDisabled = remainingPauses <= 0;

  const topbarTitle = isRetest
    ? `${examCode} weak-area practice`
    : `${examCode} knowledge check`;

  return (
    <div className="topbar">
      <img src="/logo.jpg" alt="Logo" className="topbar-logo" />
      <span className="title" id="topTitle">
        {topbarTitle}
      </span>
      {totalCount > 100 && (
        <span
          style={{
            background: currentSection === 1 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(16, 185, 129, 0.2)',
            border: `1px solid ${currentSection === 1 ? '#3B82F6' : '#10B981'}`,
            color: currentSection === 1 ? '#93C5FD' : '#6EE7B7',
            padding: '4px 10px',
            borderRadius: '12px',
            fontSize: '0.82rem',
            fontWeight: 700,
            whiteSpace: 'nowrap'
          }}
        >
          Section {currentSection} of 2 ({currentSection === 1 ? 'Qs 1–100' : 'Qs 101–200'})
        </span>
      )}
      <span className="stat">
        Answered <b id="ansCount">{answeredCount}</b> of <span id="totQ">{totalCount}</span>
      </span>
      <span
        className={`stat timer${timed && timeLeft <= 60 ? ' timer-urgent' : timed && timeLeft <= 300 ? ' timer-warn' : ''}`}
        id="timer"
      >
        {displayTimer}
      </span>
      {totalCount > 100 && currentSection === 1 && s1Completed && !breakTaken && onTriggerBreak && (
        <button
          type="button"
          className="btn ghost small"
          onClick={onTriggerBreak}
          title="Take 10-minute break with dancing cat"
          style={{
            background: 'rgba(245, 158, 11, 0.15)',
            borderColor: '#F59E0B',
            color: '#FCD34D'
          }}
        >
          🐾 10m Break
        </button>
      )}
      <button
        type="button"
        className="btn ghost small"
        id="pauseBtn"
        onClick={!pauseDisabled ? onPause : undefined}
        disabled={pauseDisabled}
        style={pauseDisabled ? { opacity: 0.45, cursor: 'not-allowed' } : {}}
        title={
          pauseDisabled
            ? 'Pause limit reached (maximum 2 pauses per test attempt)'
            : `Pause test (${remainingPauses} pause${remainingPauses === 1 ? '' : 's'} remaining)`
        }
      >
        {pauseDisabled ? 'Pause (0/2 left)' : `Pause (${remainingPauses} left)`}
      </button>
      <button
        type="button"
        className="btn accent small"
        id="submitBtn"
        onClick={onSubmit}
      >
        Submit test
      </button>
      <div className="progress">
        <i id="progressFill" style={{ width: `${progressPct}%` }} />
      </div>
    </div>
  );
}

