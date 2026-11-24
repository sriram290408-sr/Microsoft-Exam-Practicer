import React from 'react';
import { EXAM_LIST } from '../../data/exams/index.js';
import { EXAM_COLORS } from '../../data/constants.js';

export function ExamCardGrid({ selectedExamKey, onSelectExam }) {
  return (
    <div className="cards" id="examCards" role="radiogroup" aria-label="Choose an exam">
      {EXAM_LIST.map((exam) => {
        const isSelected = exam.id === selectedExamKey;
        const examColor = EXAM_COLORS[exam.id] || '#B8860B';

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
            <b>{exam.code}</b>
            <span>{exam.name}</span>
            <span>
              {exam.bank.length} questions, {exam.min} min
            </span>
          </button>
        );
      })}
    </div>
  );
}
