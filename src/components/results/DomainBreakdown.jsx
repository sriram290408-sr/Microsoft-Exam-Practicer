import React from 'react';
import { DOMAIN_COLORS } from '../../data/constants.js';

export function DomainBreakdown({ currentExam, items, answers }) {
  const domains = currentExam?.doms || {};
  const domainStats = {};

  // Initialize
  Object.keys(domains).forEach((dKey) => {
    domainStats[dKey] = { correct: 0, total: 0 };
  });

  // Calculate
  items.forEach((item, idx) => {
    const userAns = answers[idx] || [];
    const isCorrect =
      userAns.length === item.correctAnswers.length &&
      item.correctAnswers.every((ans) => userAns.includes(ans));

    if (!domainStats[item.domain]) {
      domainStats[item.domain] = { correct: 0, total: 0 };
    }

    domainStats[item.domain].total++;
    if (isCorrect) {
      domainStats[item.domain].correct++;
    }
  });

  return (
    <div className="panel">
      <h2 style={{ margin: '0 0 16px', fontSize: '1.15rem' }}>By skill area</h2>
      <div className="domains" id="domains">
        {Object.entries(domainStats).map(([dKey, stat]) => {
          if (stat.total === 0) return null;
          const pct = Math.round((stat.correct / stat.total) * 100);
          const domainInfo = domains[dKey];
          const name = typeof domainInfo === 'object' ? domainInfo.name : (domainInfo || dKey);
          const color = DOMAIN_COLORS[dKey] || 'var(--prep)';
          const meetsPassing = pct >= 70;

          return (
            <div key={dKey} className="drow" style={{ margin: '12px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '0.92rem' }}>
                <span>
                  <b style={{ color }}>{name}</b>
                  <span style={{ color: 'var(--ink-soft)', marginLeft: '8px' }}>
                    ({stat.correct} of {stat.total} correct)
                  </span>
                </span>
                <b style={{ color: meetsPassing ? 'var(--good, #1B7546)' : 'var(--bad, #9E2B38)' }}>
                  {pct}%
                </b>
              </div>

              {/* Progress bar with 70% threshold tick */}
              <div
                style={{
                  height: '10px',
                  background: 'var(--canvas, #CBD1D8)',
                  borderRadius: '5px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div
                  style={{
                    width: `${pct}%`,
                    height: '100%',
                    background: color,
                    borderRadius: '5px',
                    transition: 'width 0.8s ease'
                  }}
                />
                {/* 70% tick */}
                <div
                  style={{
                    position: 'absolute',
                    left: '70%',
                    top: 0,
                    bottom: 0,
                    width: '2px',
                    background: '#000',
                    opacity: 0.6
                  }}
                  title="70% Passing Threshold"
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="bar-note" style={{ fontSize: '0.82rem', color: 'var(--ink-soft)', marginTop: '12px' }}>
        The dark tick mark on each bar indicates the 70% benchmark. Official Microsoft certification exams
        scale passing scores to 700/1000.
      </p>
    </div>
  );
}
