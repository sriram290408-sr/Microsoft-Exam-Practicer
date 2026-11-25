import React, { useState, useEffect } from 'react';
import { OptionItem } from './OptionItem.jsx';

export function QuestionCard({
  item,
  index,
  totalCount,
  currentExam,
  selectedAnswers = [],
  isFlagged = false,
  isChecked = false,
  isLearningMode = false,
  breakTaken = false,
  sec1Locked = false,
  onTriggerBreak,
  onToggleOption,
  onCheckAnswer,
  onToggleFlag,
  onPrev,
  onNext
}) {
  const [hintUsed, setHintUsed] = useState(false);
  const [eliminated, setEliminated] = useState([]);

  // Reset hint state on question change
  useEffect(() => {
    setHintUsed(false);
    setEliminated([]);
  }, [index]);

  if (!item) return null;

  const domains = currentExam?.doms || {};
  const domainInfo = domains[item.domain];
  const domainName = typeof domainInfo === 'object' ? domainInfo.name : (domainInfo || item.domain);

  const handleUseHint = () => {
    if (hintUsed) return;
    setHintUsed(true);

    const incorrectIndices = [];
    item.options.forEach((_, optIdx) => {
      if (!item.correctAnswers.includes(optIdx)) {
        incorrectIndices.push(optIdx);
      }
    });

    const toEliminateCount = item.multi ? 1 : Math.min(2, incorrectIndices.length);
    const shuffled = [...incorrectIndices].sort(() => 0.5 - Math.random());
    setEliminated(shuffled.slice(0, toEliminateCount));
  };

  const isAnswerCorrect =
    selectedAnswers.length === item.correctAnswers.length &&
    item.correctAnswers.every((ans) => selectedAnswers.includes(ans));

  return (
    <main className="card" id="card" data-d={item.domain} aria-live="polite">
      {/* Top Metadata: Question count & Flag button */}
      <div className="qmeta">
        <span>
          {totalCount > 100 && (
            <b style={{ color: 'var(--accent, #B8860B)', marginRight: '6px' }}>
              [Section {index < 100 ? '1' : '2'}]
            </b>
          )}
          Question {index + 1} of {totalCount}
        </span>
        <button
          type="button"
          className="flagbtn"
          aria-pressed={isFlagged ? 'true' : 'false'}
          onClick={onToggleFlag}
        >
          {isFlagged ? 'Flagged for review' : 'Flag for review'}
        </button>
      </div>

      {/* Question Text */}
      <p className="qtext">{item.question}</p>

      {/* Code Snippet if present */}
      {item.code && (
        <pre className="code">
          <code>{item.code}</code>
        </pre>
      )}

      {/* Hint Prompt & Hint Action Button */}
      <p className="hint">
        {item.multi ? `Choose ${item.correctAnswers.length > 1 ? item.correctAnswers.length : 'all'}.` : 'Choose one.'}
      </p>

      <button
        type="button"
        className="btn ghost small"
        style={{ margin: '0 0 12px' }}
        disabled={hintUsed || (isLearningMode && isChecked)}
        onClick={handleUseHint}
      >
        {hintUsed ? 'Hint used' : 'Hint'}
      </button>

      {hintUsed && (
        <p className="why" style={{ margin: '0 0 12px' }}>
          Hint: this is a {domainName} question. {eliminated.length > 1 ? 'Two options' : 'One option'} below can be ruled out.
        </p>
      )}

      {/* Options Fieldset */}
      <fieldset className="opts">
        <legend style={{ position: 'absolute', left: '-9999px' }}>Answer options</legend>
        {item.options.map((optText, optIdx) => (
          <OptionItem
            key={optIdx}
            index={optIdx}
            questionIndex={index}
            text={optText}
            isSelected={selectedAnswers.includes(optIdx)}
            isEliminated={eliminated.includes(optIdx)}
            isChecked={isChecked}
            isCorrect={item.correctAnswers.includes(optIdx)}
            multi={item.multi}
            disabled={isLearningMode && isChecked}
            onSelect={() => onToggleOption(optIdx)}
          />
        ))}
      </fieldset>

      {/* Learning Mode: Check Answer & Explanation */}
      {isLearningMode && (
        <>
          {!isChecked ? (
            <button
              type="button"
              className="btn small"
              style={{ margin: '14px 0 0' }}
              disabled={selectedAnswers.length === 0}
              onClick={onCheckAnswer}
            >
              Check answer
            </button>
          ) : (
            <p className="why">
              <b>{isAnswerCorrect ? 'Correct. ' : 'Not quite. '}</b>
              {item.explanation}
            </p>
          )}
        </>
      )}

      {/* Bottom Navigation */}
      <div className="nav">
        <button
          type="button"
          className="btn ghost"
          disabled={index === 0 || (sec1Locked && index === 100)}
          onClick={onPrev}
        >
          Previous
        </button>
        <button
          type="button"
          className={`btn ${index === 99 && !breakTaken && totalCount > 100 ? 'accent' : ''}`}
          onClick={onNext}
          title={index === 99 && !breakTaken && totalCount > 100 ? 'Finish Section 1 and enjoy a 10-minute dance party break with your study cat!' : undefined}
        >
          {index === 99 && !breakTaken && totalCount > 100
            ? 'Complete Section 1 & Start 10-Min Break 🐾'
            : index === totalCount - 1
            ? 'Go to first unanswered'
            : 'Next'}
        </button>
      </div>
    </main>
  );
}
