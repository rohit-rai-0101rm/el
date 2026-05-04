import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const SPECS = [
  {
    num: '01',
    title: 'Innovative Design',
    text: 'Where creativity meets precision — each piece crafted to define a new standard in wearable luxury.',
    image: '/spec_innovative.png'
  },
  {
    num: '02',
    title: 'Premium Craftsmanship',
    text: 'Every Elyx bracelet undergoes 72 hours of artisan refinement before it reaches your wrist.',
    image: '/spec_craftsmanship.png'
  },
  {
    num: '03',
    title: 'Timeless Aesthetic',
    text: 'Designs that transcend trends. Inspired by architecture, defined by elegance.',
    image: '/spec_aesthetic.png'
  },
  {
    num: '04',
    title: 'Exclusive Collections',
    text: 'Limited drops. Never mass-produced. Each piece a rare object of desire.',
    image: '/spec_exclusive.png'
  }
];

const SpecItem = ({ spec, index, setActiveIndex }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    return scrollYProgress.onChange(v => {
      if (v > 0 && v < 1) {
        setActiveIndex(index);
      }
    });
  }, [scrollYProgress, index, setActiveIndex]);

  return (
    <motion.div 
      ref={ref}
      className="spec-item"
      initial={{ opacity: 0.2, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ margin: "-20% 0% -20% 0%" }}
    >
      <div className="spec-num">{spec.num}</div>
      <h3 className="spec-title">{spec.title}</h3>
      <p className="spec-text">{spec.text}</p>
    </motion.div>
  );
};

export default function SpecsReveal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  return (
    <section id="specs-reveal" ref={containerRef}>
      <div className="specs-header">
        <span className="editorial-label">The Details</span>
        <h2>SPECIFICATION</h2>
      </div>

      <div className="specs-content">
        {/* Left Side: Sticky Image */}
        <div className="specs-sticky-visual">
          <div className="visual-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="product-image-container"
                initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotateY: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img 
                  src={SPECS[activeIndex].image} 
                  alt={SPECS[activeIndex].title} 
                  className="product-img"
                />
                <div className="image-overlay" />
              </motion.div>
            </AnimatePresence>
            
            {/* Background Accent */}
            <div className="bg-accent-text">{SPECS[activeIndex].num}</div>
          </div>
        </div>

        {/* Right Side: Scrolling Specs */}
        <div className="specs-scrolling-list">
          {SPECS.map((spec, i) => (
            <SpecItem 
              key={i} 
              spec={spec} 
              index={i} 
              setActiveIndex={setActiveIndex} 
            />
          ))}
          <div className="spacer" />
        </div>
      </div>

      <style>{`
        #specs-reveal {
          background: #fff;
          padding: 160px 40px;
          position: relative;
        }
        .specs-header {
          max-width: 1400px;
          margin: 0 auto 100px;
          text-align: center;
        }
        .editorial-label {
          display: block;
          font-family: 'Satoshi', sans-serif;
          font-size: 14px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #d4af37;
          margin-bottom: 20px;
        }
        .specs-header h2 {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          color: #1a1a1a;
          margin: 0;
        }

        .specs-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          position: relative;
        }

        /* Sticky Visual */
        .specs-sticky-visual {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
        }
        .visual-wrapper {
          width: 100%;
          height: 600px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-image-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .product-img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
          filter: drop-shadow(0 40px 100px rgba(0,0,0,0.1));
        }
        .bg-accent-text {
          position: absolute;
          font-family: 'Clash Display', sans-serif;
          font-size: 400px;
          font-weight: 700;
          color: rgba(0,0,0,0.02);
          z-index: 1;
          pointer-events: none;
          user-select: none;
          line-height: 1;
        }

        /* Scrolling List */
        .specs-scrolling-list {
          padding: 20vh 0;
        }
        .spec-item {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 60px;
          border-left: 2px solid rgba(0,0,0,0.05);
          position: relative;
          margin-bottom: 100px;
        }
        .spec-num {
          font-family: 'Clash Display', sans-serif;
          font-size: 24px;
          color: #d4af37;
          margin-bottom: 24px;
          font-weight: 600;
        }
        .spec-title {
          font-family: 'Clash Display', sans-serif;
          font-size: 2.5rem;
          color: #1a1a1a;
          margin: 0 0 24px 0;
          letter-spacing: -0.01em;
        }
        .spec-text {
          font-family: 'Satoshi', sans-serif;
          font-size: 1.25rem;
          line-height: 1.8;
          color: #666;
          max-width: 450px;
        }
        .spacer {
          height: 40vh;
        }

        @media (max-width: 1024px) {
          .specs-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .specs-sticky-visual {
            position: relative;
            height: 400px;
            top: auto;
          }
          .visual-wrapper {
            height: 400px;
          }
          .bg-accent-text {
            font-size: 200px;
          }
          .spec-item {
            min-height: auto;
            padding: 60px 20px;
            border-left: none;
            border-top: 1px solid rgba(0,0,0,0.05);
            text-align: center;
            align-items: center;
          }
          .spec-text {
            max-width: 100%;
          }
          .specs-scrolling-list {
            padding: 0;
          }
          .spacer {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
