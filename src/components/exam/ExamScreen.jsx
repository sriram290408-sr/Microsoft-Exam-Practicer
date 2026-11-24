import React, { useEffect } from 'react';
import { ExamTopbar } from './ExamTopbar.jsx';
import { QuestionPalette } from './QuestionPalette.jsx';
import { QuestionCard } from './QuestionCard.jsx';
import { CatStation } from '../companion/CatStation.jsx';

export function ExamScreen({
  session,
  catCompanion,
  onOpenSubmitConfirm
}) {
  const currentItem = session.items[session.pos];
  const currentAnswers = session.answers[session.pos] || [];
  const currentFlag = Boolean(session.flags[session.pos]);
  const currentChecked = Boolean(session.checked[session.pos]);
  const answeredTotal = session.answers.filter((a) => a && a.length > 0).length;

  // Keyboard Navigation: A-D / 1-4 for options, arrows for navigation, F for flag
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in a modal or textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toUpperCase();

      if (['A', 'B', 'C', 'D'].includes(key)) {
        const optMap = { A: 0, B: 1, C: 2, D: 3 };
        session.toggleOption(optMap[key]);
      } else if (['1', '2', '3', '4'].includes(key)) {
        const optMap = { '1': 0, '2': 1, '3': 2, '4': 3 };
        session.toggleOption(optMap[key]);
      } else if (e.key === 'ArrowRight') {
        session.nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        session.prevQuestion();
      } else if (key === 'F') {
        session.toggleFlag();
        catCompanion.commentOnFlag(!currentFlag);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [session, catCompanion, currentFlag]);

  return (
    <section id="exam">
      <ExamTopbar
        examCode={session.currentExam.code}
        answeredCount={answeredTotal}
        totalCount={session.items.length}
        timed={session.timed}
        timeLeft={session.timeLeft}
        elapsed={session.elapsed}
        pausesUsed={session.pausesUsed}
        maxPauses={session.maxPauses}
        onPause={session.pauseExam}
        onSubmit={onOpenSubmitConfirm}
      />

      <div className="layout">
        <QuestionPalette
          items={session.items}
          answers={session.answers}
          flags={session.flags}
          currentIndex={session.pos}
          onSelectQuestion={session.goToQuestion}
        />

        <QuestionCard
          item={currentItem}
          index={session.pos}
          totalCount={session.items.length}
          currentExam={session.currentExam}
          selectedAnswers={currentAnswers}
          isFlagged={currentFlag}
          isChecked={currentChecked}
          isLearningMode={session.learn}
          onToggleOption={session.toggleOption}
          onCheckAnswer={session.checkAnswer}
          onToggleFlag={() => {
            session.toggleFlag();
            catCompanion.commentOnFlag(!currentFlag);
          }}
          onPrev={session.prevQuestion}
          onNext={session.nextQuestion}
        />

        <CatStation
          mood={catCompanion.mood}
          message={catCompanion.message}
          isBubbleVisible={catCompanion.isBubbleVisible}
          onPet={catCompanion.pet}
          layout="station"
        />
      </div>
    </section>
  );
}
