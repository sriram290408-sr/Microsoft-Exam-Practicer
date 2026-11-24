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
  onSubmit
}) {
  const displayTimer = timed ? formatTime(timeLeft) : formatTime(elapsed);
  const remainingPauses = Math.max(0, maxPauses - pausesUsed);
  const progressPct = totalCount > 0 ? (answeredCount / totalCount) * 100 : 0;

  return (
    <div className="topbar">
      <img src="/logo.jpg" alt="Logo" className="topbar-logo" />
      <span className="title" id="topTitle">
        {examCode} knowledge check
      </span>
      <span className="stat">
        Answered <b id="ansCount">{answeredCount}</b> of <span id="totQ">{totalCount}</span>
      </span>
      <span className="stat timer" id="timer">
        {displayTimer}
      </span>
      <button
        type="button"
        className="btn ghost small"
        id="pauseBtn"
        onClick={onPause}
        title={
          remainingPauses === 0
            ? 'Pause limit reached (maximum 2 pauses per test attempt)'
            : `Pause test (${remainingPauses} pause${remainingPauses === 1 ? '' : 's'} remaining)`
        }
      >
        Pause ({remainingPauses} left)
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
