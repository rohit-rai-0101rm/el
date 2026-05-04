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
              { num: '01', title: 'Style That Bends, Not Breaks', text: 'Flex it at the gym, flaunt it at dinner — this bracelet\'s got moves. Crafted for those who live without limits and dress without apology.' },
              { num: '02', title: 'Premium Material Fusion', text: 'A carefully engineered blend of luxury metals and sustainable composites. Every piece tells a story of craftsmanship that lasts generations.' },
              { num: '03', title: 'Timeless Silhouette Design', text: 'Clean lines. Confident presence. A silhouette refined through 200+ design iterations to achieve effortless wearability.' },
              { num: '04', title: 'All-Day Comfort Engineering', text: 'Designed to be worn from sunrise to after-dark events. Lightweight yet substantial — you\'ll forget you\'re wearing it until someone asks where you got it.' },
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

      {/* ── FOOTER ── */}
      <footer id="footer">
        <div className="footer-grid">
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
              <div className="social-btn">
                <svg viewBox="0 0 32 32"><path d="M21.751 7L24.818 7L18.118 14.658L26 25.079L19.828 25.079L14.995 18.759L9.463 25.079L6.395 25.079L13.561 16.888L6 7L12.328 7L16.697 12.777Z M20.675 23.243L22.375 23.243L11.405 8.74L9.581 8.74Z"/></svg>
              </div>
              <div className="social-btn">
                <svg viewBox="0 0 20 20"><path d="M6.666 10.006C6.663 8.165 8.153 6.67 9.993 6.667C11.834 6.663 13.33 8.152 13.333 9.994C13.337 11.834 11.847 13.329 10.006 13.333C8.166 13.337 6.67 11.847 6.666 10.006ZM4.865 10.01C4.871 12.846 7.174 15.14 10.01 15.134C12.845 15.129 15.14 12.826 15.135 9.99C15.129 7.155 12.826 4.86 9.99 4.865C7.154 4.871 4.86 7.174 4.865 10.01ZM14.127 4.655C14.129 5.317 14.667 5.853 15.329 5.852C15.992 5.85 16.528 5.312 16.527 4.65C16.526 3.988 15.987 3.451 15.325 3.453C14.662 3.454 14.126 3.992 14.127 4.655ZM5.858 0.069C4.794 0.119 4.068 0.29 3.433 0.539C2.775 0.795 2.218 1.138 1.664 1.695C1.109 2.252 0.768 2.81 0.513 3.468C0.267 4.105 0.1 4.832 0.053 5.897C0.007 6.963-0.004 7.304 0.001 10.019C0.006 12.734 0.018 13.075 0.069 14.142C0.12 15.206 0.29 15.932 0.539 16.568C0.795 17.225 1.138 17.782 1.695 18.337C2.252 18.891 2.811 19.232 3.469 19.487C4.105 19.732 4.832 19.9 5.897 19.947C6.963 19.994 7.304 20.004 10.019 19.999C12.735 19.994 13.075 19.982 14.142 19.931C15.206 19.88 15.932 19.71 16.568 19.462C17.225 19.204 17.782 18.862 18.337 18.305C18.891 17.748 19.232 17.19 19.486 16.531C19.732 15.895 19.9 15.168 19.946 14.104C19.993 13.037 20.004 12.696 19.999 9.981C19.994 7.265 19.981 6.925 19.931 5.859C19.88 4.794 19.71 4.068 19.461 3.432C19.204 2.775 18.862 2.218 18.305 1.663C17.748 1.109 17.19 0.767 16.531 0.514C15.895 0.268 15.168 0.1 14.104 0.054C13.037 0.006 12.696-0.004 9.981 0.001C7.266 0.006 6.925 0.018 5.858 0.069Z"/></svg>
              </div>
              <div className="social-btn">
                <svg viewBox="0 0 32 32"><path d="M13.119 12.655L16.771 12.655L16.771 14.527L16.824 14.527C17.333 13.614 18.576 12.655 20.431 12.655C24.287 12.655 25 15.054 25 18.176L25 24.776L21.192 24.776L21.191 18.898C21.191 17.554 21.164 15.824 19.211 15.824C17.228 15.824 16.924 17.287 16.924 18.801L16.924 24.776L13.119 24.776ZM10.961 8.98C10.961 10.073 10.074 10.961 8.981 10.961C7.887 10.961 7 10.073 7 8.98C7 7.887 7.887 7 8.981 7C10.074 7 10.961 7.887 10.961 8.98ZM7 12.655L10.961 12.655L10.961 24.776L7 24.776Z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright 2024. All rights Reserved</p>
          <div className="footer-logo">Elyx</div>
        </div>
      </footer>
    </>
  );
}
