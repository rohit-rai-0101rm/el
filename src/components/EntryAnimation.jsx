import React, { useEffect, useRef } from 'react';

// Only plays once per session
const HAS_PLAYED_KEY = 'elyx_entry_played';

export default function EntryAnimation({ onComplete }) {
  const overlayRef = useRef(null);
  const hasPlayed = typeof sessionStorage !== 'undefined' && sessionStorage.getItem(HAS_PLAYED_KEY);

  useEffect(() => {
    if (hasPlayed) { onComplete?.(); return; }

    // Lock scroll during animation
    document.body.style.overflow = 'hidden';

    const t1 = setTimeout(() => {
      const el = overlayRef.current;
      if (el) el.classList.add('entry-exiting');
    }, 2600);

    const t2 = setTimeout(() => {
      document.body.style.overflow = '';
      sessionStorage.setItem(HAS_PLAYED_KEY, '1');
      onComplete?.();
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = '';
    };
  }, [hasPlayed, onComplete]);

  if (hasPlayed) return null;

  return (
    <div ref={overlayRef} className="entry-overlay">
      <div className="entry-inner">
        <div className="entry-letters" aria-label="ELYX">
          {'ELYX'.split('').map((char, i) => (
            <span
              key={i}
              className="entry-letter"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div className="entry-rule" />
        <p className="entry-sub">Est. 2024 — Luxury Redefined</p>
      </div>
    </div>
  );
}
