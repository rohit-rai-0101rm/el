import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function VideoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="video-section" ref={ref}>
      <video
        className="video-bg"
        src="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="https://framerusercontent.com/images/uUATi49z7J3RerMA80TwkrBSo.jpg"
      />
      <div className="video-overlay" />
      <div className="video-content">
        <motion.span
          className="video-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          New Collection 2024
        </motion.span>
        <motion.h1
          className="video-headline"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Redefine<br />your style
        </motion.h1>
        <motion.p
          className="video-tagline"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          Wearing Elyx Is An Experience Like No Other —<br />
          A fusion of luxury and design
        </motion.p>
        <motion.div
          className="video-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="https://eylx.godaddysites.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hs-btn hs-btn-primary"
          >
            Shop Now
          </a>
          <a href="#collection" className="hs-btn hs-btn-secondary">
            View Collection
          </a>
        </motion.div>
      </div>
    </section>
  );
}
