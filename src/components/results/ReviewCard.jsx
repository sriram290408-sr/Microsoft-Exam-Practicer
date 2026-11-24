import React from 'react';
import { DOMAIN_COLORS } from '../../data/constants.js';

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F'];

export function ReviewCard({
  item,
  index,
  userAnswers = [],
  isFlagged = false,
  timeSpent = 0,
  currentExam
}) {
  const isCorrect =
    userAnswers.length === item.correctAnswers.length &&
    item.correctAnswers.every((ans) => userAnswers.includes(ans));

  const domains = currentExam?.doms || {};
  const domainInfo = domains[item.domain];
  const domainName = typeof domainInfo === 'object' ? domainInfo.name : (domainInfo || item.domain);
  const domainColor = DOMAIN_COLORS[item.domain] || 'var(--prep)';

  return (
    <div
      className={`rcard ${isCorrect ? 'rcard-good' : 'rcard-bad'}`}
      style={{
        padding: '18px',
        borderRadius: '10px',
        borderLeft: `5px solid ${isCorrect ? 'var(--good, #1B7546)' : 'var(--bad, #9E2B38)'}`,
        background: 'var(--panel-top, #fff)',
        marginBottom: '14px',
        border: '1px solid var(--line, #CBD1D8)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <b style={{ color: isCorrect ? 'var(--good, #1B7546)' : 'var(--bad, #9E2B38)' }}>
            {isCorrect ? '✓ Question' : '✗ Question'} {index + 1}
          </b>
          <span
            style={{
              background: domainColor,
              color: '#fff',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '0.78rem',
              fontWeight: 600
            }}
          >
            {domainName}
          </span>
          {isFlagged && (
            <span style={{ fontSize: '0.8rem', background: '#F59E0B', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>
              🚩 Flagged
            </span>
          )}
        </div>

        <span style={{ fontSize: '0.82rem', color: 'var(--ink-soft)' }}>
          ⏱ Spent: {timeSpent}s
        </span>
      </div>

      <p style={{ margin: '0 0 10px', fontWeight: 600, fontSize: '0.98rem' }}>
        {item.question}
      </p>

      {item.code && (
        <pre style={{ background: 'rgba(0,0,0,0.06)', padding: '10px', borderRadius: '6px', fontSize: '0.88rem', overflowX: 'auto' }}>
          <code>{item.code}</code>
        </pre>
      )}

      {/* Options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '12px 0' }}>
        {item.options.map((optText, optIdx) => {
          const wasSelected = userAnswers.includes(optIdx);
          const isRightAnswer = item.correctAnswers.includes(optIdx);

          let optBorder = 'var(--line, #CBD1D8)';
          let optBg = 'transparent';
          let labelBadge = null;

          if (isRightAnswer) {
            optBorder = 'var(--good, #1B7546)';
            optBg = 'var(--good-bg, #E3F0E8)';
            labelBadge = <span style={{ color: 'var(--good)', fontWeight: 700, marginLeft: 'auto' }}>✓ Correct Option</span>;
          } else if (wasSelected && !isRightAnswer) {
            optBorder = 'var(--bad, #9E2B38)';
            optBg = 'var(--bad-bg, #F7E8E9)';
            labelBadge = <span style={{ color: 'var(--bad)', fontWeight: 700, marginLeft: 'auto' }}>✗ Your Choice</span>;
          }

          return (
            <div
              key={optIdx}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 12px',
                borderRadius: '6px',
                border: `1.5px solid ${optBorder}`,
                background: optBg,
                fontSize: '0.92rem'
              }}
            >
              <b style={{ width: '24px' }}>{ALPHABET[optIdx]}.</b>
              <span>{optText}</span>
              {labelBadge}
            </div>
          );
        })}
      </div>

      {/* Explanation */}
      <div style={{ background: 'var(--canvas, #FAFBFD)', padding: '12px', borderRadius: '6px', fontSize: '0.9rem', color: 'var(--ink)' }}>
        <b>Explanation: </b>
        {item.explanation}
      </div>
    </div>
  );
}
