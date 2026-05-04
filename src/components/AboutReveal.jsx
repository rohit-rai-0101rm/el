import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const panels = [
  {
    title: "Our Legacy",
    text: "Elyx is the latest evolution of Binny’s Jewellery, a trusted name in the world of luxury craftsmanship. Born from years of expertise, Elyx represents the next level of sophistication, where precision meets innovation.",
    image: "https://framerusercontent.com/images/X6THCszcCEdeHgCU7Anih2mKvc.webp",
    color: "#111"
  },
  {
    title: "The Craft",
    text: "Crafted using the finest Swiss rubber, our designs redefine durability and elegance. With over 870 stunning creations, each piece from Elyx merges modern design with the timeless quality that Binny’s is known for.",
    image: "https://framerusercontent.com/images/ILHR7EySa2gWrLnzOIQLcxbmLkQ.webp",
    color: "#1a1a1a"
  },
  {
    title: "The Vision",
    text: "Our collection is for the bold, the refined, and the discerning—those who seek more than just jewellery, but a statement of style and strength. Every piece is crafted to offer versatility and resilience, ensuring you experience luxury without compromise.",
    image: "https://framerusercontent.com/images/WMQWY9o35uYZ4CuYH4Eto5lmIKc.webp",
    color: "#222"
  },
  {
    title: "The Masterpiece",
    text: "Elyx is more than a name—it’s a legacy, continuing Binny’s tradition of creating masterpieces that stand the test of time.",
    image: "https://framerusercontent.com/images/6fcGt9GY2H5QXZ8kA7Wl3HDagcc.webp",
    color: "#2a2a2a"
  }
];

const Card = ({ panel, i, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  
  // Scale down the card when the NEXT cards stack on top of it.
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Slight darkening effect as cards stack over it
  const opacity = useTransform(progress, range, [1, 0.5]);

  return (
    <div ref={containerRef} className="stack-card-container">
      <motion.div 
        className="stack-card"
        style={{ 
          backgroundColor: panel.color,
          scale,
          top: `calc(10vh + ${i * 25}px)` 
        }}
      >
        <motion.div style={{ opacity }} className="stack-card-inner">
          <div className="stack-card-text">
            <span className="stack-card-num">0{i + 1}</span>
            <h2>{panel.title}</h2>
            <p>{panel.text}</p>
          </div>
          <div className="stack-card-image">
            <img src={panel.image} alt={panel.title} />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function AboutReveal() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="stack-wrapper">
      <div className="stack-header">
        <h2 className="fade-in">ABOUT US</h2>
      </div>
      
      {panels.map((panel, i) => {
        const targetScale = 1 - ((panels.length - i) * 0.04);
        const range = [i * 0.25, 1];
        
        return (
          <Card 
            key={i} 
            panel={panel} 
            i={i} 
            progress={scrollYProgress} 
            range={range} 
            targetScale={targetScale} 
          />
        );
      })}

      <style>{`
        .stack-wrapper {
          position: relative;
          background: #000;
          padding-bottom: 20vh;
        }
        .stack-header {
          height: 40vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .stack-header h2 {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #fff;
        }
        .stack-card-container {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: sticky;
          top: 0;
        }
        .stack-card {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          max-width: 1000px;
          height: 600px;
          border-radius: 24px;
          transform-origin: top center;
          box-shadow: 0 -10px 40px rgba(0,0,0,0.5);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .stack-card-inner {
          display: flex;
          width: 100%;
          height: 100%;
        }
        .stack-card-text {
          flex: 1;
          padding: 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .stack-card-num {
          font-family: 'Satoshi', sans-serif;
          font-size: 1.2rem;
          color: #d4af37;
          margin-bottom: 24px;
          display: block;
        }
        .stack-card-text h2 {
          font-family: 'Clash Display', sans-serif;
          font-size: 3rem;
          color: #fff;
          margin-bottom: 24px;
          font-weight: 500;
        }
        .stack-card-text p {
          font-family: 'Satoshi', sans-serif;
          font-size: 1.15rem;
          line-height: 1.8;
          color: #b3b3b3;
        }
        .stack-card-image {
          flex: 1;
          height: 100%;
        }
        .stack-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(10%);
        }

        @media (max-width: 900px) {
          .stack-card {
            height: auto;
            min-height: 600px;
            max-width: 90%;
          }
          .stack-card-inner {
            flex-direction: column;
          }
          .stack-card-text {
            padding: 40px 32px;
          }
          .stack-card-text h2 {
            font-size: 2rem;
          }
          .stack-card-image {
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
