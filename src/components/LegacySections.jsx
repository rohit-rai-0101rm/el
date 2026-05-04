import React from 'react';

const INTRO_ITEMS = [
  {
    num: '01',
    title: 'Innovative Design',
    text: 'Where creativity meets precision — each piece crafted to define a new standard in wearable luxury.',
  },
  {
    num: '02',
    title: 'Premium Craftsmanship',
    text: 'Every Elyx bracelet undergoes 72 hours of artisan refinement before it reaches your wrist.',
  },
  {
    num: '03',
    title: 'Timeless Aesthetic',
    text: 'Designs that transcend trends. Inspired by architecture, defined by elegance.',
  },
  {
    num: '04',
    title: 'Exclusive Collections',
    text: 'Limited drops. Never mass-produced. Each piece a rare object of desire.',
  },
];

const COLLECTION_IMAGES = [
  'https://framerusercontent.com/images/X6THCszcCEdeHgCU7Anih2mKvc.webp',
  'https://framerusercontent.com/images/ILHR7EySa2gWrLnzOIQLcxbmLkQ.webp',
  'https://framerusercontent.com/images/WMQWY9o35uYZ4CuYH4Eto5lmIKc.webp',
  'https://framerusercontent.com/images/6fcGt9GY2H5QXZ8kA7Wl3HDagcc.webp',
  'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
];

/* ── SVG Icons ───────────────────────────────────────────────── */
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

