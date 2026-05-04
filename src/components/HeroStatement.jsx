import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function HeroStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section id="hero-statement" ref={ref}>
      <div className="hs-inner">
        <div className="hs-text">
          <motion.span
            className="hs-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            New Collection 2024
          </motion.span>
          <motion.h1
            className="hs-headline"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Redefine<br />your style
          </motion.h1>
          <motion.p
            className="hs-tagline"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Wearing Elyx Is An Experience Like No Other —
            <br />A fusion of luxury and design
          </motion.p>
          <motion.div
            className="hs-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
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
        <motion.div
          className="hs-image"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          <img
            src="https://framerusercontent.com/images/uUATi49z7J3RerMA80TwkrBSo.jpg"
            alt="Elyx Bracelet"
          />
        </motion.div>
      </div>
    </section>
  );
}
