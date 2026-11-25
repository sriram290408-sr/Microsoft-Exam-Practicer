import React from 'react';

export function BrandHero({ onOpenHistory }) {
  return (
    <div className="brand-hero">
      <div className="logo-wrap" id="logoWrap">
        <img src="/logo.jpg" alt="Exam Practice Logo" className="brand-logo" id="brandLogo" />
        <div className="logo-ring"></div>
      </div>
      <div className="brand-text" style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div className="brand-badge">Official Skills Outlines · 1,000 Questions (200 Qs / 2 Sections per Exam) · 5 Certifications</div>
          {onOpenHistory && (
            <button
              type="button"
              className="btn ghost small"
              onClick={onOpenHistory}
              title="View past test scores and dates"
              style={{ padding: '6px 14px', fontSize: '0.85rem' }}
            >
              📊 Test History
            </button>
          )}
        </div>
        <h1>Microsoft exam practice</h1>
        <p className="lede">
          Pick an exam, take a realistic practice test, and pinpoint which skill areas need more study before test day.
        </p>
      </div>
    </div>
  );
}
