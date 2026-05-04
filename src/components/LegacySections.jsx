import React, { useEffect } from 'react';
import AboutReveal from './AboutReveal';
import Testimonials3D from './Testimonials3D';
import SpecsReveal from './SpecsReveal';

const COLLECTION_ITEMS = [
  { src: 'https://framerusercontent.com/images/X6THCszcCEdeHgCU7Anih2mKvc.webp', name: 'Classic Elegance', tag: 'Signature Series' },
  { src: 'https://framerusercontent.com/images/ILHR7EySa2gWrLnzOIQLcxbmLkQ.webp', name: 'Rose Gold', tag: 'Premium Line' },
  { src: 'https://framerusercontent.com/images/WMQWY9o35uYZ4CuYH4Eto5lmIKc.webp', name: 'Diamond Heart', tag: 'Limited Edition' },
  { src: 'https://framerusercontent.com/images/6fcGt9GY2H5QXZ8kA7Wl3HDagcc.webp', name: 'Pulse Wave', tag: 'Avant-Garde' },
  { src: 'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg', name: 'Bold Heritage', tag: 'Iconic Collection' },
];

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

  return (
    <>
      {/* ── TICKER ── */}
      <section id="ticker">
        <div className="ticker-heading fade-in">
          <span className="ticker-eyebrow">Crafted for Every Moment</span>
          <h2 className="ticker-title">Life in Elyx</h2>
        </div>
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

      <SpecsReveal />

      <Testimonials3D />

      <AboutReveal />

      {/* ── COLLECTION ── */}
      <section id="collection">
        <div className="collection-header fade-in">
          <span className="collection-eyebrow">Explore the Range</span>
          <h2 className="collection-title">Collection</h2>
          <p className="collection-subtitle">Each piece a rare object of desire — never mass-produced.</p>
        </div>
        <div className="collection-grid">
          {COLLECTION_ITEMS.map((item, i) => (
            <div className={`collection-item fade-in collection-item-${i + 1}`} key={i}>
              <img src={item.src} alt={item.name} loading="lazy" />
              <div className="collection-item-info">
                <span className="collection-item-tag">{item.tag}</span>
                <span className="collection-item-name">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}