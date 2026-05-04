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

export default function HeroDoor() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const frameRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const renderFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img?.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext('2d');
    const cw = canvas.width;
    const ch = canvas.height;

    // object-fit: cover crop
    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    let sx, sy, sw, sh;
    if (ir > cr) {
      sh = img.naturalHeight;
      sw = sh * cr;
      sx = (img.naturalWidth - sw) / 2;
      sy = 0;
    } else {
      sw = img.naturalWidth;
      sh = sw / cr;
      sx = 0;
      sy = (img.naturalHeight - sh) / 2;
    }
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  }, []);

  // preload all frames
  useEffect(() => {
    const images = FRAMES.map((src, i) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => { if (i === 0) renderFrame(0); };
      img.src = src;
      return img;
    });
    imagesRef.current = images;
  }, [renderFrame]);

  // set canvas resolution and re-render on resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      renderFrame(frameRef.current);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [renderFrame]);

  // scroll → frame index
  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      const idx = Math.round(v * (FRAMES.length - 1));
      const clamped = Math.max(0, Math.min(FRAMES.length - 1, idx));
      if (clamped !== frameRef.current) {
        frameRef.current = clamped;
        renderFrame(clamped);
      }
    });
  }, [renderFrame, scrollYProgress]);

  return (
    <section id="hero-door-wrapper" ref={containerRef}>
      <div className="hero-sticky">
        <canvas ref={canvasRef} className="hero-canvas" />
      </div>
    </section>
  );
}
