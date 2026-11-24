import React, { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Only enable if user has fine pointer (mouse / trackpad)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!visible) setVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);

    const handleMouseOver = (e) => {
      const isInteractive = Boolean(
        e.target.closest('button, a, input, textarea, select, .opt, .xcard, .cell, .flagbtn, .check, [role="button"]')
      );
      setHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setVisible(false);
      setHovering(false);
    };

    const handleMouseEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth trailing ring physics (lerp)
    const render = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.2;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div style={{ pointerEvents: 'none', position: 'fixed', inset: 0, zIndex: 99999, overflow: 'hidden' }}>
      {/* Precision Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: clicking ? '10px' : hovering ? '6px' : '8px',
          height: clicking ? '10px' : hovering ? '6px' : '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent, #B8860B)',
          boxShadow: '0 0 10px var(--accent-glow, rgba(184, 134, 11, 0.5)), 0 0 4px #fff',
          transform: 'translate3d(-100px, -100px, 0)',
          marginTop: clicking ? '-5px' : hovering ? '-3px' : '-4px',
          marginLeft: clicking ? '-5px' : hovering ? '-3px' : '-4px',
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease',
          pointerEvents: 'none',
          willChange: 'transform'
        }}
      />

      {/* Trailing Elastic Interactive Aura Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovering ? '48px' : clicking ? '28px' : '34px',
          height: hovering ? '48px' : clicking ? '28px' : '34px',
          borderRadius: '50%',
          border: hovering
            ? '2px solid var(--accent, #B8860B)'
            : '1.5px solid color-mix(in srgb, var(--accent, #B8860B) 70%, transparent)',
          backgroundColor: hovering ? 'color-mix(in srgb, var(--accent, #B8860B) 12%, transparent)' : 'transparent',
          boxShadow: hovering
            ? '0 0 16px var(--accent-glow, rgba(184, 134, 11, 0.4)), inset 0 0 8px var(--accent-glow, rgba(184, 134, 11, 0.2))'
            : 'none',
          transform: 'translate3d(-100px, -100px, 0)',
          marginTop: hovering ? '-24px' : clicking ? '-14px' : '-17px',
          marginLeft: hovering ? '-24px' : clicking ? '-14px' : '-17px',
          transition: 'width 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), height 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s ease, background-color 0.2s ease',
          pointerEvents: 'none',
          willChange: 'transform'
        }}
      />
    </div>
  );
}
