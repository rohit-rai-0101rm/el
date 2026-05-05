import React, { useEffect, useRef } from 'react';

const STATS = [
  { number: '870+', label: 'Unique Pieces' },
  { number: '925', label: 'Sterling Silver' },
  { number: '72h', label: 'Crafting Time' },
  { number: '3+', label: 'Years of Legacy' },
];

const PILLARS = [
  {
    title: 'Swiss Precision',
    body: 'Every Elyx piece uses premium Swiss rubber — engineered for resilience, worn for elegance. Zero compromise between form and function.',
  },
  {
    title: 'Artisan Hands',
    body: 'Each creation passes through 72 hours of meticulous handwork. No mass production. No shortcuts. Only mastery.',
  },
  {
    title: 'Rare by Design',
    body: 'Collections are intentionally limited. When a run is done, it\'s done. Your piece remains yours alone.',
  },
];

export default function AboutUs() {
  const lineRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => {
      if (lineRef.current) lineRef.current.classList.add('drawn');
    }, 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <p className="about-eyebrow">Est. Binny's Jewellery</p>
        <h1 className="about-headline">
          The Elyx<br />Legacy
        </h1>
        <div className="about-rule" ref={lineRef} />
        <p className="about-subhead">
          Where heritage meets the future of luxury.
        </p>
      </section>

      {/* ── ORIGIN ── */}
      <section className="about-origin">
        <div className="about-origin-text">
          <span className="about-label">Origin</span>
          <h2>Born from<br />Binny's</h2>
          <p>
            Elyx is not a new brand — it is an evolution. Rooted in the legacy of Binny's Jewellery, a name that has defined quality craftsmanship for years, Elyx carries forward every lesson learned and every standard set.
          </p>
          <p>
            We took everything Binny's built — the eye for detail, the refusal to cut corners, the obsession with material — and pushed it further. The result is a line that doesn't just meet expectations. It redefines them.
          </p>
        </div>
        <div className="about-origin-accent">
          <div className="about-brand-mark">E</div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="about-stats">
        {STATS.map((s) => (
          <div className="about-stat" key={s.label}>
            <span className="about-stat-number">{s.number}</span>
            <span className="about-stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── PILLARS ── */}
      <section className="about-pillars">
        <span className="about-label">What we stand for</span>
        <h2 className="about-pillars-heading">Three pillars.<br />One standard.</h2>
        <div className="about-pillars-grid">
          {PILLARS.map((p, i) => (
            <div className="about-pillar" key={p.title}>
              <span className="about-pillar-num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="about-mission">
        <blockquote className="about-mission-quote">
          "Elyx is more than a name — it's a legacy, continuing Binny's tradition of creating masterpieces that stand the test of time."
        </blockquote>
      </section>

      <style>{`
        .about-page {
          background: #080808;
          color: #fff;
          min-height: 100vh;
          padding-top: 80px;
        }

        /* HERO */
        .about-hero {
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 120px 24px 80px;
          position: relative;
        }
        .about-eyebrow {
          font-family: 'Satoshi', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 32px;
        }
        .about-headline {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(72px, 14vw, 160px);
          font-weight: 700;
          line-height: 0.92;
          letter-spacing: -0.02em;
          color: #fff;
          margin: 0 0 40px;
        }
        .about-rule {
          width: 0;
          height: 1px;
          background: #d4af37;
          transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 32px;
        }
        .about-rule.drawn { width: 120px; }
        .about-subhead {
          font-family: 'Satoshi', sans-serif;
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #888;
          letter-spacing: 0.04em;
        }

        /* ORIGIN */
        .about-origin {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 48px;
        }
        .about-label {
          display: block;
          font-family: 'Satoshi', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 20px;
        }
        .about-origin-text h2 {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 600;
          line-height: 1.05;
          color: #fff;
          margin: 0 0 32px;
        }
        .about-origin-text p {
          font-family: 'Satoshi', sans-serif;
          font-size: 1.05rem;
          line-height: 1.85;
          color: #888;
          margin-bottom: 20px;
        }
        .about-origin-accent {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .about-brand-mark {
          width: 280px;
          height: 280px;
          border: 1px solid rgba(212, 175, 55, 0.25);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Clash Display', sans-serif;
          font-size: 140px;
          font-weight: 700;
          color: rgba(212, 175, 55, 0.15);
          letter-spacing: -0.05em;
          position: relative;
        }
        .about-brand-mark::before {
          content: '';
          position: absolute;
          inset: 16px;
          border: 1px solid rgba(212, 175, 55, 0.1);
          border-radius: 50%;
        }

        /* STATS */
        .about-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(255,255,255,0.06);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .about-stat {
          padding: 64px 40px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .about-stat:last-child { border-right: none; }
        .about-stat-number {
          display: block;
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 700;
          color: #d4af37;
          line-height: 1;
          margin-bottom: 12px;
        }
        .about-stat-label {
          font-family: 'Satoshi', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #555;
        }

        /* PILLARS */
        .about-pillars {
          max-width: 1200px;
          margin: 0 auto;
          padding: 120px 48px;
        }
        .about-pillars-heading {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(36px, 4.5vw, 56px);
          font-weight: 600;
          line-height: 1.1;
          color: #fff;
          margin: 0 0 64px;
        }
        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .about-pillar {
          padding: 48px 40px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s;
        }
        .about-pillar:hover { border-color: rgba(212,175,55,0.3); }
        .about-pillar-num {
          display: block;
          font-family: 'Clash Display', sans-serif;
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          color: #d4af37;
          margin-bottom: 24px;
        }
        .about-pillar h3 {
          font-family: 'Clash Display', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 16px;
        }
        .about-pillar p {
          font-family: 'Satoshi', sans-serif;
          font-size: 0.95rem;
          line-height: 1.75;
          color: #666;
          margin: 0;
        }

        /* MISSION */
        .about-mission {
          padding: 120px 48px;
          text-align: center;
          background: linear-gradient(180deg, #080808 0%, #0f0d08 50%, #080808 100%);
        }
        .about-mission-quote {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(1.4rem, 3vw, 2.4rem);
          font-weight: 500;
          line-height: 1.5;
          color: #d4af37;
          max-width: 900px;
          margin: 0 auto;
          border: none;
          padding: 0;
          quotes: none;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .about-origin {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 80px 32px;
          }
          .about-origin-accent { display: none; }
          .about-stats { grid-template-columns: repeat(2, 1fr); }
          .about-stat:nth-child(2) { border-right: none; }
          .about-stat { border-bottom: 1px solid rgba(255,255,255,0.06); }
          .about-pillars-grid { grid-template-columns: 1fr; }
          .about-pillars { padding: 80px 32px; }
          .about-mission { padding: 80px 32px; }
        }
        @media (max-width: 600px) {
          .about-hero { padding: 100px 24px 60px; }
          .about-stats { grid-template-columns: repeat(2, 1fr); }
          .about-pillar { padding: 36px 24px; }
        }
      `}</style>
    </div>
  );
}
