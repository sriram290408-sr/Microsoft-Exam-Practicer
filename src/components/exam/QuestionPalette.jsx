import React from 'react';

export function QuestionPalette({
  items,
  answers,
  flags,
  currentIndex,
  onSelectQuestion
}) {
  return (
    <aside className="palette" aria-label="Question navigator">
      <h2>Questions</h2>
      <div className="grid" id="grid">
        {items.map((item, idx) => {
          const isAnswered = answers[idx] && answers[idx].length > 0;
          const isFlagged = Boolean(flags[idx]);
          const isCurrent = idx === currentIndex;

          let cellClasses = 'cell';
          if (isCurrent) cellClasses += ' cur';
          if (isAnswered) cellClasses += ' done';
          if (isFlagged) cellClasses += ' flag';

          return (
            <button
              key={idx}
              type="button"
              className={cellClasses}
              aria-label={`Question ${idx + 1}${isAnswered ? ', Answered' : ''}${isFlagged ? ', Flagged' : ''}${isCurrent ? ', Current' : ''}`}
              onClick={() => onSelectQuestion(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      <ul className="key">
        <li>
          <span className="k-done" />
          Answered
        </li>
        <li>
          <span className="k-flag" />
          Flagged for review
        </li>
      </ul>

      <p className="keyhint">
        Keyboard: A to D choose an answer, left and right arrows move between questions, F flags.
      </p>
    </aside>
  );
}
