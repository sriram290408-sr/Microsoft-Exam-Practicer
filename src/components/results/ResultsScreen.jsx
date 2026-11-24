import React from 'react';
import { ScoreOverview } from './ScoreOverview.jsx';
import { DomainBreakdown } from './DomainBreakdown.jsx';
import { AnswerReview } from './AnswerReview.jsx';
import { CatStation } from '../companion/CatStation.jsx';
import { Confetti } from '../common/Confetti.jsx';

export function ResultsScreen({
  session,
  catCompanion,
  onRetakeExam,
  onPracticeWeakSpots
}) {
  let correctCount = 0;
  session.items.forEach((item, idx) => {
    const userAns = session.answers[idx] || [];
    const isCorrect =
      userAns.length === item.correctAnswers.length &&
      item.correctAnswers.every((ans) => userAns.includes(ans));
    if (isCorrect) correctCount++;
  });

  const totalCount = session.items.length || 1;
  const scorePct = Math.round((correctCount / totalCount) * 100);
  const isPass = scorePct >= 70;

  return (
    <section id="results" className="results">
      {isPass && <Confetti trigger={true} />}

      <ScoreOverview
        scorePct={scorePct}
        correctCount={correctCount}
        totalCount={totalCount}
        isPass={isPass}
      />

      <CatStation
        mood={isPass ? 'happy' : 'comfort'}
        message={
          isPass
            ? `Congratulations! ${scorePct}% is a fantastic passing score! You’re ready! 🎓✨`
            : `Good effort! ${scorePct}% is a great baseline. Review your missed answers and drill again! 🐱💛`
        }
        isBubbleVisible={true}
        onPet={catCompanion.pet}
        layout="inline"
      />

      <DomainBreakdown
        currentExam={session.currentExam}
        items={session.items}
        answers={session.answers}
      />

      <AnswerReview
        currentExam={session.currentExam}
        items={session.items}
        answers={session.answers}
        flags={session.flags}
        questionTimes={session.questionTimes}
        onRetake={onRetakeExam}
        onPracticeWeakSpots={onPracticeWeakSpots}
      />
    </section>
  );
}
