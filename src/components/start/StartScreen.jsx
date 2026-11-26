import React from 'react';
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
  onOpenManageBanks,
  catCompanion
}) {
  const [historyOpen, setHistoryOpen] = React.useState(false);

  const totalQs = currentExam.bank.length;
  const isMultiSection = totalQs > 100;
  const sectionSummary = isMultiSection
    ? `${totalQs} original practice questions for ${currentExam.code} (${currentExam.name}), structured into 2 sections (100 questions each) with an interactive 10-minute dancing buddy cat break in between.`
    : `${totalQs} original practice questions for ${currentExam.code} (${currentExam.name}), designed around official certification objectives.`;

  return (
    <section className="start" id="start">
      <BrandHero
        onOpenHistory={() => setHistoryOpen(true)}
        onOpenManageBanks={onOpenManageBanks}
      />

      <ExamCardGrid
        selectedExamKey={selectedExamKey}
        onSelectExam={onSelectExam}
      />

      <h2 className="examname" id="h1">
        {currentExam.code}: {currentExam.name}
      </h2>

      <p id="intro">{sectionSummary}</p>

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
