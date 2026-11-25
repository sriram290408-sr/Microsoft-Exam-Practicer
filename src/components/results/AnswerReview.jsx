import React, { useState } from 'react';
import { ReviewCard } from './ReviewCard.jsx';
import { exportResultsCsv } from '../../utils/exportCsv.js';

export function AnswerReview({
  currentExam,
  items,
  answers,
  flags,
  questionTimes,
  onRetake,
  onPracticeWeakSpots
}) {
  const [filter, setFilter] = useState('all'); // 'all' | 'sec1' | 'sec2' | 'incorrect' | 'correct' | 'flagged'

  const incorrectCount = items.filter((item, idx) => {
    const userAns = answers[idx] || [];
    return !(
      userAns.length === item.correctAnswers.length &&
      item.correctAnswers.every((ans) => userAns.includes(ans))
    );
  }).length;

  const correctCount = items.length - incorrectCount;
  const flaggedCount = flags.filter(Boolean).length;
  const hasSections = items.length > 100;

  const filteredItems = items
    .map((item, idx) => ({ item, idx }))
    .filter(({ item, idx }) => {
      const userAns = answers[idx] || [];
      const isCorrect =
        userAns.length === item.correctAnswers.length &&
        item.correctAnswers.every((ans) => userAns.includes(ans));

      if (filter === 'sec1') return idx < 100;
      if (filter === 'sec2') return idx >= 100;
      if (filter === 'incorrect') return !isCorrect;
      if (filter === 'correct') return isCorrect;
      if (filter === 'flagged') return Boolean(flags[idx]);
      return true;
    });

  const handleDownloadCsv = () => {
    exportResultsCsv(currentExam, items, answers, questionTimes);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="panel">
      <h2 style={{ margin: '0 0 10px', fontSize: '1.15rem' }}>Review your answers</h2>

      {/* Filter Tabs */}
      <div className="filters" id="filters" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
        <button
          type="button"
          className={`btn small ${filter === 'all' ? 'accent' : 'ghost'}`}
          onClick={() => setFilter('all')}
        >
          All ({items.length})
        </button>
        {hasSections && (
          <>
            <button
              type="button"
              className={`btn small ${filter === 'sec1' ? 'accent' : 'ghost'}`}
              onClick={() => setFilter('sec1')}
            >
              Section 1 (1–100)
            </button>
            <button
              type="button"
              className={`btn small ${filter === 'sec2' ? 'accent' : 'ghost'}`}
              onClick={() => setFilter('sec2')}
            >
              Section 2 (101–200)
            </button>
          </>
        )}
        <button
          type="button"
          className={`btn small ${filter === 'incorrect' ? 'accent' : 'ghost'}`}
          onClick={() => setFilter('incorrect')}
        >
          Incorrect ({incorrectCount})
        </button>
        <button
          type="button"
          className={`btn small ${filter === 'correct' ? 'accent' : 'ghost'}`}
          onClick={() => setFilter('correct')}
        >
          Correct ({correctCount})
        </button>
        <button
          type="button"
          className={`btn small ${filter === 'flagged' ? 'accent' : 'ghost'}`}
          onClick={() => setFilter('flagged')}
        >
          Flagged ({flaggedCount})
        </button>
      </div>

      {/* Review List */}
      <div id="review">
        {filteredItems.map(({ item, idx }) => (
          <ReviewCard
            key={item.id || idx}
            item={item}
            index={idx}
            userAnswers={answers[idx] || []}
            isFlagged={Boolean(flags[idx])}
            timeSpent={questionTimes[idx] || 0}
            currentExam={currentExam}
          />
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
        <button type="button" className="btn" id="retryBtn" onClick={onRetake}>
          Take it again
        </button>

        {incorrectCount > 0 && (
          <button
            type="button"
            className="btn accent"
            id="weakBtn"
            onClick={onPracticeWeakSpots}
          >
            Practice my weak spots ({incorrectCount} questions)
          </button>
        )}

        <button
          type="button"
          className="btn ghost"
          id="csvBtn"
          onClick={handleDownloadCsv}
        >
          Download CSV
        </button>

        <button
          type="button"
          className="btn ghost"
          id="printBtn"
          onClick={handlePrint}
        >
          Print results
        </button>
      </div>
    </div>
  );
}
