import React, { useEffect } from 'react';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-container about-container">
        <h1>About Us</h1>
        <p className="policy-intro">
          Discover our story, values, and vision. We're here to connect and inspire!
        </p>

        <div className="about-content">
          <p>
            <strong>Elyx</strong> is the latest evolution of Binny’s Jewellery, a trusted name in the world of luxury craftsmanship. Born from years of expertise, Elyx represents the next level of sophistication, where precision meets innovation.
          </p>
          <p>
            Crafted using the finest Swiss rubber, our designs redefine durability and elegance. With over 870 stunning creations, each piece from Elyx merges modern design with the timeless quality that Binny’s is known for.
          </p>
          <p>
            Our collection is for the bold, the refined, and the discerning—those who seek more than just jewellery, but a statement of style and strength. Every piece is crafted to offer versatility and resilience, ensuring you experience luxury without compromise.
          </p>
          <p className="about-highlight">
            Elyx is more than a name—it’s a legacy, continuing Binny’s tradition of creating masterpieces that stand the test of time.
          </p>
        </div>
      </div>

      <style>{`
        .about-container {
          max-width: 700px;
        }
        .about-content {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 48px;
          border-radius: 12px;
        }
        .about-content p {
          font-family: 'Satoshi', sans-serif;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #b3b3b3;
          margin-bottom: 24px;
        }
        .about-content p:last-child {
          margin-bottom: 0;
        }
        .about-content strong {
          color: #fff;
          font-weight: 600;
        }
        .about-highlight {
          font-family: 'Clash Display', sans-serif !important;
          font-size: 1.4rem !important;
          color: #d4af37 !important;
          text-align: center;
          margin-top: 48px !important;
          line-height: 1.4 !important;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        
        @media (max-width: 600px) {
          .about-content {
            padding: 32px 24px;
          }
          .about-highlight {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
