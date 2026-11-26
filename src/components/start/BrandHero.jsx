import React from 'react';

export function BrandHero({ onOpenHistory, onOpenManageBanks }) {
  return (
    <div className="brand-hero">
      <div className="logo-wrap" id="logoWrap">
        <img src="/logo.jpg" alt="Exam Practice Logo" className="brand-logo" id="brandLogo" />
        <div className="logo-ring"></div>
      </div>
      <div className="brand-text" style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div className="brand-badge">
            Official Skills Outlines · 1,700 Verified Questions · 12 Certifications Across Microsoft, Databricks, Snowflake &amp; Anthropic
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {onOpenManageBanks && (
              <button
                type="button"
                className="btn accent small"
                onClick={onOpenManageBanks}
                title="Manage, import, review and validate question banks"
                style={{ padding: '6px 14px', fontSize: '0.85rem' }}
              >
                ⚙ Question Bank Manager
              </button>
            )}
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
        </div>
        <h1>Multi-Cloud &amp; AI Certification Exam Practice</h1>
        <p className="lede">
          Master your Microsoft, Databricks, Snowflake, and Anthropic Claude certifications with comprehensive scenario-based questions, detailed technical explanations, and realistic practice exams.
        </p>
      </div>
    </div>
  );
}
