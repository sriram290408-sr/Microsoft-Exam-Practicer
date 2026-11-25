import React, { useState, useEffect, useRef } from 'react';

const DANCE_MOVES = [
  { id: 'disco', name: '🪩 Disco Groove', label: 'Busting moves to the rhythm!' },
  { id: 'wiggle', name: '🐾 Wiggle & Tap', label: 'Tapping paws and swaying tail!' },
  { id: 'spin', name: '🌪️ Cat Pirouette', label: 'Spinning in 360 joy!' },
  { id: 'moonwalk', name: '✨ Moonwalk Shuffle', label: 'Smooth gliding like a star!' },
  { id: 'hyped', name: '🎉 Victory Jump', label: 'Bouncing with pure excitement!' }
];

const CAT_SNACKS = ['🐟 Salmon Treat', '🥛 Cat Milk', '🍣 Tuna Roll', '🍗 Chicken Nibble'];

export function ExamBreakScreen({
  onEndBreak,
  totalBreakSeconds = 600, // 10 minutes default
  examCode = 'PL-300'
}) {
  const [secondsLeft, setSecondsLeft] = useState(totalBreakSeconds);
  const [currentMove, setCurrentMove] = useState('disco');
  const [bubbleText, setBubbleText] = useState('Halfway done! Time to stretch and dance! 🐾🎵');
  const [laserPos, setLaserPos] = useState(null);
  const [toys, setToys] = useState([]);
  const [treatCount, setTreatCount] = useState(0);
  const [petCount, setPetCount] = useState(0);
  const [discoLights, setDiscoLights] = useState(true);

  const laserRef = useRef(null);

  // 10-minute break countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onEndBreak(); // Auto-advance when break expires
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onEndBreak]);

  // Periodic dance move / comment cycle
  useEffect(() => {
    const danceCycle = setInterval(() => {
      const nextMove = DANCE_MOVES[Math.floor(Math.random() * DANCE_MOVES.length)];
      setCurrentMove(nextMove.id);
    }, 6000);

    return () => clearInterval(danceCycle);
  }, []);

  const formatTimer = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Play: Laser pointer chase
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setLaserPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Play: Throw toy yarn / ball
  const handleThrowToy = (type) => {
    const newToy = {
      id: Date.now() + Math.random(),
      type,
      x: Math.random() * 60 + 20, // percentage
      y: Math.random() * 40 + 30
    };
    setToys((prev) => [...prev.slice(-4), newToy]);
    setBubbleText(
      type === 'yarn'
        ? 'A yarn ball! *Pounces and rolls!* 🧶🐾'
        : 'Squeak toy! *Swats furiously!* 🐭✨'
    );
  };

  // Play: Feed treat
  const handleGiveTreat = () => {
    const snack = CAT_SNACKS[Math.floor(Math.random() * CAT_SNACKS.length)];
    setTreatCount((c) => c + 1);
    setBubbleText(`Munch munch... ${snack}! Purr-fection! 😋🐟`);
    setCurrentMove('hyped');
    setTimeout(() => setCurrentMove('disco'), 2500);
  };

  // Play: Pet cat
  const handlePetCat = () => {
    setPetCount((p) => p + 1);
    const petQuotes = [
      'Purrrrrr... Head scratches are the best! 😸💖',
      'High-five paw! You are crushing this test! 🐾⭐',
      'I am warming up my paws for Section 2! 🚀',
      'Purr... feeling recharged and ready to conquer! 🌟'
    ];
    setBubbleText(petQuotes[Math.floor(Math.random() * petQuotes.length)]);
    setCurrentMove('wiggle');
  };

  const progressPct = ((totalBreakSeconds - secondsLeft) / totalBreakSeconds) * 100;

  return (
    <div
      className={`break-screen ${discoLights ? 'break-disco-active' : ''}`}
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        maxWidth: '920px',
        margin: '24px auto',
        padding: '36px 32px',
        background: 'rgba(12, 20, 36, 0.72)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        border: '1.5px solid rgba(255, 255, 255, 0.16)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 32px rgba(184, 134, 11, 0.15)',
        color: '#F0F4F8',
        overflow: 'hidden'
      }}
    >
      {/* Laser dot if active */}
      {laserPos && (
        <div
          ref={laserRef}
          style={{
            position: 'absolute',
            left: `${laserPos.x}px`,
            top: `${laserPos.y}px`,
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            background: '#FF0055',
            boxShadow: '0 0 12px #FF0055, 0 0 24px #FF3366',
            pointerEvents: 'none',
            zIndex: 30,
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.05s ease-out'
          }}
        />
      )}

      {/* Floating Toys */}
      {toys.map((toy) => (
        <div
          key={toy.id}
          style={{
            position: 'absolute',
            left: `${toy.x}%`,
            top: `${toy.y}%`,
            fontSize: '2rem',
            animation: 'toyBounce 1.2s infinite alternate ease-in-out',
            zIndex: 15,
            pointerEvents: 'none'
          }}
        >
          {toy.type === 'yarn' ? '🧶' : '🐭'}
        </div>
      ))}

      {/* Header Info */}
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(184, 134, 11, 0.2)',
            border: '1px solid var(--accent, #B8860B)',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '0.88rem',
            fontWeight: 700,
            color: '#F5C97C',
            marginBottom: '12px'
          }}
        >
          🎉 SECTION 1 COMPLETED (100 / 200 Questions)
        </div>
        <h1 style={{ margin: '0 0 8px', fontSize: '2.2rem', fontFamily: 'var(--serif)' }}>
          10-Minute Brain Break & Dance Party!
        </h1>
        <p style={{ margin: '0', color: '#A9B7C6', fontSize: '1rem' }}>
          Relax your eyes, hydrate, and play with your study buddy before tackling Section 2 of {examCode}.
        </p>
      </div>

      {/* Central Interactive Dance Stage */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '24px',
          background: 'radial-gradient(circle, rgba(184, 134, 11, 0.12) 0%, rgba(10, 16, 28, 0.4) 70%)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          marginBottom: '28px'
        }}
      >
        {/* Cat Speech Bubble */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            color: '#1E2630',
            padding: '10px 20px',
            borderRadius: '18px',
            fontWeight: 700,
            fontSize: '1rem',
            boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
            marginBottom: '16px',
            position: 'relative',
            maxWidth: '380px',
            textAlign: 'center',
            animation: 'bubbleFloat 2.5s infinite ease-in-out'
          }}
        >
          {bubbleText}
          <div
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '8px solid rgba(255, 255, 255, 0.95)'
            }}
          />
        </div>

        {/* Dancing Cat Graphic */}
        <div
          onClick={handlePetCat}
          title="Click to pet me and switch dance moves!"
          style={{
            cursor: 'pointer',
            transform: 'scale(1.2)',
            margin: '20px 0',
            position: 'relative'
          }}
          className={`dancing-cat-stage dance-${currentMove}`}
        >
          <svg viewBox="0 0 140 140" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="danceCatBody" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#FDE08B" />
                <stop offset="100%" stopColor="#E88220" />
              </radialGradient>
              <radialGradient id="danceCatBelly" cx="50%" cy="50%" r="55%">
                <stop offset="0%" stopColor="#FFF3D6" />
                <stop offset="100%" stopColor="#FAD38D" />
              </radialGradient>
            </defs>

            {/* Sparkles / Music Notes */}
            <g className="dance-notes">
              <text x="12" y="32" fill="#FBBF24" fontSize="18" fontWeight="bold">♪</text>
              <text x="110" y="28" fill="#F472B6" fontSize="20" fontWeight="bold">♫</text>
              <text x="120" y="80" fill="#38BDF8" fontSize="16" fontWeight="bold">♬</text>
              <text x="6" y="90" fill="#A78BFA" fontSize="16" fontWeight="bold">✨</text>
            </g>

            {/* Tail (Waving) */}
            <g className="cat-dance-tail">
              <path
                d="M95 95 Q125 80 115 50 Q105 35 95 48"
                fill="none"
                stroke="#E88220"
                strokeWidth="9"
                strokeLinecap="round"
              />
            </g>

            {/* Body */}
            <ellipse cx="70" cy="90" rx="34" ry="32" fill="url(#danceCatBody)" />

            {/* Belly patch */}
            <ellipse cx="70" cy="94" rx="20" ry="21" fill="url(#danceCatBelly)" opacity="0.9" />

            {/* Head */}
            <ellipse cx="70" cy="52" rx="31" ry="29" fill="url(#danceCatBody)" />

            {/* Party Hat */}
            <polygon points="56,28 70,2 84,28" fill="#EC4899" />
            <circle cx="70" cy="2" r="4" fill="#FBBF24" />
            <polygon points="62,28 70,6 78,28" fill="#F43F5E" />

            {/* Ears */}
            <polygon points="40,30 49,12 59,30" fill="#E88220" />
            <polygon points="44,30 49,18 55,30" fill="#F5A0A0" />
            <polygon points="81,30 91,12 100,30" fill="#E88220" />
            <polygon points="85,30 91,18 96,30" fill="#F5A0A0" />

            {/* Eyes: Cheerful dancing curve */}
            <path d="M46 53 Q53 44 60 53" fill="none" stroke="#221C18" strokeWidth="3.2" strokeLinecap="round" />
            <path d="M80 53 Q87 44 94 53" fill="none" stroke="#221C18" strokeWidth="3.2" strokeLinecap="round" />

            {/* Rosy Cheeks */}
            <ellipse cx="44" cy="62" rx="6" ry="4" fill="#FF839B" opacity="0.75" />
            <ellipse cx="96" cy="62" rx="6" ry="4" fill="#FF839B" opacity="0.75" />

            {/* Whiskers */}
            <line x1="24" y1="58" x2="48" y2="60" stroke="#B8832A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="24" y1="64" x2="48" y2="64" stroke="#B8832A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="92" y1="60" x2="116" y2="58" stroke="#B8832A" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="92" y1="64" x2="116" y2="64" stroke="#B8832A" strokeWidth="1.4" strokeLinecap="round" />

            {/* Nose & Mouth */}
            <polygon points="68,64 72,64 70,67" fill="#E8607A" />
            <path d="M65 68 Q70 73 75 68" fill="none" stroke="#C85070" strokeWidth="1.8" strokeLinecap="round" />

            {/* Dancing Paws */}
            <g className="cat-dance-paws">
              <ellipse className="paw-left" cx="50" cy="114" rx="10" ry="8" fill="url(#danceCatBelly)" stroke="#E88220" strokeWidth="1.4" />
              <ellipse className="paw-right" cx="90" cy="114" rx="10" ry="8" fill="url(#danceCatBelly)" stroke="#E88220" strokeWidth="1.4" />
            </g>
          </svg>
        </div>

        {/* Disco dance floor mat */}
        <div
          style={{
            width: '220px',
            height: '18px',
            background: 'radial-gradient(ellipse at center, rgba(245, 201, 124, 0.4) 0%, transparent 75%)',
            borderRadius: '50%',
            filter: 'blur(2px)'
          }}
        />

        {/* Interactive Toys & Controls */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '18px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            type="button"
            className="btn ghost small"
            onClick={handlePetCat}
            title="Pet the cat for purrs"
          >
            😻 Pet Buddy ({petCount})
          </button>
          <button
            type="button"
            className="btn ghost small"
            onClick={() => handleThrowToy('yarn')}
            title="Throw a yarn ball"
          >
            🧶 Throw Yarn
          </button>
          <button
            type="button"
            className="btn ghost small"
            onClick={() => handleThrowToy('mouse')}
            title="Toss toy mouse"
          >
            🐭 Squeak Toy
          </button>
          <button
            type="button"
            className="btn ghost small"
            onClick={handleGiveTreat}
            title="Feed tasty treat"
          >
            🐟 Give Treat ({treatCount})
          </button>
          <button
            type="button"
            className="btn ghost small"
            onClick={() => setDiscoLights((d) => !d)}
            title="Toggle disco lights"
          >
            {discoLights ? '💡 Dim Lights' : '🪩 Disco Lights'}
          </button>
        </div>

        {/* Move Selector Badges */}
        <div style={{ display: 'flex', gap: '8px', marginTop: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {DANCE_MOVES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => {
                setCurrentMove(m.id);
                setBubbleText(m.label);
              }}
              style={{
                background: currentMove === m.id ? 'var(--accent, #B8860B)' : 'rgba(255, 255, 255, 0.08)',
                color: currentMove === m.id ? '#fff' : '#A9B7C6',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '0.8rem',
                cursor: 'pointer',
                fontWeight: currentMove === m.id ? 700 : 500,
                transition: 'all 0.15s ease'
              }}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>

      {/* Break Timer HUD & Instant Resume Option */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          background: 'rgba(10, 16, 28, 0.55)',
          padding: '18px 24px',
          borderRadius: '14px',
          border: '1.5px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        <div>
          <div style={{ fontSize: '0.85rem', color: '#A9B7C6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Break Time Remaining
          </div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '2.4rem',
              fontWeight: 800,
              color: secondsLeft <= 60 ? '#EF4444' : '#FBBF24',
              lineHeight: 1.1
            }}
          >
            {formatTimer(secondsLeft)}
          </div>
          <div style={{ width: '220px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', marginTop: '6px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPct}%`,
                height: '100%',
                background: 'var(--accent, #B8860B)',
                transition: 'width 1s linear'
              }}
            />
          </div>
        </div>

        {/* Cancel / End Break Early Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
          <button
            type="button"
            className="btn accent big"
            onClick={onEndBreak}
            style={{
              fontSize: '1.1rem',
              padding: '14px 28px',
              boxShadow: '0 4px 14px rgba(184, 134, 11, 0.35)'
            }}
          >
            ⚡ Cancel Break & Start Section 2 (Qs 101–200)
          </button>
          <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
            You can return early whenever you feel refreshed.
          </span>
        </div>
      </div>
    </div>
  );
}
