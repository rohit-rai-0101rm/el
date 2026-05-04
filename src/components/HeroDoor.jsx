import React, { useRef, useEffect, useCallback } from 'react';
import { useScroll } from 'framer-motion';

const FRAMES = [
  'https://framerusercontent.com/images/X6THCszcCEdeHgCU7Anih2mKvc.webp',
  'https://framerusercontent.com/images/Ms8mRiccqXiDpnx8NjNpZ9K8w.webp',
  'https://framerusercontent.com/images/TeWfR2IznB6QtCbkhP1bzEjXHk.webp',
  'https://framerusercontent.com/images/ILHR7EySa2gWrLnzOIQLcxbmLkQ.webp',
  'https://framerusercontent.com/images/WMQWY9o35uYZ4CuYH4Eto5lmIKc.webp',
  'https://framerusercontent.com/images/6fcGt9GY2H5QXZ8kA7Wl3HDagcc.webp',
  'https://framerusercontent.com/images/fXY45oRZMxXNRliI9BPo2o8jf7U.webp',
  'https://framerusercontent.com/images/N3oPpyycX51HHYlpFX5ygsSBA.webp',
  'https://framerusercontent.com/images/POiTWPT8buZRurZMSQtDXvWu3EU.webp',
  'https://framerusercontent.com/images/ST9e0UC4Su4BGrtxPpYHlmYJg.webp',
  'https://framerusercontent.com/images/ST9e0UC4Su4BGrtxPpYHlmYJg.webp',
  'https://framerusercontent.com/images/ak4C2OBw1tAOsVNiq3z67esGfps.webp',
  'https://framerusercontent.com/images/NjjOCgYYRFpUhIXbYRFkgubBCoI.webp',
  'https://framerusercontent.com/images/CKsDAH69QdD7OngJvrT4f3OtzU.webp',
  'https://framerusercontent.com/images/aDCkd8WdfYBYWUfbYRx4GkPD4.webp',
  'https://framerusercontent.com/images/YPsMglOsB6OD1ZfcF7qtx2VSE2Q.webp',
  'https://framerusercontent.com/images/Dd25ZxHIaecHPakrJh4qxMAmx4U.webp',
  'https://framerusercontent.com/images/sZxkLdqGVwAPD6eqn6YFamrK7RE.webp',
  'https://framerusercontent.com/images/yFd9uRVOWYxAMsTaViK0dIwTB4s.webp',
  'https://framerusercontent.com/images/LfEEBxjWyFF2FOGualqx9NaHO8.webp',
  'https://framerusercontent.com/images/WwtufmXCp6X1AuDVFtwNkynhRB4.webp',
  'https://framerusercontent.com/images/dzr8KvBXDKCFULaPsU8J3TVNrNY.webp',
  'https://framerusercontent.com/images/HCDmhBdSrBuE3YdaZUI3rokGXg.webp',
  'https://framerusercontent.com/images/eMfHrLpWm4rLI50ZObUOMIjVDE8.webp',
  'https://framerusercontent.com/images/Q12vBbHBoeeSsmVEaPU1NMx998.webp',
  'https://framerusercontent.com/images/neNcMCsqBWF1V0shwAxLmbJhY0.webp',
  'https://framerusercontent.com/images/A5wSNHXqU4BcataPbrg1RzALAM.webp',
  'https://framerusercontent.com/images/LpiSKhm1ZuDCUqMAWIp2G2Ejns.webp',
  'https://framerusercontent.com/images/Lc40j6MtjW8kSdaug1X9liBcQaM.webp',
  'https://framerusercontent.com/images/1HEHl0p7FXSkQDooVWBO5t5DVMQ.webp',
  'https://framerusercontent.com/images/23XJ7TOSRNvzAeSCXCwrybEGpf0.webp',
  'https://framerusercontent.com/images/hVZlr3i3GYFW5EWRh4dTxzfLD4I.webp',
  'https://framerusercontent.com/images/bmyH2IQgooCADktsZBvScZSo.webp',
  'https://framerusercontent.com/images/UhcdSm28lCOvBqaNkpbYBeJhog.webp',
  'https://framerusercontent.com/images/yfNmgnUl6ct7f7YhcwW7S2ULWfs.webp',
  'https://framerusercontent.com/images/bjR6amhO1vnOFOYkvDY0DUTvWds.webp',
  'https://framerusercontent.com/images/zd4qDe1zCX4uP0T7Ofso4NpQ8NE.webp',
  'https://framerusercontent.com/images/nsN6lu99FRhbtkv9LtNPIazNraA.webp',
  'https://framerusercontent.com/images/QSjcJQQDI1hAUPBIL73GXTQ.webp',
  'https://framerusercontent.com/images/RZs8eNP5OLrPRz95pHK5u0Mig.webp',
  'https://framerusercontent.com/images/7ZlgrwAppNgvqxFodW6YhjwJA.webp',
  'https://framerusercontent.com/images/TwoMz5pyYyYbpiSgxoStzwHNQY.webp',
  'https://framerusercontent.com/images/NdoGgPOIHLYFukksa2vxGzFlI4.webp',
  'https://framerusercontent.com/images/bfYaP83qetyBCP9Xg1UdwNiv80.webp',
  'https://framerusercontent.com/images/BSqtTSZ0bErdwfsZrJqRd2Qr23E.webp',
  'https://framerusercontent.com/images/eCQPCocXu0bPBOaS17tER54qXg.webp',
  'https://framerusercontent.com/images/F3LxyTogRpZTCB0cIIDhMMe0qZE.webp',
  'https://framerusercontent.com/images/HCX4VUZpc7AbNdlPOrWRHhEteU.webp',
  'https://framerusercontent.com/images/PQrNQGT2qBpCwhBBrrDlMo73zo0.webp',
  'https://framerusercontent.com/images/PsJpNrWYMD0BA0aADOJV1vLxd4.webp',
  'https://framerusercontent.com/images/NBmMIdjaYzYH7KB1Fddk7oMO6SI.webp',
  'https://framerusercontent.com/images/kAipICHMtxXaKRX4mLoEzVstxdU.webp',
  'https://framerusercontent.com/images/lH0vk7jeP9FYEtGecGtZ3terY.webp',
  'https://framerusercontent.com/images/pgILEmRtYF2YekGqjlSSKAKGi8.webp',
  'https://framerusercontent.com/images/TfmRHY3EVOftIbhOPaWTUQUUY.webp',
  'https://framerusercontent.com/images/qdXKKIYNm7mca5KCCMt9rzQBXI.webp',
  'https://framerusercontent.com/images/IrUYVyn54QNUFN80gCwSoEA1sQ.webp',
  'https://framerusercontent.com/images/tcAtKXagLUljGjOyxWcJFAlPmMk.webp',
  'https://framerusercontent.com/images/6CulT6IHJVvz3BF8DdlD0DafgoY.webp',
  'https://framerusercontent.com/images/I19Ovu8gZGWtKJKS2xCIKRa2PY4.webp',
  'https://framerusercontent.com/images/4qkijeazsFRZBbBed1D6KFXroL0.webp',
  'https://framerusercontent.com/images/Owg6X8SVsMPndO6iU6xPsXrn4.webp',
  'https://framerusercontent.com/images/xAgrDDBtlTPwMdbEwpxAHALpwM.webp',
  'https://framerusercontent.com/images/8nHC9OS5BoLHEFhh2qLjTPiwU.webp',
  'https://framerusercontent.com/images/ZWL7tKdNdKXOt70VBvEtt8eB8.webp',
  'https://framerusercontent.com/images/YZDBcHuWMc1TYeIVdAMY8cc.webp',
  'https://framerusercontent.com/images/ejhDn8E8jOihUsBO7RpCbxNZA.webp',
  'https://framerusercontent.com/images/GgiBYZJTrkVOWYR9WX6iZ4iwPsY.webp',
  'https://framerusercontent.com/images/1YinRFOzDbDrSENVapww8wZEec.webp',
  'https://framerusercontent.com/images/RXl1Uy1dXephgsh3Pmz1CfhRXE.webp',
  'https://framerusercontent.com/images/Z8sS2s3D8uWzSUYattEH7swLE.webp',
  'https://framerusercontent.com/images/IaODueqCvAAnZieyZd6E5dfUgyU.webp',
  'https://framerusercontent.com/images/XplLKya6y9jcOGEsNJYAKE1lwmo.webp',
  'https://framerusercontent.com/images/vOEhMyVhnhavSMcNMcBfg4wang.webp',
  'https://framerusercontent.com/images/MypomxgHvDOgB0kfyIVGv6rclYc.webp',
  'https://framerusercontent.com/images/iDSITJjhiqTYksvCqxQdPwmsoQ.webp',
  'https://framerusercontent.com/images/YEqtJRUEwrNecMStoncTUBSEQ.webp',
  'https://framerusercontent.com/images/fYzc2cYVVBvGXYaIuYKb4KkQ3A.webp',
  'https://framerusercontent.com/images/t0JiT5bh8GdRymWwcfqavD7DpY.webp',
  'https://framerusercontent.com/images/IHTjbzUNXUkiGI0yVCfkJxBiRqk.webp',
  'https://framerusercontent.com/images/sFvMn9q9887ADF6rbfo9CDxIDg8.webp',
  'https://framerusercontent.com/images/5QLGgl5IO3CZ34vJuRqaj8qoyU.webp',
  'https://framerusercontent.com/images/PtZnqMNcIvLnbYbeKCPbWWxf9s.webp',
  'https://framerusercontent.com/images/yzSr55hVnxPZjZs96cHxusAU70E.webp',
  'https://framerusercontent.com/images/ch9yed0MegpcqJ5o1pKQoxYslxA.webp',
  'https://framerusercontent.com/images/QVhmKDusBD3lztPr8lAuTjZxM8.webp',
  'https://framerusercontent.com/images/9u0rIXVhyhXdFkCDOgIUxgbJu8I.webp',
  'https://framerusercontent.com/images/qDAc6D1yNnJwONUhidQu9URE5Y.webp',
  'https://framerusercontent.com/images/9Nikc230UhX5XnOcYOUoWy7L8wg.webp',
  'https://framerusercontent.com/images/RKcD5E1vEhw5qjSX36aWM5Q2Kgg.webp',
  'https://framerusercontent.com/images/sxIKrirYY7280bVBX112mFR0No.webp',
  'https://framerusercontent.com/images/vPkTr9lXy8rgXA5S924kzlokBX4.webp',
  'https://framerusercontent.com/images/fnhH3zKdcCnJBHicyy5xzfmpvtw.webp',
  'https://framerusercontent.com/images/7dd5kaN9N85Mrx7UqZTAahuUuQ.webp',
  'https://framerusercontent.com/images/zXPDYhC354efxiIFZhBIrMVQ.webp',
  'https://framerusercontent.com/images/XrJTGYW9rAKZBbRmGjmNqsecV0.webp',
  'https://framerusercontent.com/images/pDQeoQFrbwxXy5VH8QrKt6xncA.webp',
  'https://framerusercontent.com/images/utVIHYJxqZ5zxKIn1NyPxzOnLs8.webp',
  'https://framerusercontent.com/images/kYtEN829vcypLXLcSVcCbbNzw.webp',
  'https://framerusercontent.com/images/vCdtFKpbEtYLhnzap7iSUAd5ACA.webp',
  'https://framerusercontent.com/images/lgiBt6XNiGC4Qv19ILZIUflWLs.webp',
  'https://framerusercontent.com/images/hiuV2lJe3NAScPly1zrsF8VcHAw.webp',
  'https://framerusercontent.com/images/gC9hg1C72WeIMkOtwRmKXJUrzM.webp',
  'https://framerusercontent.com/images/UjMev87JWeEDc4eWF0srgDI4E.webp',
  'https://framerusercontent.com/images/h2l5rWDlGuK38KovgeoZGq9g.webp',
  'https://framerusercontent.com/images/RGYq1mBfrHKMwLxoD5B2TzhWMpE.webp',
  'https://framerusercontent.com/images/ULQsNEUBUoxxIiVNrwGsm8W0QuI.webp',
  'https://framerusercontent.com/images/6KWOTyiWYsypvJsQm6GzccftXnY.webp',
  'https://framerusercontent.com/images/GfdL6Z9CWN1Ef3LVhO2CVIcQHU.webp',
  'https://framerusercontent.com/images/OTXDfRAhneLZLniEg1naEvVGo.webp',
  'https://framerusercontent.com/images/93WNcq3gGArh5CZypwwwb23w8CA.webp',
  'https://framerusercontent.com/images/zqDYs7xy9PkjO5rwaVNSmjqB9jc.webp',
  'https://framerusercontent.com/images/5yZwTyNi0A7IF8snr8mlAysZ6Y.webp',
  'https://framerusercontent.com/images/1v7ynLkwJY94FBDb4GwdzcZwzDk.webp',
  'https://framerusercontent.com/images/EPPz0MDnWUCfDR8WpiYfCKOeg4.webp',
  'https://framerusercontent.com/images/QhV6mIBcT0jz4xErSOO56hrQVk.webp',
  'https://framerusercontent.com/images/k2j77ffdAA1WT7GykWmFNH15xQ.webp',
  'https://framerusercontent.com/images/lXCwpF6MQxYQ9NBi58yADvzlwk.webp',
];

