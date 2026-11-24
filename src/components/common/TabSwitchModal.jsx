import React, { useState } from 'react';

export function TabSwitchModal({ isOpen, strikes, maxStrikes, awaySeconds, onConfirm }) {
  const [reason, setReason] = useState('');

  if (!isOpen) return null;

  const isFinalStrike = strikes >= maxStrikes;
  const title = isFinalStrike
    ? `Strike ${strikes} of ${maxStrikes}: Test concluding`
    : `Strike ${strikes} of ${maxStrikes}: Tab switch detected`;

  const subtitle = `You left the test window for approximately ${awaySeconds}s. Leaving the window is recorded. A 3rd strike automatically submits your test.`;

  const handleReturn = (e) => {
    e.preventDefault();
    if (reason.trim().length >= 5) {
      onConfirm(reason);
      setReason('');
    }
  };

  return (
    <div
      id="swModal"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="swTitle"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(23,32,43,.88)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div
        style={{
          background: 'var(--panel, #fff)',
          color: 'var(--ink, #1E2630)',
          borderRadius: '12px',
          maxWidth: '480px',
          width: '100%',
          padding: '24px',
          boxShadow: '0 12px 36px rgba(0,0,0,0.3)',
          border: '1px solid var(--line, #CBD1D8)'
        }}
      >
        <h2 id="swTitle" style={{ margin: '0 0 8px', fontSize: '1.25rem', color: isFinalStrike ? 'var(--bad, #9E2B38)' : 'inherit' }}>
          {title}
        </h2>
        <p id="swSub" style={{ margin: '0 0 14px', color: 'var(--ink-soft, #5C6775)', fontSize: '0.92rem' }}>
          {subtitle}
        </p>

        <label htmlFor="swReason" style={{ fontWeight: 600, display: 'block', marginBottom: '6px' }}>
          Why did you leave the test?
        </label>
        <textarea
          id="swReason"
          rows={3}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="e.g. Checked incoming notification, opened reference..."
          style={{
            width: '100%',
            font: 'inherit',
            padding: '10px',
            border: '1.5px solid var(--line, #CBD1D8)',
            borderRadius: '6px',
            background: 'var(--canvas, #FAFBFD)',
            color: 'inherit',
            boxSizing: 'border-box'
          }}
        />
        <p style={{ margin: '4px 0 16px', fontSize: '0.82rem', color: 'var(--ink-soft, #5C6775)' }}>
          Type at least 5 characters to continue.
        </p>

        <button
          type="button"
          className="btn accent"
          disabled={reason.trim().length < 5}
          onClick={handleReturn}
          style={{ width: '100%' }}
        >
          {isFinalStrike ? 'Submit test now' : 'Return to the test'}
        </button>
      </div>
    </div>
  );
}
