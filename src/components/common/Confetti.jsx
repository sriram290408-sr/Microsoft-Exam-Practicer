import { useEffect } from 'react';

export function Confetti({ trigger = true }) {
  useEffect(() => {
    if (!trigger) return;

    const canvas = document.getElementById('fxCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);
    const particles = [];
    const colors = ['#C2951C', '#1B7546', '#3D479B', '#942B60', '#14727E', '#F0F4F8', '#E2903C'];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: w * (i % 2 === 0 ? 0.12 : 0.88),
        y: h * 0.72,
        vx: (i % 2 === 0 ? 1 : -1) * (Math.random() * 11 + 5),
        vy: -(Math.random() * 17 + 9),
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 9 + 5,
        rotX: Math.random() * Math.PI,
        rotY: Math.random() * Math.PI,
        rotZ: Math.random() * Math.PI,
        vRotX: (Math.random() - 0.5) * 0.18,
        vRotY: (Math.random() - 0.5) * 0.22,
        wobble: Math.random() * Math.PI,
        gravity: 0.36,
        drag: 0.965,
        opacity: 1
      });
    }

    let reqId;
    const update = () => {
      ctx.clearRect(0, 0, w, h);
      let active = 0;
      particles.forEach((p) => {
        p.vy += p.gravity;
        p.vx *= p.drag;
        p.vy *= p.drag;
        p.x += p.vx;
        p.y += p.vy;
        p.rotX += p.vRotX;
        p.rotY += p.vRotY;
        p.wobble += 0.08;
        p.x += Math.sin(p.wobble) * 1.4;

        if (p.y > h * 0.6) p.opacity -= 0.015;
        if (p.opacity > 0 && p.y < h + 50) {
          active++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotZ);
          ctx.scale(Math.cos(p.rotX), Math.sin(p.rotY));
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
          ctx.restore();
        }
      });

      if (active > 0) {
        reqId = requestAnimationFrame(update);
      } else {
        ctx.clearRect(0, 0, w, h);
      }
    };

    reqId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(reqId);
      ctx.clearRect(0, 0, w, h);
    };
  }, [trigger]);

  return null;
}