/* ── Component ───────────────────────────────────────────────── */
export default function LegacySections() {
  return (
    <>
      {/* ── INTRO ── */}
      <section id="intro">
        <div className="intro-inner">
          <div className="intro-header fade-in">
            <h2>Welcome to The World<br />of Luxury and Comfort</h2>
            <p className="intro-desc">
              Elyx is more than jewelry — it's a statement. Each bracelet is born from obsessive
              craftsmanship and worn by those who refuse to settle.
            </p>
          </div>
          <div className="intro-items">
            {INTRO_ITEMS.map((item) => (
              <div className="intro-item fade-in" key={item.num}>
                <span className="intro-num">{item.num}</span>
                <div className="intro-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* ── SPECS ── */}
      <section id="specs">
        <div className="specs-header fade-in">
          <h2>Specification</h2>
        </div>
        <div className="specs-container">
          <div className="specs-sticky" id="specsImage">
            <img src="https://framerusercontent.com/images/uUATi49z7J3RerMA80TwkrBSo.jpg" alt="Spec 1" className="active" data-index="0" />
            <img src="https://framerusercontent.com/images/TmWAfaWQewUUN5csBOWRCYlM0g.jpg" alt="Spec 2" data-index="1" />
            <img src="https://framerusercontent.com/images/lQdJOioBoexDrlCVdYbr8eULtg8.jpg" alt="Spec 3" data-index="2" />
            <img src="https://framerusercontent.com/images/uUATi49z7J3RerMA80TwkrBSo.jpg" alt="Spec 4" data-index="3" />
            <img src="https://framerusercontent.com/images/TmWAfaWQewUUN5csBOWRCYlM0g.jpg" alt="Spec 5" data-index="4" />
          </div>
          <div className="specs-list">
            {[
              { num: '01', title: 'Style That Bends, Not Breaks', text: "Flex it at the gym, flaunt it at dinner — this bracelet's got moves. Crafted for those who live without limits and dress without apology." },
              { num: '02', title: 'Premium Material Fusion', text: 'A carefully engineered blend of luxury metals and sustainable composites. Every piece tells a story of craftsmanship that lasts generations.' },
              { num: '03', title: 'Timeless Silhouette Design', text: 'Clean lines. Confident presence. A silhouette refined through 200+ design iterations to achieve effortless wearability.' },
              { num: '04', title: 'All-Day Comfort Engineering', text: "Designed to be worn from sunrise to after-dark events. Lightweight yet substantial — you'll forget you're wearing it until someone asks where you got it." },
              { num: '05', title: 'Exclusive Limited Collections', text: 'Each season brings a new chapter. Our limited drops ensure you wear something truly rare — an object of desire, not mass production.' },
            ].map((item, i) => (
              <div className={`spec-item${i === 0 ? ' active' : ''}`} data-img={i} key={i}>
                <div className="spec-number">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews">
        <div className="reviews-header fade-in">
          <h2>CUSTOMER THOUGHTS</h2>
        </div>
        <div className="reviews-track" id="reviewsTrack">
          {[
            { quote: '"We are thrilled with the product provided by Elyx. They captured our aesthetic beautifully, highlighting unique features and enhancing their appeal in every detail."', name: 'Michael T.', role: 'Marketing Manager, Stellar Designs' },
            { quote: '"Our product images have never looked better! They have a keen eye for detail and a talent for capturing our brand in the best possible light."', name: 'Aurora Jensen', role: 'Marketing Director' },
            { quote: '"Exceptional service for our latest collection. Their attention to detail and creative approach resulted in images that perfectly showcased our products. Highly recommended!"', name: 'G. Monroe', role: 'Marketing Manager, Stellar Designs' },
            { quote: '"A fantastic experience! They brought professionalism and creativity that truly set our brand apart. We look forward to working with them again in the future!"', name: 'Michael', role: 'MD, Stellar Designs' },
            { quote: '"The quality exceeded our expectations. Every piece from Elyx feels like it was made specifically for us. The craftsmanship is unmatched in today\'s market."', name: 'Sarah K.', role: 'Creative Director, Luxe Brand' },
          ].map((r, i) => (
            <div className="review-card" key={i}>
              <p className="review-quote">{r.quote}</p>
              <div className="review-divider" />
              <div className="review-name">{r.name}</div>
              <div className="review-role">{r.role}</div>
              <div className="review-stars">
                {[...Array(5)].map((_, s) => <div className="star" key={s} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT / 3D CUBE ── */}
      <section id="about">
        <div className="about-sticky">
          <div className="about-title fade-in">ABOUT US</div>
          <div className="cube-scene">
            <div className="cube-wrapper" id="cubeWrapper">
              <div className="cube-face cube-face-front">
                <span className="cube-face-num">01</span>
                <div className="cube-face-content">
                  <h3>Innovative Solutions, Timeless Design</h3>
                  <p>We blend creativity and technology to deliver designs that stand the test of time.</p>
                </div>
              </div>
              <div className="cube-face cube-face-top">
                <span className="cube-face-num">02</span>
                <div className="cube-face-content">
                  <h3>Your Vision, Our Expertise</h3>
                  <p>Partner with us to bring your ideas to life with precision and creativity.</p>
                </div>
              </div>
              <div className="cube-face cube-face-back">
                <span className="cube-face-num">03</span>
                <div className="cube-face-content">
                  <h3>Crafting Digital Experiences</h3>
                  <p>We create engaging and intuitive digital experiences tailored to your audience.</p>
                </div>
              </div>
              <div className="cube-face cube-face-bottom">
                <span className="cube-face-num">04</span>
                <div className="cube-face-content">
                  <h3>Driven by Creativity, Defined by Excellence</h3>
                  <p>Our team is passionate about delivering top-notch solutions that exceed expectations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* ══════════════════════════════════════════
          ── FOOTER ──
      ══════════════════════════════════════════ */}
      <footer id="footer">

        <div className="footer-body">
          {/* Nav columns */}
          <div className="footer-col">
            <h4>Pages</h4>
            <a href="#hero-door-wrapper">Home</a>
            <a href="https://eylx.godaddysites.com/" target="_blank" rel="noopener noreferrer">Collection</a>
            <a href="#">FAQ</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Terms of service</a>
            <a href="#">Privacy policy</a>
            <a href="#">Refund policy</a>
          </div>
          <div className="footer-col">
            <h4>Social media</h4>
            <div className="footer-social">
              <a href="#" className="footer-social-icon" aria-label="X / Twitter">
                <IconX />
              </a>
              <a href="#" className="footer-social-icon" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href="#" className="footer-social-icon" aria-label="LinkedIn">
                <IconLinkedIn />
              </a>
              <a href="#" className="footer-social-icon" aria-label="YouTube">
                <IconYouTube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© Copyright 2024. All rights Reserved</p>
          <a href="#" className="footer-made-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M0 0h16v8H8v8l-8-8z" fill="#000" />
            </svg>
            <span>Made in Framer</span>
          </a>
        </div>

      </footer>

      {/* ── FOOTER STYLES ── */}
      <style>{`
        /* ── reset for footer links ── */
        #footer * { box-sizing: border-box; }

        #footer {
          background: #000;
          color: #fff;
          font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          overflow: hidden;
          padding-top: 40px;
        }

        /* ── Body ── */
        .footer-body {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 60px 64px 80px;
          gap: 40px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        
        /* Specific column alignments if needed */
        .footer-col:nth-child(2) {
          margin-right: auto;
          margin-left: 20%;
        }

        .footer-col h4 {
          font-size: 1.4rem;
          font-weight: 500;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 24px 0;
        }
        .footer-col a {
          display: block;
          color: #888;
          text-decoration: none;
          font-size: 0.95rem;
          margin-bottom: 16px;
          transition: color 0.2s ease;
        }
        .footer-col a:hover {
          color: #fff;
        }

        /* Social icons */
        .footer-social {
          display: flex;
          gap: 16px;
          align-items: center;
        }
        .footer-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .footer-social-icon:hover {
          color: #ccc;
          transform: translateY(-2px);
        }
        .footer-social-icon svg {
          width: 18px;
          height: 18px;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          margin: 0 64px;
          border-top: 1px solid #222;
        }
        .footer-copy {
          font-size: 0.75rem;
          color: #666;
          margin: 0;
        }
        .footer-made-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          color: #000;
          padding: 8px 12px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 600;
          transition: opacity 0.2s ease;
        }
        .footer-made-button:hover {
          opacity: 0.9;
        }
        .footer-made-button span {
          color: #000 !important;
          margin: 0 !important;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .footer-body {
            flex-direction: column;
            padding: 40px 32px 60px;
            gap: 48px;
          }
          .footer-col:nth-child(2) {
            margin-right: 0;
            margin-left: 0;
          }
          .footer-bottom {
            margin: 0 32px;
            padding: 20px 0;
          }
        }

        @media (max-width: 540px) {
          .footer-body { padding: 40px 24px 60px; }
          .footer-bottom { flex-direction: column; gap: 16px; margin: 0 24px; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}