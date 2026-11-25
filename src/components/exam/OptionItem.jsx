import React from 'react';

export function OptionItem({
  index,
  questionIndex = 0,
  text,
  isSelected,
  isEliminated = false,
  isChecked = false,
  isCorrect = false,
  multi = false,
  disabled = false,
  onSelect
}) {
  let optClass = 'opt';
  if (isSelected) optClass += ' opt-selected';

  let statusLabel = '';
  if (isChecked) {
    if (isCorrect) {
      optClass += ' opt-good';
      statusLabel = '  ✔ correct';
    } else if (isSelected && !isCorrect) {
      optClass += ' opt-bad';
      statusLabel = '  ✘ your answer';
    }
  }

  if (isEliminated) {
    optClass += ' opt-eliminated';
  }

  const displayText = isEliminated
    ? `${text}  (ruled out by hint)`
    : `${text}${statusLabel}`;

  return (
    <label
      className={optClass}
      style={{
        opacity: isEliminated ? 0.45 : 1,
        cursor: disabled || isEliminated ? 'default' : 'pointer'
      }}
    >
      <input
        type={multi ? 'checkbox' : 'radio'}
        name={`exam_opt_${questionIndex}`}
        checked={isSelected}
        disabled={disabled || isEliminated}
        onChange={onSelect}
      />
      <span style={{ textDecoration: isEliminated ? 'line-through' : 'none' }}>
        {displayText}
      </span>
    </label>
  );
}
