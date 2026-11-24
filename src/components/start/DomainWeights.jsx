import React from 'react';
import { DOMAIN_COLORS } from '../../data/constants.js';

const DOMAIN_COLOR_LIST = ['var(--prep)', 'var(--model)', 'var(--viz)', 'var(--secure)'];

export function DomainWeights({ currentExam }) {
  const domains = currentExam.doms || {};
  const questionBank = currentExam.bank || [];
  const totalQuestions = questionBank.length || 1;

  // Calculate question count per domain
  const domainCounts = {};
  questionBank.forEach((q) => {
    domainCounts[q.d] = (domainCounts[q.d] || 0) + 1;
  });

  const domainKeys = Object.keys(domains);

  return (
    <>
      <div className="weights" id="weights" role="img">
        {domainKeys.map((dKey, idx) => {
          const count = domainCounts[dKey] || 0;
          const pct = (count / totalQuestions) * 100;
          const color = DOMAIN_COLORS[dKey] || DOMAIN_COLOR_LIST[idx % DOMAIN_COLOR_LIST.length];

          return (
            <div
              key={dKey}
              style={{
                width: `${pct}%`,
                background: color
              }}
            >
              {count}
            </div>
          );
        })}
      </div>

      <div className="weight-legend" id="legend">
        {domainKeys.map((dKey, idx) => {
          const count = domainCounts[dKey] || 0;
          const pct = Math.round((count / totalQuestions) * 100);
          const domainInfo = domains[dKey];
          const domainName = typeof domainInfo === 'object' ? domainInfo.name : domainInfo;
          const color = DOMAIN_COLORS[dKey] || DOMAIN_COLOR_LIST[idx % DOMAIN_COLOR_LIST.length];

          return (
            <span key={dKey}>
              <i className="dot" style={{ background: color }} />
              {domainName} ({count} / {pct}%)
            </span>
          );
        })}
      </div>
    </>
  );
}
