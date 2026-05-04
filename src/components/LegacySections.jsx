import React, { useEffect } from 'react';
import AboutReveal from './AboutReveal';
import Testimonials3D from './Testimonials3D';
import SpecsReveal from './SpecsReveal';

const COLLECTION_IMAGES = [
  'https://framerusercontent.com/images/X6THCszcCEdeHgCU7Anih2mKvc.webp',
  'https://framerusercontent.com/images/ILHR7EySa2gWrLnzOIQLcxbmLkQ.webp',
  'https://framerusercontent.com/images/WMQWY9o35uYZ4CuYH4Eto5lmIKc.webp',
  'https://framerusercontent.com/images/6fcGt9GY2H5QXZ8kA7Wl3HDagcc.webp',
  'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
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