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
  isRetest
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
      <span className="stat">
        Answered <b id="ansCount">{answeredCount}</b> of <span id="totQ">{totalCount}</span>
      </span>
      <span
        className={`stat timer${timed && timeLeft <= 60 ? ' timer-urgent' : timed && timeLeft <= 300 ? ' timer-warn' : ''}`}
        id="timer"
      >
        {displayTimer}
      </span>
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

