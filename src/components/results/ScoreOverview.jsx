import React, { useState, useEffect } from 'react';

export function ScoreOverview({ scorePct, correctCount, totalCount, isPass }) {
  const [displayScore, setDisplayScore] = useState(0);

  // Smooth counter animation
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(start + (scorePct - start) * eased);
      setDisplayScore(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [scorePct]);

  const verdictTitle = isPass ? 'Passed! Excellent work!' : 'Review recommended';
  const verdictText = isPass
    ? `Congratulations! You scored ${scorePct}%, surpassing the 70% passing threshold (${correctCount} of ${totalCount} correct). You are well positioned for the certification exam.`
    : `You scored ${scorePct}% (${correctCount} of ${totalCount} correct). Microsoft exams require a passing benchmark equivalent to 700/1000 (~70%). Practice your weak areas below and try again!`;

  return (
    <div className="panel">
      <div className="score-row">
        <div
          className="score-num"
          style={{
            borderColor: isPass ? 'var(--good, #1B7546)' : 'var(--bad, #9E2B38)',
            color: isPass ? 'var(--good, #1B7546)' : 'var(--bad, #9E2B38)'
          }}
        >
          <span id="scorePct">{displayScore}</span>
          <small>%</small>
        </div>
        <div className="verdict">
          <h2 id="verdictTitle" style={{ color: isPass ? 'var(--good, #1B7546)' : 'var(--bad, #9E2B38)' }}>
            {verdictTitle}
          </h2>
          <p id="verdictText">{verdictText}</p>
        </div>
      </div>
    </div>
  );
}
