import React, { useState, useEffect } from 'react';
import { useThemePreferences } from './hooks/useThemePreferences.js';
import { useCatCompanion } from './hooks/useCatCompanion.js';
import { useAntiCheat } from './hooks/useAntiCheat.js';
import { useExamSession } from './hooks/useExamSession.js';

import { Background3D } from './components/common/Background3D.jsx';
import { CustomCursor } from './components/common/CustomCursor.jsx';
import { PreferencesDock } from './components/common/PreferencesDock.jsx';
import { TabSwitchModal } from './components/common/TabSwitchModal.jsx';

import { StartScreen } from './components/start/StartScreen.jsx';
import { ExamScreen } from './components/exam/ExamScreen.jsx';
import { ResultsScreen } from './components/results/ResultsScreen.jsx';

export function App() {
  const themePrefs = useThemePreferences();
  const catCompanion = useCatCompanion();

  const [submitConfirmOpen, setSubmitConfirmOpen] = useState(false);
  const [timedCheck, setTimedCheck] = useState(false);
  const [learnCheck, setLearnCheck] = useState(false);

  const session = useExamSession({
    onCatAlert: catCompanion.alert,
    onCatCheer: catCompanion.cheer,
    onCatSupport: catCompanion.comfort,
    onCatProgress: catCompanion.commentOnProgress
  });

  // Anti-cheat detection (active during exam screen)
  const antiCheat = useAntiCheat({
    isActive: session.screen === 'exam',
    onAutoSubmit: (strikeLog) => {
      session.handleSubmit(strikeLog);
    },
    onBlockAction: (msg) => {
      catCompanion.alert(msg);
    }
  });

  // Sync body dataset with current exam code for theme colors
  useEffect(() => {
    document.body.setAttribute('data-exam', session.examKey);
  }, [session.examKey]);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [session.screen]);

  const handleStartExam = () => {
    antiCheat.resetAntiCheat();
    session.startExam({
      selectedExamKey: session.examKey,
      isTimed: timedCheck,
      isLearning: learnCheck
    });
  };

  const handleResumeExam = () => {
    if (session.savedSession) {
      antiCheat.resetAntiCheat();
      session.resumeExam();
    }
  };

  const handleRetakeExam = () => {
    session.setScreen('start');
  };

  const handleOpenSubmitConfirm = () => {
    const answeredCount = session.answers.filter((a) => a && a.length > 0).length;
    const unansweredCount = session.items.length - answeredCount;

    if (unansweredCount > 0) {
      setSubmitConfirmOpen(true);
    } else {
      session.handleSubmit(antiCheat.strikeLog);
    }
  };

  const handleConfirmSubmit = () => {
    setSubmitConfirmOpen(false);
    session.handleSubmit(antiCheat.strikeLog);
  };

  return (
    <>
      <div
        id="scrollBar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3.5px',
          background: 'var(--accent)',
          width: '0%',
          zIndex: 9999,
          transition: 'width 0.1s linear',
          boxShadow: '0 0 8px var(--accent)'
        }}
      />

      <Background3D isResultsScreen={session.screen === 'results'} />
      <CustomCursor />

      <div className="wrap">
        {session.screen === 'start' && (
          <StartScreen
            selectedExamKey={session.examKey}
            onSelectExam={session.setExamKey}
            currentExam={session.currentExam}
            timed={timedCheck}
            setTimed={setTimedCheck}
            learn={learnCheck}
            setLearn={setLearnCheck}
            savedSession={session.savedSession}
            onStartExam={handleStartExam}
            onResumeExam={handleResumeExam}
            onDiscardExam={session.discardExam}
            catCompanion={catCompanion}
          />
        )}

        {session.screen === 'exam' && (
          <ExamScreen
            session={session}
            catCompanion={catCompanion}
            onOpenSubmitConfirm={handleOpenSubmitConfirm}
          />
        )}

        {session.screen === 'results' && (
          <ResultsScreen
            session={session}
            catCompanion={catCompanion}
            onRetakeExam={handleRetakeExam}
            onPracticeWeakSpots={session.startWeakSpotsRetest}
          />
        )}
      </div>

      <PreferencesDock
        fontSize={themePrefs.fontSize}
        onCycleFontSize={themePrefs.cycleFontSize}
        isDark={themePrefs.isDark}
        onToggleTheme={themePrefs.toggleTheme}
      />

      <TabSwitchModal
        isOpen={antiCheat.modalOpen}
        strikes={antiCheat.strikes}
        maxStrikes={antiCheat.maxStrikes}
        awaySeconds={antiCheat.awaySeconds}
        onConfirm={antiCheat.confirmModalReason}
      />

      {/* Submit Confirmation Modal */}
      {submitConfirmOpen && (
        <div
          role="alertdialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(23,32,43,.85)',
            zIndex: 998,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            style={{
              background: 'var(--panel, #FAFBFD)',
              color: 'var(--ink, #1E2630)',
              borderRadius: '12px',
              maxWidth: '440px',
              width: '100%',
              padding: '24px',
              boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
              border: '1px solid var(--line, #CBD1D8)'
            }}
          >
            <h2 style={{ margin: '0 0 10px', fontSize: '1.25rem' }}>Submit test now?</h2>
            <p style={{ margin: '0 0 18px', color: 'var(--ink-soft)', lineHeight: 1.5 }}>
              You have {session.items.length - session.answers.filter((a) => a && a.length > 0).length} unanswered question(s).
              Are you sure you want to finish and view your results?
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                type="button"
                className="btn ghost"
                onClick={() => setSubmitConfirmOpen(false)}
              >
                Keep working
              </button>
              <button
                type="button"
                className="btn accent"
                onClick={handleConfirmSubmit}
              >
                Submit now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
