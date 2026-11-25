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
  s1Completed = false,
  sec1Locked = false
}) {
  const displayTimer    = timed ? formatTime(timeLeft) : formatTime(elapsed);
  const remainingPauses = Math.max(0, maxPauses - pausesUsed);
  const pauseDisabled   = remainingPauses <= 0;
  const topbarTitle     = isRetest ? `${examCode} weak-area practice` : `${examCode} knowledge check`;

  return (
    <div className="topbar">
      <img src="/logo.jpg" alt="Logo" className="topbar-logo" />
      <span className="title" id="topTitle">{topbarTitle}</span>

      {/* Section badge for 200-Q exams */}
      {totalCount > 100 && (
        <span style={{
          background: currentSection === 1 ? 'rgba(59,130,246,0.2)' : 'rgba(16,185,129,0.2)',
          border: `1px solid ${currentSection === 1 ? '#3B82F6' : '#10B981'}`,
          color: currentSection === 1 ? '#93C5FD' : '#6EE7B7',
          padding: '4px 10px', borderRadius: '12px',
          fontSize: '0.82rem', fontWeight: 700, whiteSpace: 'nowrap'
        }}>
          Section {currentSection} of 2 · {currentSection === 1 ? 'Qs 1–100' : 'Qs 101–200'} · 60m
        </span>
      )}

      <span className="stat">
        Answered <b id="ansCount">{answeredCount}</b> of <span id="totQ">{totalCount}</span>
      </span>

      <span
        className={`stat timer${timed && timeLeft <= 60 ? ' timer-urgent' : timed && timeLeft <= 300 ? ' timer-warn' : ''}`}
        id="timer"
        title={timed ? `Section ${currentSection} time remaining (60 min)` : 'Elapsed time'}
      >
        {displayTimer}
      </span>

      {/* Submit Section 1 & Break button — visible only while in Section 1 and not yet locked */}
      {totalCount > 100 && currentSection === 1 && !sec1Locked && onTriggerBreak && (
        <button
          type="button"
          className="btn ghost small"
          onClick={onTriggerBreak}
          title="Submit Section 1 and start 10-minute cat dance break"
          style={{ background: 'rgba(245,158,11,0.15)', borderColor: '#F59E0B', color: '#FCD34D' }}
        >
          🐾 Submit Sec 1 & Break
        </button>
      )}

      <button
        type="button"
        className="btn ghost small"
        id="pauseBtn"
        onClick={onPause}
        disabled={pauseDisabled}
        title={pauseDisabled ? 'No pauses remaining' : `Pause test (${remainingPauses} left)`}
      >
        ⏸ Pause {!pauseDisabled && `(${remainingPauses} left)`}
      </button>

      <button
        type="button"
        className="btn ghost small"
        id="submitBtn"
        onClick={onSubmit}
      >
        Submit & finish
      </button>
    </div>
  );
}
