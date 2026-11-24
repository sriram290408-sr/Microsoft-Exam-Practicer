import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Background3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- 1. Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040711);
    scene.fog = new THREE.FogExp2(0x040711, 0.001);

    let width = window.innerWidth;
    let height = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(55, width / height, 1, 1600);
    camera.position.set(0, 0, 480);

    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    renderer.domElement.id = 'bg3d';
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.inset = '0';
    renderer.domElement.style.width = '100vw';
    renderer.domElement.style.height = '100vh';
    renderer.domElement.style.zIndex = '-1';
    renderer.domElement.style.pointerEvents = 'none';

    container.appendChild(renderer.domElement);

    // --- 2. Top-Right Volumetric Golden Light Beam ---
    const createBeamTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      // Radial glow expanding from top-right corner
      const grad = ctx.createRadialGradient(480, 32, 0, 480, 32, 480);
      grad.addColorStop(0, 'rgba(255, 185, 70, 0.55)');
      grad.addColorStop(0.2, 'rgba(235, 140, 30, 0.32)');
      grad.addColorStop(0.5, 'rgba(180, 80, 15, 0.12)');
      grad.addColorStop(0.8, 'rgba(30, 20, 40, 0.03)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);
      return new THREE.CanvasTexture(canvas);
    };

    const beamTexture = createBeamTexture();
    const beamGeo = new THREE.PlaneGeometry(850, 850);
    const beamMat = new THREE.MeshBasicMaterial({
      map: beamTexture,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const beamMesh = new THREE.Mesh(beamGeo, beamMat);
    beamMesh.position.set(width * 0.32, height * 0.28, -80);
    scene.add(beamMesh);

    // --- 3. Circular Bokeh & Star Glow Textures ---
    // A: Soft blurry bokeh orb texture
    const createBokehTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 62);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.3, 'rgba(255, 255, 255, 0.7)');
      grad.addColorStop(0.65, 'rgba(255, 255, 255, 0.25)');
      grad.addColorStop(0.9, 'rgba(255, 255, 255, 0.05)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 128, 128);
      return new THREE.CanvasTexture(canvas);
    };

    // B: Crisp sparkling stardust texture
    const createSparkleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.9)');
      grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.35)');
      grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const bokehTexture = createBokehTexture();
    const sparkleTexture = createSparkleTexture();

    // Color Palette matching the user's reference image
    const palette = [
      new THREE.Color(0xFBBF24), // Warm gold
      new THREE.Color(0xF59E0B), // Deep amber
      new THREE.Color(0xFB923C), // Warm orange
      new THREE.Color(0xFDE68A), // Light champagne
      new THREE.Color(0x38BDF8), // Sky blue
      new THREE.Color(0x60A5FA), // Soft cyan-blue
      new THREE.Color(0x93C5FD), // Light icy blue
      new THREE.Color(0xFFFFFF)  // Specular white
    ];

    // --- 4. Layer 1: Large Floating Bokeh Orbs (Soft, out-of-focus background & foreground) ---
    const BOKEH_COUNT = 75;
    const bokehPositions = new Float32Array(BOKEH_COUNT * 3);
    const bokehColors = new Float32Array(BOKEH_COUNT * 3);
    const bokehData = [];

    for (let i = 0; i < BOKEH_COUNT; i++) {
      const x = (Math.random() - 0.5) * (width * 1.5 + 400);
      const y = (Math.random() - 0.5) * (height * 1.5 + 400);
      const z = (Math.random() - 0.5) * 600 - 50;

      bokehPositions[i * 3] = x;
      bokehPositions[i * 3 + 1] = y;
      bokehPositions[i * 3 + 2] = z;

      // Top-right bias for warmer golden particles
      const isTopRight = x > 0 && y > -100;
      const col = isTopRight
        ? (Math.random() < 0.75 ? palette[Math.floor(Math.random() * 4)] : palette[4 + Math.floor(Math.random() * 4)])
        : (Math.random() < 0.5 ? palette[4 + Math.floor(Math.random() * 4)] : palette[Math.floor(Math.random() * 4)]);

      bokehColors[i * 3] = col.r;
      bokehColors[i * 3 + 1] = col.g;
      bokehColors[i * 3 + 2] = col.b;

      bokehData.push({
        vx: (Math.random() - 0.5) * 0.18,
        vy: Math.random() * 0.22 + 0.08, // Slow upward drift
        vz: (Math.random() - 0.5) * 0.12,
        seed: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }

    const bokehGeo = new THREE.BufferGeometry();
    bokehGeo.setAttribute('position', new THREE.BufferAttribute(bokehPositions, 3));
    bokehGeo.setAttribute('color', new THREE.BufferAttribute(bokehColors, 3));

    const bokehMat = new THREE.PointsMaterial({
      size: 42,
      map: bokehTexture,
      transparent: true,
      opacity: 0.65,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const bokehPoints = new THREE.Points(bokehGeo, bokehMat);
    scene.add(bokehPoints);

    // --- 5. Layer 2: Midground Stardust & Glowing Embers ---
    const STAR_COUNT = 380;
    const starPositions = new Float32Array(STAR_COUNT * 3);
    const starColors = new Float32Array(STAR_COUNT * 3);
    const starData = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      const x = (Math.random() - 0.5) * (width * 1.6 + 500);
      const y = (Math.random() - 0.5) * (height * 1.6 + 500);
      const z = (Math.random() - 0.5) * 800;

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

      const isTopRight = x > 0 && y > -100;
      const col = isTopRight
        ? (Math.random() < 0.7 ? palette[Math.floor(Math.random() * 4)] : palette[4 + Math.floor(Math.random() * 4)])
        : (Math.random() < 0.55 ? palette[4 + Math.floor(Math.random() * 4)] : palette[Math.floor(Math.random() * 4)]);

      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;

      starData.push({
        vx: (Math.random() - 0.5) * 0.25,
        vy: Math.random() * 0.35 + 0.12,
        vz: (Math.random() - 0.5) * 0.15,
        seed: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.035 + 0.015
      });
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 14,
      map: sparkleTexture,
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // --- 6. Layer 3: Fine Twinkling Cosmic Dust ---
    const DUST_COUNT = 700;
    const dustPositions = new Float32Array(DUST_COUNT * 3);
    const dustColors = new Float32Array(DUST_COUNT * 3);
    const dustData = [];

    for (let i = 0; i < DUST_COUNT; i++) {
      const x = (Math.random() - 0.5) * (width * 1.8 + 600);
      const y = (Math.random() - 0.5) * (height * 1.8 + 600);
      const z = (Math.random() - 0.5) * 1100 - 100;

      dustPositions[i * 3] = x;
      dustPositions[i * 3 + 1] = y;
      dustPositions[i * 3 + 2] = z;

      const col = palette[Math.floor(Math.random() * palette.length)];
      dustColors[i * 3] = col.r;
      dustColors[i * 3 + 1] = col.g;
      dustColors[i * 3 + 2] = col.b;

      dustData.push({
        vx: (Math.random() - 0.5) * 0.15,
        vy: Math.random() * 0.2 + 0.05,
        vz: (Math.random() - 0.5) * 0.1,
        seed: Math.random() * Math.PI * 2
      });
    }

    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

    const dustMat = new THREE.PointsMaterial({
      size: 5,
      map: sparkleTexture,
      transparent: true,
      opacity: 0.7,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const dustPoints = new THREE.Points(dustGeo, dustMat);
    scene.add(dustPoints);

    // --- 7. Mouse Parallax & Dynamic Light Movement ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = window.scrollY;

    const handlePointerMove = (e) => {
      mouse.targetX = (e.clientX - width / 2) / (width / 2);
      mouse.targetY = -(e.clientY - height / 2) / (height / 2);
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      const scrollBar = document.getElementById('scrollBar');
      if (scrollBar) {
        scrollBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      beamMesh.position.set(width * 0.32, height * 0.28, -80);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // --- 8. Animation Loop ---
    let animId;
    let isPaused = false;
    let clock = new THREE.Clock();

    const handleVisibility = () => {
      isPaused = document.hidden;
      if (!isPaused) clock.getDelta();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (isPaused) return;

      const elapsedTime = clock.getElapsedTime();

      // Camera mouse parallax with organic smooth damping
      if (!prefersReducedMotion) {
        mouse.x += (mouse.targetX - mouse.x) * 0.035;
        mouse.y += (mouse.targetY - mouse.y) * 0.035;

        camera.position.x = mouse.x * 55;
        camera.position.y = mouse.y * 40 - (scrollY * 0.06);
        camera.lookAt(0, -scrollY * 0.04, 0);

        // Gentle volumetric light breath
        beamMat.opacity = 0.8 + Math.sin(elapsedTime * 1.2) * 0.08;
      }

      // Update Layer 1: Bokeh Orbs
      const bPos = bokehGeo.attributes.position.array;
      const boundY = height * 0.8 + 250;
      const boundX = width * 0.8 + 250;

      for (let i = 0; i < BOKEH_COUNT; i++) {
        const idx = i * 3;
        const d = bokehData[i];

        if (!prefersReducedMotion) {
          bPos[idx] += d.vx + Math.sin(elapsedTime * 0.7 + d.seed) * 0.25;
          bPos[idx + 1] += d.vy;
          bPos[idx + 2] += d.vz;

          // Wrap around top/bottom edges
          if (bPos[idx + 1] > boundY) bPos[idx + 1] = -boundY;
          if (Math.abs(bPos[idx]) > boundX) bPos[idx] *= -0.95;
        }
      }
      bokehGeo.attributes.position.needsUpdate = true;

      // Update Layer 2: Glowing Embers
      const sPos = starGeo.attributes.position.array;
      for (let i = 0; i < STAR_COUNT; i++) {
        const idx = i * 3;
        const d = starData[i];

        if (!prefersReducedMotion) {
          sPos[idx] += d.vx + Math.cos(elapsedTime * 0.9 + d.seed) * 0.2;
          sPos[idx + 1] += d.vy;
          sPos[idx + 2] += d.vz;

          if (sPos[idx + 1] > boundY) sPos[idx + 1] = -boundY;
          if (Math.abs(sPos[idx]) > boundX) sPos[idx] *= -0.95;
        }
      }
      starGeo.attributes.position.needsUpdate = true;

      // Update Layer 3: Fine Dust
      const dPos = dustGeo.attributes.position.array;
      for (let i = 0; i < DUST_COUNT; i++) {
        const idx = i * 3;
        const d = dustData[i];

        if (!prefersReducedMotion) {
          dPos[idx] += d.vx;
          dPos[idx + 1] += d.vy;
          dPos[idx + 2] += d.vz;

          if (dPos[idx + 1] > boundY + 100) dPos[idx + 1] = -(boundY + 100);
          if (Math.abs(dPos[idx]) > boundX + 100) dPos[idx] *= -0.95;
        }
      }
      dustGeo.attributes.position.needsUpdate = true;

      // Twinkle particle sizes slightly
      starMat.size = 13 + Math.sin(elapsedTime * 2.5) * 2;
      bokehMat.size = 40 + Math.sin(elapsedTime * 1.4) * 4;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);

      renderer.dispose();
      beamTexture.dispose();
      beamGeo.dispose();
      beamMat.dispose();
      bokehTexture.dispose();
      bokehGeo.dispose();
      bokehMat.dispose();
      sparkleTexture.dispose();
      starGeo.dispose();
      starMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ pointerEvents: 'none' }} />;
}
