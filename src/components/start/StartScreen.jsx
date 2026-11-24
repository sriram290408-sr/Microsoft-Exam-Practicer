import React, { useState } from 'react';
import { BrandHero } from './BrandHero.jsx';
import { ExamCardGrid } from './ExamCardGrid.jsx';
import { DomainWeights } from './DomainWeights.jsx';
import { StartControls } from './StartControls.jsx';
import { HistoryModal } from './HistoryModal.jsx';
import { CatStation } from '../companion/CatStation.jsx';

export function StartScreen({
  selectedExamKey,
  onSelectExam,
  currentExam,
  timed,
  setTimed,
  learn,
  setLearn,
  savedSession,
  onStartExam,
  onResumeExam,
  onDiscardExam,
  catCompanion
}) {
  const [historyOpen, setHistoryOpen] = useState(false);

  return (
    <section className="start" id="start">
      <BrandHero onOpenHistory={() => setHistoryOpen(true)} />

      <ExamCardGrid
        selectedExamKey={selectedExamKey}
        onSelectExam={onSelectExam}
      />

      <h2 className="examname" id="h1">
        {currentExam.code}: {currentExam.name}
      </h2>

      <p id="intro">
        {currentExam.bank.length} original practice questions for {currentExam.code} ({currentExam.name}), written from the published skills outline, not taken from Microsoft's exam.
      </p>

      <DomainWeights currentExam={currentExam} />

      <StartControls
        currentExam={currentExam}
        timed={timed}
        setTimed={setTimed}
        learn={learn}
        setLearn={setLearn}
        savedSession={savedSession}
        onStart={onStartExam}
        onResume={onResumeExam}
        onDiscard={onDiscardExam}
      />

      <CatStation
        mood={catCompanion.mood}
        message={catCompanion.message}
        isBubbleVisible={catCompanion.isBubbleVisible}
        onPet={catCompanion.pet}
        layout="inline"
      />

      <HistoryModal
        isOpen={historyOpen}
        onClose={() => setHistoryOpen(false)}
      />
    </section>
  );
}
