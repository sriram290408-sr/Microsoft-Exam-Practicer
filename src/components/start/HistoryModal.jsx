import React from 'react';
import { STORAGE_KEYS } from '../../data/constants.js';
import { storage } from '../../utils/storage.js';

export function HistoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const history = storage.get(STORAGE_KEYS.HISTORY, []);

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear your test history?')) {
      storage.remove(STORAGE_KEYS.HISTORY);
      onClose();
    }
  };

  return (
    <div
      role="dialog"
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
          maxWidth: '560px',
          width: '100%',
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.3)',
          border: '1px solid var(--line, #CBD1D8)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ margin: 0, fontSize: '1.3rem' }}>Exam History</h2>
          <button type="button" className="btn ghost small" onClick={onClose}>
            ✕ Close
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '16px' }}>
          {history.length === 0 ? (
            <p style={{ color: 'var(--ink-soft, #5C6775)', textAlign: 'center', margin: '30px 0' }}>
              No completed tests yet. Take an exam to see your performance log here!
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {history.map((h) => {
                const isPass = h.score >= 70;
                return (
                  <div
                    key={h.id}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'var(--panel-top, #fff)',
                      border: '1px solid var(--line, #CBD1D8)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <b style={{ fontSize: '1.05rem' }}>{h.examCode}</b>
                      <span style={{ margin: '0 8px', color: 'var(--ink-soft)' }}>•</span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--ink-soft)' }}>{h.date}</span>
                      <div style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>
                        {h.correctCount} of {h.totalCount} correct
                        {h.proctorStrikesCount > 0 && ` (${h.proctorStrikesCount} tab switches)`}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span
                        style={{
                          fontSize: '1.3rem',
                          fontWeight: 800,
                          color: isPass ? 'var(--good, #1B7546)' : 'var(--bad, #9E2B38)'
                        }}
                      >
                        {h.score}%
                      </span>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                        {isPass ? 'Passed' : 'Review Needed'}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {history.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="button" className="btn ghost small" onClick={clearHistory}>
              Clear History
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
