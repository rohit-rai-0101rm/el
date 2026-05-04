import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function VideoSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  const onLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Sync video time with scroll progress
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      if (videoRef.current && duration) {
        // We use a small buffer to avoid flickering at the very end
        const time = latest * (duration - 0.1);
        videoRef.current.currentTime = Math.max(0, time);
      }
    });
    return () => unsubscribe();
  }, [duration, smoothProgress]);

  // Narrative transitions mapped to the new macro video
  const opacity1 = useTransform(smoothProgress, [0.05, 0.15, 0.3, 0.35], [0, 1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0.05, 0.15, 0.3, 0.35], [40, 0, 0, -40]);

  const opacity2 = useTransform(smoothProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.45, 0.55, 0.7, 0.75], [40, 0, 0, -40]);

  const opacity3 = useTransform(smoothProgress, [0.85, 0.95, 1], [0, 1, 1]);
  const y3 = useTransform(smoothProgress, [0.85, 0.95, 1], [40, 0, 0]);

  return (
    <section id="video-scroll-container" ref={containerRef} style={{ height: '500vh', position: 'relative' }}>
      <div className="sticky-video-wrapper">
        <video
          ref={videoRef}
          className="scrub-video"
          src="https://framerusercontent.com/assets/3QMNUX5He3ipAUH3zcoszrLTgM.mp4"
          muted
          playsInline
          onLoadedMetadata={onLoadedMetadata}
          preload="auto"
        />
        <div className="video-overlay" />

        <div className="scroll-content-overlay">
          {/* Phase 1: Welcome */}
          <motion.div className="narrative-block" style={{ opacity: opacity1, y: y1 }}>
            <span className="video-eyebrow">The World of Elyx</span>
            <h2 className="video-headline">Luxury & Comfort<br />Redefined</h2>
          </motion.div>

          {/* Phase 2: Philosophy */}
          <motion.div className="narrative-block" style={{ opacity: opacity2, y: y2 }}>
            <h2 className="video-headline small">Redefine Your Style</h2>
            <p className="video-tagline large">
              Wearing Elyx Is An Experience Like No Other —<br />
              A fusion of premium design and artistry.
            </p>
          </motion.div>

          {/* Phase 3: Final CTA */}
          <motion.div className="narrative-block" style={{ opacity: opacity3, y: y3 }}>
            <span className="video-eyebrow">Discover Excellence</span>
            <h2 className="video-headline smaller">A Fusion of Luxury</h2>
            <div className="video-ctas">
              <a href="https://eylx.godaddysites.com/" target="_blank" rel="noopener noreferrer" className="hs-btn hs-btn-primary magnetic">
                Shop Now
              </a>
              <a href="#collection" className="hs-btn hs-btn-secondary magnetic">
                View Collection
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        #video-scroll-container {
          background: #000;
        }
        .sticky-video-wrapper {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .scrub-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.05); /* Slight scale to hide edge artifacts during scrub */
        }
        .video-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%);
          z-index: 1;
        }
        .scroll-content-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 40px;
        }
        .narrative-block {
          position: absolute;
          max-width: 1000px;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .narrative-block .video-ctas {
          pointer-events: auto;
        }
        .video-eyebrow {
          font-family: 'Satoshi', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          font-size: 13px;
          color: var(--accent);
          margin-bottom: 24px;
          font-weight: 500;
        }
        .video-headline {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
        }
        .video-headline.small {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 20px;
        }
        .video-headline.smaller {
          font-size: clamp(2rem, 4vw, 3rem);
          margin-bottom: 40px;
        }
        .video-tagline.large {
          font-family: 'Satoshi', sans-serif;
          font-size: clamp(1.2rem, 2.5vw, 2rem);
          font-weight: 300;
          line-height: 1.5;
          letter-spacing: -0.01em;
          color: rgba(255,255,255,0.8);
          max-width: 700px;
        }
        .video-ctas {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .video-headline { font-size: 2.5rem; }
          .video-tagline.large { font-size: 1.1rem; }
          .video-ctas { flex-direction: column; width: 100%; max-width: 300px; }
        }
      `}</style>
    </section>
  );
}
