import React, { useState, useEffect } from 'react';

export function QuestionPalette({
  items,
  answers,
  flags,
  currentIndex,
  onSelectQuestion,
  onTriggerBreak,
  breakTaken = false,
  s1Completed = false,
  sec1Locked = false
}) {
  const hasSections = items.length > 100;
  // Force tab to Section 2 once Section 1 is locked
  const defaultTab  = sec1Locked ? 2 : (currentIndex >= 100 ? 2 : 1);
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Sync tab whenever navigation or lock state changes
  useEffect(() => {
    if (sec1Locked) {
      setActiveTab(2);
    } else {
      setActiveTab(currentIndex < 100 ? 1 : 2);
    }
  }, [currentIndex, sec1Locked]);

  // Section 2 becomes accessible only after Section 1 is submitted/completed
  const canAccessSec2 = !hasSections || sec1Locked || s1Completed || breakTaken;
  const canAccessSec1 = !sec1Locked; // permanently locked once submitted

  const s1Items = hasSections ? items.slice(0, 100) : items;
  const s2Items = hasSections ? items.slice(100, 200) : [];

  const s1Answered = s1Items.filter((_, i) => answers[i]      && answers[i].length > 0).length;
  const s2Answered = s2Items.filter((_, i) => answers[100 + i] && answers[100 + i].length > 0).length;

  const displayedSlice = !hasSections ? items : activeTab === 1 ? s1Items : s2Items;
  const offset = hasSections && activeTab === 2 ? 100 : 0;

  return (
    <aside className="palette" aria-label="Question navigator">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <h2 style={{ margin: 0 }}>Questions</h2>
        <span style={{ fontSize: '0.8rem', color: '#A9B7C6' }}>
          {answers.filter(a => a && a.length > 0).length} / {items.length}
        </span>
      </div>

      {/* Section tab switcher */}
      {hasSections && (
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px',
          background: 'rgba(255,255,255,0.08)', padding: '4px',
          borderRadius: '8px', marginBottom: '12px'
        }}>
          {/* Section 1 tab */}
          <button
            type="button"
            onClick={() => { if (canAccessSec1) setActiveTab(1); }}
            disabled={!canAccessSec1}
            title={canAccessSec1 ? 'Switch to Section 1' : 'Section 1 is submitted and locked'}
            style={{
              background: activeTab === 1 ? 'var(--accent, #B8860B)' : 'transparent',
              color: activeTab === 1 ? '#fff' : canAccessSec1 ? '#A9B7C6' : 'rgba(169,183,198,0.35)',
              border: 'none', borderRadius: '6px', padding: '6px 4px',
              fontSize: '0.78rem', fontWeight: activeTab === 1 ? 700 : 500,
              cursor: canAccessSec1 ? 'pointer' : 'not-allowed',
              opacity: canAccessSec1 ? 1 : 0.5, transition: 'all 0.15s ease'
            }}
          >
            {canAccessSec1 ? `Sec 1 (${s1Answered}/100)` : `Sec 1 🔒 (${s1Answered}/100)`}
          </button>

          {/* Section 2 tab */}
          <button
            type="button"
            onClick={() => { if (canAccessSec2) setActiveTab(2); }}
            disabled={!canAccessSec2}
            title={canAccessSec2 ? 'Switch to Section 2' : 'Submit Section 1 to unlock Section 2'}
            style={{
              background: activeTab === 2 ? 'var(--accent, #B8860B)' : 'transparent',
              color: activeTab === 2 ? '#fff' : canAccessSec2 ? '#A9B7C6' : 'rgba(169,183,198,0.4)',
              border: 'none', borderRadius: '6px', padding: '6px 4px',
              fontSize: '0.78rem', fontWeight: activeTab === 2 ? 700 : 500,
              cursor: canAccessSec2 ? 'pointer' : 'not-allowed',
              opacity: canAccessSec2 ? 1 : 0.6, transition: 'all 0.15s ease'
            }}
          >
            {canAccessSec2 ? `Sec 2 (${s2Answered}/100)` : `Sec 2 🔒 (${s2Answered}/100)`}
          </button>
        </div>
      )}

      {/* Question grid */}
      <div className="grid" id="grid">
        {displayedSlice.map((_, sliceIdx) => {
          const globalIdx  = offset + sliceIdx;
          const isAnswered = answers[globalIdx] && answers[globalIdx].length > 0;
          const isFlagged  = Boolean(flags[globalIdx]);
          const isCurrent  = globalIdx === currentIndex;
          const isLocked   = sec1Locked && globalIdx < 100;

          let cls = 'cell';
          if (isCurrent) cls += ' current cur';
          if (isAnswered) cls += ' done';
          if (isFlagged)  cls += ' flag';
          if (isLocked)   cls += ' disabled';

          return (
            <button
              key={globalIdx}
              type="button"
              className={cls}
              disabled={isLocked}
              aria-label={`Q${globalIdx + 1}${isAnswered ? ' Answered' : ''}${isFlagged ? ' Flagged' : ''}${isCurrent ? ' Current' : ''}`}
              onClick={() => onSelectQuestion(globalIdx)}
            >
              {globalIdx + 1}
            </button>
          );
        })}
      </div>

      {/* Submit Section 1 button — shown only while in Sec 1 tab, not yet locked */}
      {hasSections && activeTab === 1 && !sec1Locked && onTriggerBreak && (
        <button
          type="button"
          className="btn accent small"
          onClick={onTriggerBreak}
          style={{ width: '100%', marginTop: '12px', fontSize: '0.8rem' }}
        >
          Submit Section 1 &amp; Start 10m Break 🐾
        </button>
      )}

      <ul className="key">
        <li><span className="k-done" /> Answered</li>
        <li><span className="k-flag" /> Flagged for review</li>
      </ul>
      <p className="keyhint">Keyboard: A–D or 1–4 to answer, arrows to navigate, F to flag.</p>
    </aside>
  );
}
