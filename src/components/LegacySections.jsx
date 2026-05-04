import React, { useEffect } from 'react';
import AboutReveal from './AboutReveal';
import Testimonials3D from './Testimonials3D';

const INTRO_ITEMS = [
  {
    num: '01',
    title: 'Innovative Design',
    text: 'Where creativity meets precision — each piece crafted to define a new standard in wearable luxury.',
  },
  {
    num: '02',
    title: 'Premium Craftsmanship',
    text: 'Every Elyx bracelet undergoes 72 hours of artisan refinement before it reaches your wrist.',
  },
  {
    num: '03',
    title: 'Timeless Aesthetic',
    text: 'Designs that transcend trends. Inspired by architecture, defined by elegance.',
  },
  {
    num: '04',
    title: 'Exclusive Collections',
    text: 'Limited drops. Never mass-produced. Each piece a rare object of desire.',
  },
];

const COLLECTION_IMAGES = [
  'https://framerusercontent.com/images/X6THCszcCEdeHgCU7Anih2mKvc.webp',
  'https://framerusercontent.com/images/ILHR7EySa2gWrLnzOIQLcxbmLkQ.webp',
  'https://framerusercontent.com/images/WMQWY9o35uYZ4CuYH4Eto5lmIKc.webp',
  'https://framerusercontent.com/images/6fcGt9GY2H5QXZ8kA7Wl3HDagcc.webp',
  'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
];

/* ── SVG Icons ───────────────────────────────────────────────── */
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

/* ── Component ───────────────────────────────────────────────── */
export default function LegacySections() {
  useEffect(() => {
    const magneticElements = document.querySelectorAll('.magnetic');
    
    const moveMagnetic = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
    };
    
    const resetMagnetic = (e) => {
      e.currentTarget.style.transform = 'translate(0px, 0px)';
    };

    magneticElements.forEach(el => {
      el.addEventListener('mousemove', moveMagnetic);
      el.addEventListener('mouseleave', resetMagnetic);
    });

    return () => {
      magneticElements.forEach(el => {
        el.removeEventListener('mousemove', moveMagnetic);
        el.removeEventListener('mouseleave', resetMagnetic);
      });
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── INTRO ── */}
      <section id="intro">
        <div className="intro-inner">
          <div className="intro-header fade-in">
            <h2>Welcome to The World<br />of Luxury and Comfort</h2>
            <p className="intro-desc">
              Elyx is more than jewelry — it's a statement. Each bracelet is born from obsessive
              craftsmanship and worn by those who refuse to settle.
            </p>
          </div>
          <div className="intro-items">
            {INTRO_ITEMS.map((item) => (
              <div className="intro-item fade-in" key={item.num}>
                <span className="intro-num">{item.num}</span>
                <div className="intro-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <section id="ticker">
        <div className="ticker-track">
          {[
            { src: 'https://framerusercontent.com/images/hWgP8L6AlMCN6WPs9Hq5t0DM8.jpg', label: 'Restaurant' },
            { src: 'https://framerusercontent.com/images/6jt6DX2U6q3D7NMoQSdQyytKr6U.jpg', label: 'Luxurious Room' },
            { src: 'https://framerusercontent.com/images/xN5bUFAifAFOLRJazYRixvVTBQ.jpg', label: 'Pool' },
            { src: 'https://framerusercontent.com/images/uad2eihv9rnmTwbrP60ujPXIc.jpg', label: 'Night Event' },
            { src: 'https://framerusercontent.com/images/hWgP8L6AlMCN6WPs9Hq5t0DM8.jpg', label: 'Restaurant' },
            { src: 'https://framerusercontent.com/images/6jt6DX2U6q3D7NMoQSdQyytKr6U.jpg', label: 'Luxurious Room' },
            { src: 'https://framerusercontent.com/images/xN5bUFAifAFOLRJazYRixvVTBQ.jpg', label: 'Pool' },
            { src: 'https://framerusercontent.com/images/uad2eihv9rnmTwbrP60ujPXIc.jpg', label: 'Night Event' },
          ].map((card, i) => (
            <div className="ticker-card" key={i}>
              <img src={card.src} alt={card.label} loading="lazy" />
              <span className="ticker-label">{card.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SPECS ── */}
      <section id="specs">
        <div className="specs-header fade-in">
          <h2>Specification</h2>
        </div>
        <div className="specs-container">
          <div className="specs-sticky" id="specsImage">
            <img src="https://framerusercontent.com/images/uUATi49z7J3RerMA80TwkrBSo.jpg" alt="Spec 1" className="active" data-index="0" />
            <img src="https://framerusercontent.com/images/TmWAfaWQewUUN5csBOWRCYlM0g.jpg" alt="Spec 2" data-index="1" />
            <img src="https://framerusercontent.com/images/lQdJOioBoexDrlCVdYbr8eULtg8.jpg" alt="Spec 3" data-index="2" />
            <img src="https://framerusercontent.com/images/uUATi49z7J3RerMA80TwkrBSo.jpg" alt="Spec 4" data-index="3" />
            <img src="https://framerusercontent.com/images/TmWAfaWQewUUN5csBOWRCYlM0g.jpg" alt="Spec 5" data-index="4" />
          </div>
          <div className="specs-list">
            {[
              { num: '01', title: 'Style That Bends, Not Breaks', text: "Flex it at the gym, flaunt it at dinner — this bracelet's got moves. Crafted for those who live without limits and dress without apology." },
              { num: '02', title: 'Premium Material Fusion', text: 'A carefully engineered blend of luxury metals and sustainable composites. Every piece tells a story of craftsmanship that lasts generations.' },
              { num: '03', title: 'Timeless Silhouette Design', text: 'Clean lines. Confident presence. A silhouette refined through 200+ design iterations to achieve effortless wearability.' },
              { num: '04', title: 'All-Day Comfort Engineering', text: "Designed to be worn from sunrise to after-dark events. Lightweight yet substantial — you'll forget you're wearing it until someone asks where you got it." },
              { num: '05', title: 'Exclusive Limited Collections', text: 'Each season brings a new chapter. Our limited drops ensure you wear something truly rare — an object of desire, not mass production.' },
            ].map((item, i) => (
              <div className={`spec-item${i === 0 ? ' active' : ''}`} data-img={i} key={i}>
                <div className="spec-number">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials3D />

      <AboutReveal />

      {/* ── COLLECTION ── */}
      <section id="collection">
        <div className="collection-label fade-in">Collection</div>
        <div className="collection-cards">
          {COLLECTION_IMAGES.map((src, i) => (
            <div className="collection-card fade-in" key={i}>
              <img src={src} alt={`Collection ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

    </>
  );
}