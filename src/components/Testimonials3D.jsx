import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const REVIEWS = [
  { quote: '"We are thrilled with the product provided by Elyx. They captured our aesthetic beautifully, highlighting unique features and enhancing their appeal in every detail."', name: 'Michael T.', role: 'Marketing Manager' },
  { quote: '"Our product images have never looked better! They have a keen eye for detail and a talent for capturing our brand in the best possible light."', name: 'Aurora Jensen', role: 'Marketing Director' },
  { quote: '"Exceptional service for our latest collection. Their attention to detail and creative approach resulted in images that perfectly showcased our products. Highly recommended!"', name: 'G. Monroe', role: 'Brand Partner' },
  { quote: '"A fantastic experience! They brought professionalism and creativity that truly set our brand apart. We look forward to working with them again in the future!"', name: 'Michael', role: 'MD, Stellar Designs' },
  { quote: '"The quality exceeded our expectations. Every piece from Elyx feels like it was made specifically for us. The craftsmanship is unmatched in today\'s market."', name: 'Sarah K.', role: 'Creative Director' },
];

const TiltCard = ({ review, isActive, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!isActive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glareBackground = useTransform(
    [glareX, glareY],
    ([xVal, yVal]) => `radial-gradient(circle at ${xVal} ${yVal}, rgba(255,255,255,0.15) 0%, transparent 60%)`
  );

  return (
    <motion.div
      ref={ref}
      className={`testimonial-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : 0,
      }}
      layout
    >
      {/* Glare effect */}
      {isActive && (
        <motion.div
          className="glare"
          style={{
            background: glareBackground
          }}
        />
      )}
      
      <div className="quote-icon">“</div>
      <p className="testimonial-quote">{review.quote}</p>
      <div className="testimonial-divider" />
      <div className="testimonial-author">
        <div className="author-info">
          <h4>{review.name}</h4>
          <p>{review.role}</p>
        </div>
        <div className="stars">
          {[...Array(5)].map((_, s) => <div className="star-icon" key={s} />)}
        </div>
      </div>
    </motion.div>
  );
};

export default function Testimonials3D() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const getPosition = (index) => {
    const diff = index - currentIndex;
    
    if (diff === 0) return 'center';
    
    // Smooth wrap around visually for a small number of items
    const total = REVIEWS.length;
    if (diff === -1 || (currentIndex === 0 && index === total - 1)) return 'left';
    if (diff === 1 || (currentIndex === total - 1 && index === 0)) return 'right';
    
    if (diff < -1 || (diff > 1 && index < currentIndex)) return 'hidden-left';
    return 'hidden-right';
  };

  return (
    <section id="testimonials-3d">
      <div className="testimonials-header fade-in">
        <span className="editorial-label" style={{display: 'block', textAlign: 'center', marginBottom: '24px', color: '#d4af37', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '14px'}}>Client Voices</span>
        <h2>CUSTOMER THOUGHTS</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-perspective">
          <AnimatePresence initial={false}>
            {REVIEWS.map((review, index) => {
              const pos = getPosition(index);
              
              const variants = {
                center: { x: "0%", z: 0, rotateY: 0, scale: 1, opacity: 1, filter: "blur(0px)", zIndex: 10 },
                left: { x: "-60%", z: -100, rotateY: 35, scale: 0.8, opacity: 0.4, filter: "blur(4px)", zIndex: 5 },
                right: { x: "60%", z: -100, rotateY: -35, scale: 0.8, opacity: 0.4, filter: "blur(4px)", zIndex: 5 },
                "hidden-left": { x: "-100%", z: -200, rotateY: 60, scale: 0.6, opacity: 0, filter: "blur(8px)", zIndex: 1 },
                "hidden-right": { x: "100%", z: -200, rotateY: -60, scale: 0.6, opacity: 0, filter: "blur(8px)", zIndex: 1 },
              };

              return (
                <motion.div
                  key={index}
                  className="carousel-item"
                  initial={false}
                  animate={variants[pos]}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "fit-content",
                    height: "fit-content",
                    perspective: "1000px" 
                  }}
                >
                  <TiltCard 
                    review={review} 
                    isActive={pos === 'center'} 
                    onClick={() => setCurrentIndex(index)}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="carousel-controls">
          <button onClick={handlePrev} className="control-btn" aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div className="dots">
            {REVIEWS.map((_, i) => (
              <span key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(i)} />
            ))}
          </div>
          <button onClick={handleNext} className="control-btn" aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <style>{`
        #testimonials-3d {
          background: #000;
          padding: 160px 20px;
          overflow: hidden;
        }
        .testimonials-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .testimonials-header h2 {
          font-family: 'Clash Display', sans-serif;
          font-weight: 500;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .carousel-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }
        .carousel-perspective {
          perspective: 1500px;
          height: 450px;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }

        .testimonial-card {
          width: 480px;
          padding: 56px;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);
          color: #fff;
          cursor: pointer;
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
          transition: border-color 0.4s ease;
        }
        .testimonial-card.active {
          cursor: default;
          border-color: rgba(212, 175, 55, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }
        .glare {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          z-index: 2;
        }

        .quote-icon {
          font-family: 'Clash Display', sans-serif;
          font-size: 80px;
          color: #d4af37;
          line-height: 0;
          margin-top: 30px;
          margin-bottom: 40px;
          transform: translateZ(40px);
        }
        .testimonial-quote {
          font-family: 'Satoshi', sans-serif;
          font-size: 1.25rem;
          line-height: 1.8;
          color: #e0e0e0;
          margin-bottom: 40px;
          transform: translateZ(20px);
        }
        .testimonial-divider {
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.2);
          margin-bottom: 32px;
          transform: translateZ(10px);
        }
        .testimonial-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
          transform: translateZ(30px);
        }
        .author-info h4 {
          font-family: 'Clash Display', sans-serif;
          font-size: 1.3rem;
          margin: 0 0 4px 0;
          color: #fff;
        }
        .author-info p {
          font-family: 'Satoshi', sans-serif;
          font-size: 1rem;
          color: #888;
          margin: 0;
        }
        .stars {
          display: flex;
          gap: 4px;
        }
        .star-icon {
          width: 14px; height: 14px;
          background: #d4af37;
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }

        .carousel-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          margin-top: 60px;
        }
        .control-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          width: 56px; height: 56px;
          border-radius: 50%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }
        .control-btn:hover {
          border-color: #d4af37;
          color: #d4af37;
          background: rgba(212, 175, 55, 0.05);
          transform: scale(1.05);
        }
        .control-btn svg {
          width: 24px; height: 24px;
        }
        .dots {
          display: flex;
          gap: 16px;
        }
        .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.3s;
        }
        .dot.active {
          background: #d4af37;
          transform: scale(1.5);
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 1024px) {
          .testimonial-card {
            width: 380px;
          }
        }
        @media (max-width: 768px) {
          .testimonial-card {
            width: 320px;
            padding: 32px;
          }
          .carousel-perspective {
            height: 400px;
          }
          .testimonial-quote {
            font-size: 1.05rem;
          }
          .quote-icon {
            font-size: 60px;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
}
