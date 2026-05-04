import React, { useEffect, useRef } from 'react';

export default function GoldCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const posRef  = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef  = useRef(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterInteractive = () => { hoveredRef.current = true; };
    const onLeaveInteractive = () => { hoveredRef.current = false; };

    const interactives = document.querySelectorAll('a, button, [role="button"], input, label');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });

    const animate = () => {
      const dot  = dotRef.current;
      const ring = ringRef.current;
      if (dot && ring) {
        const { x, y } = posRef.current;
        // Dot snaps immediately
        dot.style.transform = `translate(${x}px, ${y}px)`;

        // Ring lags behind (lerp)
        ringPos.current.x += (x - ringPos.current.x) * 0.13;
        ringPos.current.y += (y - ringPos.current.y) * 0.13;
        ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;

        // Scale ring on hover
        const scale = hoveredRef.current ? 1.7 : 1;
        const currentScale = parseFloat(ring.dataset.scale || '1');
        const newScale = currentScale + (scale - currentScale) * 0.15;
        ring.dataset.scale = newScale;
        ring.style.transform += ` scale(${newScale})`;
        ring.style.borderColor = hoveredRef.current
          ? 'rgba(212,175,55,0.9)'
          : 'rgba(212,175,55,0.6)';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
