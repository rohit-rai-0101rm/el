import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionParallaxImage = ({ src, alt, className }) => {
  return (
    <div className={`editorial-img-container ${className}`}>
      <motion.img 
        src={src} 
        alt={alt} 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};

const SectionText = ({ title, text, className }) => (
  <motion.div 
    className={`editorial-text ${className}`}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20%" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="text-divider"></div>
    <h2>{title}</h2>
    <p>{text}</p>
  </motion.div>
);

export default function AboutReveal() {
  return (
    <section className="editorial-about-wrapper">
      <div className="editorial-header fade-in">
        <span className="editorial-label">Brand Story</span>
        <h1>The Elyx Legacy</h1>
      </div>

      <div className="editorial-grid">
        
        {/* Block 1: Craftsmanship */}
        <div className="editorial-block block-1">
          <SectionText 
            title="A Trusted Evolution" 
            text="Elyx is the latest evolution of Binny’s Jewellery, a trusted name in the world of luxury craftsmanship. Born from years of expertise, Elyx represents the next level of sophistication, where precision meets innovation."
            className="text-left"
          />
          <SectionParallaxImage 
            src="/elyx_craftsmanship.png" 
            alt="Craftsmanship and Diamonds" 
            className="img-right img-square"
          />
        </div>

        {/* Block 2: Swiss Rubber */}
        <div className="editorial-block block-2">
          <SectionParallaxImage 
            src="/elyx_rubber_clasp.png" 
            alt="Swiss Rubber Clasp" 
            className="img-left img-tall"
          />
          <SectionText 
            title="Finest Materials" 
            text="Crafted using the finest Swiss rubber, our designs redefine durability and elegance. With over 870 stunning creations, each piece from Elyx merges modern design with the timeless quality that Binny’s is known for."
            className="text-right overlap-left"
          />
        </div>

        {/* Block 3: Bold Lifestyle */}
        <div className="editorial-block block-3">
          <SectionText 
            title="For The Discerning" 
            text="Our collection is for the bold, the refined, and the discerning—those who seek more than just jewellery, but a statement of style and strength. Every piece is crafted to offer versatility and resilience, ensuring you experience luxury without compromise."
            className="text-center"
          />
          <SectionParallaxImage 
            src="/elyx_lifestyle_wrist.png" 
            alt="Bold Lifestyle" 
            className="img-center img-wide"
          />
        </div>

        {/* Block 4: The Masterpiece */}
        <div className="editorial-block block-4">
          <SectionText 
            title="The Masterpiece" 
            text="Elyx is more than a name—it’s a legacy, continuing Binny’s tradition of creating masterpieces that stand the test of time."
            className="text-left"
          />
          <SectionParallaxImage 
            src="/elyx_masterpiece.png" 
            alt="Timeless Masterpiece" 
            className="img-right img-square"
          />
        </div>

      </div>

      <style>{`
        .editorial-about-wrapper {
          background: #050505;
          padding: 160px 40px;
          color: #fff;
          font-family: 'Satoshi', sans-serif;
        }

        .editorial-header {
          text-align: center;
          margin-bottom: 160px;
        }
        .editorial-label {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #d4af37;
          display: block;
          margin-bottom: 24px;
        }
        .editorial-header h1 {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(3rem, 6vw, 6rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .editorial-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 200px;
        }

        .editorial-block {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        /* Block 3 specific override */
        .block-3 {
          flex-direction: column;
          gap: 80px;
        }

        .editorial-text {
          flex: 1;
          max-width: 500px;
          z-index: 2;
        }
        .editorial-text .text-divider {
          width: 40px;
          height: 2px;
          background: #d4af37;
          margin-bottom: 32px;
        }
        .editorial-text h2 {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 500;
          margin-bottom: 24px;
          color: #fff;
          line-height: 1.1;
        }
        .editorial-text p {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #a0a0a0;
        }

        /* Positioning Utilities */
        .text-left { margin-right: 60px; }
        .text-right { margin-left: 60px; }
        .text-center { 
          text-align: center; 
          max-width: 800px; 
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .overlap-left {
          margin-left: -100px; /* Overlaps the left image slightly */
          background: rgba(5,5,5,0.8);
          backdrop-filter: blur(10px);
          padding: 60px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .editorial-img-container {
          flex: 1.2;
          overflow: hidden;
          border-radius: 4px;
        }
        .editorial-img-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .img-square { aspect-ratio: 1 / 1; max-width: 600px; }
        .img-tall { aspect-ratio: 4 / 5; max-width: 500px; }
        .img-wide { aspect-ratio: 16 / 9; width: 100%; max-width: 1200px; }

        @media (max-width: 1024px) {
          .editorial-block {
            flex-direction: column !important;
            gap: 60px;
          }
          .editorial-text {
            max-width: 100%;
            margin: 0 !important;
            padding: 0 !important;
            background: transparent !important;
            backdrop-filter: none !important;
            border: none !important;
          }
          .img-square, .img-tall, .img-wide {
            max-width: 100%;
          }
          .editorial-grid {
            gap: 120px;
          }
        }
      `}</style>
    </section>
  );
}
