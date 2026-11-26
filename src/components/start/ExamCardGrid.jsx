import React, { useState } from 'react';
import { EXAM_LIST, PLATFORMS } from '../../data/exams/index.js';
import { EXAM_COLORS } from '../../data/constants.js';

export function ExamCardGrid({ selectedExamKey, onSelectExam }) {
  const [selectedPlatform, setSelectedPlatform] = useState('All');

  const filteredExams = selectedPlatform === 'All'
    ? EXAM_LIST
    : EXAM_LIST.filter(exam => (exam.platform || 'Microsoft') === selectedPlatform);

  return (
    <div className="exam-selection-container" style={{ marginBottom: '24px' }}>
      {/* Platform Category Tabs */}
      <div
        className="platform-tabs"
        role="tablist"
        aria-label="Filter certifications by platform"
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '16px',
          flexWrap: 'wrap'
        }}
      >
        {PLATFORMS.map(platform => {
          const isActive = selectedPlatform === platform;
          return (
            <button
              key={platform}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelectedPlatform(platform)}
              style={{
                background: isActive ? 'var(--accent, #B8860B)' : 'rgba(255, 255, 255, 0.06)',
                color: isActive ? '#fff' : 'var(--ink-soft, #A9B7C6)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.88rem',
                fontWeight: isActive ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {platform}
            </button>
          );
        })}
      </div>

      {/* Grid of Certification Cards */}
      <div className="cards" id="examCards" role="radiogroup" aria-label="Choose an exam">
        {filteredExams.map((exam) => {
          const isSelected = exam.id === selectedExamKey;
          const examColor = EXAM_COLORS[exam.id] || '#B8860B';
          const sectionsText = exam.bank.length > 100 ? '2 sections' : '1 section';

          return (
            <button
              key={exam.id}
              type="button"
              className="xcard"
              role="radio"
              aria-checked={isSelected ? 'true' : 'false'}
              style={{ '--c': examColor }}
              onClick={() => onSelectExam(exam.id)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <b>{exam.code}</b>
                <span style={{ fontSize: '0.72rem', opacity: 0.8, background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>
                  {exam.platform || 'Cloud'}
                </span>
              </div>
              <span style={{ fontWeight: 600 }}>{exam.name}</span>
              <span style={{ fontSize: '0.82rem', opacity: 0.85 }}>
                {exam.bank.length} questions · {exam.min} min · {sectionsText}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
