import React from 'react';

export function CatCompanion({ mood = 'idle', message = '', isBubbleVisible = false, onPet }) {
  // CSS classes for mood: cat-idle, cat-happy, cat-comfort, cat-alert
  const moodClass = `cat-${mood}`;

  return (
    <aside
      id="catCompanion"
      className={`cat-companion ${moodClass}`}
      title="Your study buddy cat! Click me for encouragement!"
      aria-label="Animated Cat Study Buddy"
      onClick={onPet}
      style={{ cursor: 'pointer' }}
    >
      <div
        className="cat-bubble"
        id="catBubble"
        role="status"
        aria-live="polite"
        style={{
          opacity: isBubbleVisible ? 1 : 0,
          transform: isBubbleVisible ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.96)',
          pointerEvents: isBubbleVisible ? 'auto' : 'none',
          transition: 'opacity 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <span id="catMessage">{message}</span>
      </div>

      <div className="cat-stage" id="catStage">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <radialGradient id="catBody" cx="50%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#F5C97C" />
              <stop offset="100%" stopColor="#E88220" />
            </radialGradient>
            <radialGradient id="catBelly" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#FDE8BE" />
              <stop offset="100%" stopColor="#F7C97E" />
            </radialGradient>
          </defs>

          {/* Tail */}
          <g className="cat-tail">
            <path
              d="M82 85 Q105 75 100 55 Q96 42 86 50"
              fill="none"
              stroke="#E88220"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </g>

          {/* Body */}
          <ellipse cx="60" cy="78" rx="30" ry="28" fill="url(#catBody)" />

          {/* Belly patch */}
          <ellipse cx="60" cy="82" rx="17" ry="18" fill="url(#catBelly)" opacity="0.85" />

          {/* Head */}
          <ellipse cx="60" cy="45" rx="27" ry="25" fill="url(#catBody)" />

          {/* Ears */}
          <g className="cat-ears">
            <polygon points="34,24 42,8 50,24" fill="#E88220" />
            <polygon points="37,24 42,13 48,24" fill="#F5A0A0" />
            <polygon points="70,24 78,8 86,24" fill="#E88220" />
            <polygon points="73,24 78,13 83,24" fill="#F5A0A0" />
          </g>

          {/* Eyes (default idle) */}
          <g className="eyes eyes-idle">
            <ellipse cx="46" cy="44" rx="5.5" ry="7" fill="#221C18" />
            <circle cx="44" cy="41.5" r="2.2" fill="#FFFFFF" />
            <circle cx="48" cy="45.5" r="1" fill="#FFFFFF" />
            <ellipse cx="74" cy="44" rx="5.5" ry="7" fill="#221C18" />
            <circle cx="72" cy="41.5" r="2.2" fill="#FFFFFF" />
            <circle cx="76" cy="45.5" r="1" fill="#FFFFFF" />
          </g>

          {/* Eyes: Happy Cheering ^.^ */}
          <g className="eyes eyes-happy">
            <path d="M38 46 Q44 38 50 46" fill="none" stroke="#221C18" strokeWidth="3" strokeLinecap="round" />
            <path d="M70 46 Q76 38 82 46" fill="none" stroke="#221C18" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Eyes: Caring Support */}
          <g className="eyes eyes-comfort">
            <path d="M38 47 Q44 41 50 47" fill="none" stroke="#332820" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M70 47 Q76 41 82 47" fill="none" stroke="#332820" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Rosy Cheeks */}
          <ellipse cx="37" cy="54" rx="5" ry="3.5" fill="#FF839B" opacity="0.6" />
          <ellipse cx="83" cy="54" rx="5" ry="3.5" fill="#FF839B" opacity="0.6" />

          {/* Whiskers */}
          <line x1="20" y1="50" x2="42" y2="52" stroke="#B8832A" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="20" y1="55" x2="42" y2="55" stroke="#B8832A" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="78" y1="52" x2="100" y2="50" stroke="#B8832A" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="78" y1="55" x2="100" y2="55" stroke="#B8832A" strokeWidth="1.2" strokeLinecap="round" />

          {/* Nose */}
          <polygon points="58,57 62,57 60,60" fill="#E8607A" />

          {/* Mouth */}
          <path d="M56 61 Q60 65 64 61" fill="none" stroke="#C85070" strokeWidth="1.5" strokeLinecap="round" />

          {/* Paws */}
          <g className="cat-paws">
            <ellipse className="paw paw-l" cx="44" cy="99" rx="9" ry="7" fill="url(#catBelly)" stroke="#E88220" strokeWidth="1.2" />
            <ellipse className="paw paw-r" cx="76" cy="99" rx="9" ry="7" fill="url(#catBelly)" stroke="#E88220" strokeWidth="1.2" />
          </g>
        </svg>
      </div>
    </aside>
  );
}
