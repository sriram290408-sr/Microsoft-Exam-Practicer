import React, { useState } from 'react';
import { MAX_PAUSES } from '../../data/constants.js';

export function StartControls({
  currentExam,
  timed,
  setTimed,
  learn,
  setLearn,
  savedSession,
  onStart,
  onResume,
  onDiscard
}) {
  const [discardArmed, setDiscardArmed] = useState(false);

  const handleDiscardClick = () => {
    if (!discardArmed) {
      setDiscardArmed(true);
      setTimeout(() => setDiscardArmed(false), 4000);
    } else {
      onDiscard();
      setDiscardArmed(false);
    }
  };

  const resumePausesRemaining = savedSession
    ? Math.max(0, MAX_PAUSES - (savedSession.pausesUsed || 0))
    : 0;

  const answeredInSave = savedSession?.answers
    ? savedSession.answers.filter((a) => a && a.length > 0).length
    : 0;

  return (
    <>
      <label className="check">
        <input
          type="checkbox"
          id="timed"
          checked={timed}
          onChange={(e) => setTimed(e.target.checked)}
        />
        <span id="timedLbl">
          Time me: {currentExam.min} minutes, auto-submit at zero
        </span>
      </label>

      <label className="check">
        <input
          type="checkbox"
          id="learn"
          checked={learn}
          onChange={(e) => setLearn(e.target.checked)}
        />
        <span>Learning mode: check each answer and read the explanation as you go</span>
      </label>

      <p style={{ fontSize: '.9rem' }}>
        <b>Tab rule:</b> leaving this tab or window shows a warning and asks for a reason. The third time ends the test.
      </p>

      <button
        type="button"
        className="btn accent big"
        id="startBtn"
        onClick={onStart}
      >
        Start test
      </button>

      {savedSession && (
        <span className="rbox" id="resumeWrap" style={{ marginLeft: '10px' }}>
          <button
            type="button"
            className="btn"
            id="resumeBtn"
            onClick={onResume}
          >
            Resume paused {savedSession.examKey} test ({answeredInSave} of {savedSession.items?.length || 200} answered · {resumePausesRemaining} pause{resumePausesRemaining === 1 ? '' : 's'} left)
          </button>
          <button
            type="button"
            className="btn"
            id="discardBtn"
            title="Discard paused test"
            aria-label="Discard paused test"
            onClick={handleDiscardClick}
            style={{
              fontSize: discardArmed ? '.9rem' : '',
              fontWeight: discardArmed ? 700 : 'normal',
              color: discardArmed ? 'var(--bad, #9E2B38)' : 'inherit'
            }}
          >
            {discardArmed ? 'Delete?' : '×'}
          </button>
        </span>
      )}

      <p style={{ marginTop: '18px', fontSize: '.9rem', color: 'var(--ink-soft)' }}>
        Question and answer order is shuffled on every attempt. Some questions ask for two answers, and you must pick both to score. You can flag questions and jump around freely. Answers show only after you submit.
      </p>
    </>
  );
}
