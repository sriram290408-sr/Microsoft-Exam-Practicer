import React, { useState, useEffect } from 'react';

export function QuestionPalette({
  items,
  answers,
  flags,
  currentIndex,
  onSelectQuestion,
  onTriggerBreak,
  breakTaken = false,
  s1Completed = false
}) {
  const hasSections = items.length > 100;
  const currentSectionOfActive = currentIndex < 100 ? 1 : 2;
  const [activeTab, setActiveTab] = useState(currentSectionOfActive);

  // Allow switching to section 2 if section 1 is completed or break has been taken
  const canAccessSection2 = !hasSections || s1Completed || breakTaken;

  // Keep tab synced with current question navigation
  useEffect(() => {
    setActiveTab(currentIndex < 100 ? 1 : 2);
  }, [currentIndex]);

  const s1Items = hasSections ? items.slice(0, 100) : items;
  const s2Items = hasSections ? items.slice(100, 200) : [];

  const s1Answered = s1Items.filter((_, idx) => answers[idx] && answers[idx].length > 0).length;
  const s2Answered = s2Items.filter((_, idx) => answers[100 + idx] && answers[100 + idx].length > 0).length;

  const displayedSlice = !hasSections
    ? items
    : activeTab === 1
    ? s1Items
    : s2Items;
  const offset = hasSections && activeTab === 2 ? 100 : 0;

  return (
    <aside className="palette" aria-label="Question navigator">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h2 style={{ margin: 0 }}>Questions</h2>
        <span style={{ fontSize: '0.8rem', color: '#A9B7C6' }}>
          {answers.filter((a) => a && a.length > 0).length} / {items.length}
        </span>
      </div>

      {/* Section Tabs Switcher for 200 Qs */}
      {hasSections && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4px',
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '4px',
            borderRadius: '8px',
            marginBottom: '12px'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab(1)}
            style={{
              background: activeTab === 1 ? 'var(--accent, #B8860B)' : 'transparent',
              color: activeTab === 1 ? '#fff' : '#A9B7C6',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 4px',
              fontSize: '0.78rem',
              fontWeight: activeTab === 1 ? 700 : 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            Sec 1 ({s1Answered}/100)
          </button>
          <button
            type="button"
            onClick={() => {
              if (canAccessSection2) {
                setActiveTab(2);
              }
            }}
            disabled={!canAccessSection2}
            title={canAccessSection2 ? 'Switch to Section 2' : 'Complete Section 1 to unlock Section 2'}
            style={{
              background: activeTab === 2 ? 'var(--accent, #B8860B)' : 'transparent',
              color: activeTab === 2 ? '#fff' : canAccessSection2 ? '#A9B7C6' : 'rgba(169, 183, 198, 0.4)',
              border: 'none',
              borderRadius: '6px',
              padding: '6px 4px',
              fontSize: '0.78rem',
              fontWeight: activeTab === 2 ? 700 : 500,
              cursor: canAccessSection2 ? 'pointer' : 'not-allowed',
              opacity: canAccessSection2 ? 1 : 0.6,
              transition: 'all 0.15s ease'
            }}
          >
            {canAccessSection2 ? `Sec 2 (${s2Answered}/100)` : `Sec 2 🔒 (${s2Answered}/100)`}
          </button>
        </div>
      )}

      {/* Grid of 100 Keycaps for the selected Section */}
      <div className="grid" id="grid">
        {displayedSlice.map((_, sliceIdx) => {
          const globalIdx = offset + sliceIdx;
          const isAnswered = answers[globalIdx] && answers[globalIdx].length > 0;
          const isFlagged = Boolean(flags[globalIdx]);
          const isCurrent = globalIdx === currentIndex;

          let cellClasses = 'cell';
          if (isCurrent) cellClasses += ' current cur';
          if (isAnswered) cellClasses += ' done';
          if (isFlagged) cellClasses += ' flag';

          return (
            <button
              key={globalIdx}
              type="button"
              className={cellClasses}
              aria-label={`Question ${globalIdx + 1}${isAnswered ? ', Answered' : ''}${isFlagged ? ', Flagged' : ''}${isCurrent ? ', Current' : ''}`}
              onClick={() => onSelectQuestion(globalIdx)}
            >
              {globalIdx + 1}
            </button>
          );
        })}
      </div>

      {/* Break trigger only after Section 1 is completed and break has not been taken yet */}
      {hasSections && activeTab === 1 && s1Completed && !breakTaken && onTriggerBreak && (
        <button
          type="button"
          className="btn ghost small"
          onClick={onTriggerBreak}
          style={{
            width: '100%',
            marginTop: '12px',
            fontSize: '0.8rem',
            background: 'rgba(245, 158, 11, 0.15)',
            borderColor: '#F59E0B',
            color: '#FCD34D'
          }}
        >
          🐾 Take 10m Dance Break
        </button>
      )}

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
        Keyboard: A–D or 1–4 to answer, arrows to navigate, F to flag.
      </p>
    </aside>
  );
}