const PARTICLE_COUNT = 280;

const NARRATIVES = [
  { range: [0,   25],  label: '925 Sterling Silver',            sub: 'Pure luxury, refined to its essence' },
  { range: [26,  55],  label: 'Crafted in 72 Hours',            sub: 'Each piece undergoes artisan refinement' },
  { range: [56,  85],  label: 'Swiss Rubber. Zero Compromise.', sub: 'Engineered for every environment' },
  { range: [86, 999],  label: 'Your Signature Piece',           sub: 'Never mass-produced. Always rare.' },
];

function makeParticle(i) {
  const isOrbital = i < 180;
  const angle = Math.random() * Math.PI * 2;
  const baseRadius = isOrbital ? 90 + Math.random() * 230 : 0;
  return {
    angle,
    baseRadius,
    radius: baseRadius,
    orbitSpeed: (Math.random() - 0.5) * 0.005 + (isOrbital ? 0.0009 : 0),
    x: 0, y: 0,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: isOrbital ? Math.random() * 2.2 + 0.4 : Math.random() * 1.4 + 0.3,
    opacity: Math.random() * 0.75 + 0.15,
    depth: Math.random(),
    isOrbital,
    hueOff: (Math.random() - 0.5) * 18,
  };
}

export default function HeroDoor() {
  const containerRef    = useRef(null);
  const canvasRef       = useRef(null);
  const particleRef     = useRef(null);
  const bgLayerRef      = useRef(null);
  const textLayerRef    = useRef(null);
  const imagesRef       = useRef([]);
  const frameRef        = useRef(0);
  const mouseRef        = useRef({ x: 0, y: 0, nx: 0, ny: 0 });
  const smoothRef       = useRef({ nx: 0, ny: 0, x: 0, y: 0 });
  const particlesRef    = useRef([]);
  const rafRef          = useRef(null);
  const narrativeRef    = useRef(null);
  const narrLabelRef    = useRef(null);
  const narrSubRef      = useRef(null);
  const lastNarrIdx     = useRef(-1);
  const progressFillRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // ── Draw product frame ──
  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img?.complete || !img.naturalWidth) return;
    const ctx = canvas.getContext('2d');
    const cw = canvas.width, ch = canvas.height;
    const ir = img.naturalWidth / img.naturalHeight, cr = cw / ch;
    let sx, sy, sw, sh;
    if (ir > cr) { sh = img.naturalHeight; sw = sh * cr; sx = (img.naturalWidth - sw) / 2; sy = 0; }
    else         { sw = img.naturalWidth;  sh = sw / cr; sx = 0; sy = (img.naturalHeight - sh) / 2; }
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, []);

  // ── Single RAF loop: particles + parallax layers ──
  const loop = useCallback(() => {
    const pCanvas = particleRef.current;
    if (!pCanvas) { rafRef.current = requestAnimationFrame(loop); return; }

    const ctx = pCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const cw = pCanvas.width, ch = pCanvas.height;
    const cx = cw / 2, cy = ch / 2;

    // Lerp mouse
    const s = smoothRef.current, m = mouseRef.current;
    s.nx += (m.nx - s.nx) * 0.055;
    s.ny += (m.ny - s.ny) * 0.055;
    s.x  += (m.x  - s.x)  * 0.055;
    s.y  += (m.y  - s.y)  * 0.055;

    // Parallax: bg moves opposite mouse, text moves same direction
    if (bgLayerRef.current)
      bgLayerRef.current.style.transform = `translate(${s.nx * -20}px, ${s.ny * -14}px) scale(1.06)`;
    if (textLayerRef.current)
      textLayerRef.current.style.transform = `translate(${s.nx * 18}px, ${s.ny * 12}px)`;

    ctx.clearRect(0, 0, cw, ch);

    const mx = s.x * dpr;
    const my = s.y * dpr;

    // ── Update + draw particles ──
    particlesRef.current.forEach(p => {
      if (p.isOrbital) {
        p.angle += p.orbitSpeed;

        // Mouse gravity distorts orbit radius
        const dx = mx - cx, dy = my - cy;
        const md = Math.sqrt(dx * dx + dy * dy);
        const pull = Math.max(0, 1 - md / (cw * 0.5)) * 45;
        p.radius += (p.baseRadius + pull - p.radius) * 0.04;

        // Elliptical (simulated z-depth)
        p.x = cx + Math.cos(p.angle) * p.radius;
        p.y = cy + Math.sin(p.angle) * p.radius * 0.36;

        // Parallax shift based on depth
        p.x += s.nx * (p.depth * 16 - 8);
        p.y += s.ny * (p.depth * 10 - 5);
      } else {
        // Free particle with mouse repulsion
        const rdx = p.x - mx, rdy = p.y - my;
        const rd = Math.sqrt(rdx * rdx + rdy * rdy);
        if (rd < 130 * dpr && rd > 0) {
          const f = ((130 * dpr - rd) / (130 * dpr)) * 0.55;
          p.vx += (rdx / rd) * f;
          p.vy += (rdy / rd) * f;
        }
        p.vx *= 0.97; p.vy *= 0.97;
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10) p.x = cw + 10;
        if (p.x > cw + 10) p.x = -10;
        if (p.y < -10) p.y = ch + 10;
        if (p.y > ch + 10) p.y = -10;
      }

      const sz = p.size * dpr * (0.35 + p.depth * 0.85);
      const al = p.opacity * (0.15 + p.depth * 0.85);
      const h  = 43 + p.hueOff;
      const l  = 46 + p.depth * 24;

      ctx.beginPath();
      ctx.arc(p.x, p.y, sz, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${h},78%,${l}%,${al})`;
      ctx.fill();

      // Halo glow on near-depth particles
      if (p.depth > 0.62 && sz > 0.9) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, sz * 4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${h},78%,65%,${al * 0.11})`;
        ctx.fill();
      }
    });

    // ── Constellation lines between close orbital particles ──
    const nearOrb = particlesRef.current.filter(p => p.isOrbital && p.depth > 0.52);
    ctx.lineWidth = 0.5;
    for (let i = 0; i < nearOrb.length - 1; i++) {
      for (let j = i + 1; j < nearOrb.length; j++) {
        const dx = nearOrb[i].x - nearOrb[j].x;
        const dy = nearOrb[i].y - nearOrb[j].y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 58 * dpr) {
          ctx.beginPath();
          ctx.moveTo(nearOrb[i].x, nearOrb[i].y);
          ctx.lineTo(nearOrb[j].x, nearOrb[j].y);
          ctx.strokeStyle = `rgba(212,175,55,${(1 - d / (58 * dpr)) * 0.13})`;
          ctx.stroke();
        }
      }
    }

    // ── Gold cursor aura ──
    if (mx > 0 && my > 0) {
      const r  = 75 * dpr;
      const gr = ctx.createRadialGradient(mx, my, 0, mx, my, r);
      gr.addColorStop(0, 'rgba(212,175,55,0.08)');
      gr.addColorStop(1, 'rgba(212,175,55,0)');
      ctx.beginPath();
      ctx.arc(mx, my, r, 0, Math.PI * 2);
      ctx.fillStyle = gr;
      ctx.fill();
    }

    rafRef.current = requestAnimationFrame(loop);
  }, []);

  // ── Preload frames ──
  useEffect(() => {
    imagesRef.current = FRAMES.map((src, i) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => { if (i === 0) renderFrame(0); };
      img.src = src;
      return img;
    });
  }, [renderFrame]);

  // ── Resize canvases ──
  useEffect(() => {
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      [canvasRef, particleRef].forEach(ref => {
        const c = ref.current;
        if (!c) return;
        c.width  = c.offsetWidth  * dpr;
        c.height = c.offsetHeight * dpr;
      });
      renderFrame(frameRef.current);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [renderFrame]);

  // ── Init particles + start loop ──
  useEffect(() => {
    const w = window.innerWidth, h = window.innerHeight;
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const p = makeParticle(i);
      if (!p.isOrbital) { p.x = Math.random() * w; p.y = Math.random() * h; }
      return p;
    });
    mouseRef.current = { x: w / 2, y: h / 2, nx: 0, ny: 0 };
    smoothRef.current = { x: w / 2, y: h / 2, nx: 0, ny: 0 };
    rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [loop]);

  // ── Mouse tracking ──
  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = {
        x:  e.clientX,
        y:  e.clientY,
        nx: (e.clientX / window.innerWidth  - 0.5) * 2,
        ny: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  // ── Scroll → frame + progress + narrative ──
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const idx     = Math.round(v * (FRAMES.length - 1));
      const clamped = Math.max(0, Math.min(FRAMES.length - 1, idx));

      if (clamped !== frameRef.current) {
        frameRef.current = clamped;
        renderFrame(clamped);
      }

      // Progress bar
      if (progressFillRef.current) {
        progressFillRef.current.style.height = `${v * 100}%`;
      }

      // Narrative copy
      const ni = NARRATIVES.findIndex(n => clamped >= n.range[0] && clamped <= n.range[1]);
      if (ni !== lastNarrIdx.current) {
        lastNarrIdx.current = ni;
        const el = narrativeRef.current;
        if (!el) return;
        el.classList.remove('narr-visible');
        setTimeout(() => {
          if (narrLabelRef.current) narrLabelRef.current.textContent = ni >= 0 ? NARRATIVES[ni].label : '';
          if (narrSubRef.current)   narrSubRef.current.textContent   = ni >= 0 ? NARRATIVES[ni].sub   : '';
          if (ni >= 0) el.classList.add('narr-visible');
        }, 180);
      }
    });
  }, [renderFrame, scrollYProgress]);

  return (
    <section id="hero-door-wrapper" ref={containerRef}>
      <div className="hero-sticky">

        {/* Layer 0: deep BG — moves opposite mouse (parallax back) */}
        <div ref={bgLayerRef} className="hero-depth-bg" />

        {/* Layer 1: product frame canvas */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Layer 2: dark vignette */}
        <div className="hero-vignette" />

        {/* Layer 3: gold particle constellation */}
        <canvas ref={particleRef} className="hero-particle-canvas" />

        {/* Layer 4: floating text — moves same as mouse (parallax front) */}
        <div ref={textLayerRef} className="hero-float-text">
          <span className="hero-float-eyebrow">The World of Elyx</span>
          <h1 className="hero-float-headline">Luxury<br />Defined</h1>
          <p className="hero-float-sub">Scroll to Explore</p>
        </div>

        {/* Layer 5: scroll-triggered narrative copy */}
        <div ref={narrativeRef} className="hero-narrative">
          <span ref={narrLabelRef} className="narr-label">925 Sterling Silver</span>
          <span ref={narrSubRef}   className="narr-sub">Pure luxury, refined to its essence</span>
        </div>

        {/* Layer 6: vertical scroll progress line */}
        <div className="hero-progress-track">
          <div ref={progressFillRef} className="hero-progress-fill" />
        </div>

      </div>
    </section>
  );
}
