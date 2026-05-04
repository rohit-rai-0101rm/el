import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

export default function Footer() {
  useEffect(() => {
    const magneticElements = document.querySelectorAll('.magnetic');
    
    const moveMagnetic = (e) => {
      const el = e.currentTarget;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
    };
    
    const resetMagnetic = (e) => {
      e.currentTarget.style.transform = 'translate(0px, 0px)';
    };

    magneticElements.forEach(el => {
      el.addEventListener('mousemove', moveMagnetic);
      el.addEventListener('mouseleave', resetMagnetic);
    });

    return () => {
      magneticElements.forEach(el => {
        el.removeEventListener('mousemove', moveMagnetic);
        el.removeEventListener('mouseleave', resetMagnetic);
      });
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer">
        <div className="footer-body">
          {/* Nav columns */}
          <div className="footer-col">
            <h4>Pages</h4>
            <Link to="/">Home</Link>
            <a href="https://eylx.godaddysites.com/" target="_blank" rel="noopener noreferrer">Collection</a>
            <a href="#">FAQ</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <Link to="/terms">Terms of service</Link>
            <Link to="/privacy">Privacy policy</Link>
            <Link to="/refund">Refund policy</Link>
          </div>
          <div className="footer-col">
            <h4>Social media</h4>
            <div className="footer-social">
              <a href="#" className="footer-social-icon magnetic" aria-label="X / Twitter">
                <IconX />
              </a>
              <a href="#" className="footer-social-icon magnetic" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href="#" className="footer-social-icon magnetic" aria-label="LinkedIn">
                <IconLinkedIn />
              </a>
              <a href="#" className="footer-social-icon magnetic" aria-label="YouTube">
                <IconYouTube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© Copyright 2024. All rights Reserved</p>
          <div className="footer-bottom-actions">
            <a href="#" onClick={scrollToTop} className="back-to-top" aria-label="Back to Top">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        /* ── reset for footer links ── */
        #footer * { box-sizing: border-box; }

        #footer {
          background: #000;
          color: #fff;
          font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
          overflow: hidden;
          padding-top: 40px;
          position: relative;
        }

        /* Subtle top edge glow */
        #footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%);
          z-index: 10;
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
          font-size: 1.5rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 28px 0;
        }
        .footer-col a {
          display: inline-block;
          color: #b3b3b3;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 20px;
          transition: color 0.3s ease;
          position: relative;
          width: max-content;
        }
        .footer-col a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 1px;
          background-color: #fff;
          transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .footer-col a:hover {
          color: #fff;
        }
        .footer-col a:hover::after {
          width: 100%;
        }

        /* Social icons */
        .footer-social {
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .footer-social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b3b3b3;
          text-decoration: none;
          transition: color 0.3s ease, transform 0.15s linear;
          padding: 8px; /* generous hit area for magnetic effect */
          margin: -8px; /* offset padding */
          will-change: transform;
        }
        .footer-social-icon:hover {
          color: #fff;
        }
        .footer-social-icon svg {
          width: 20px;
          height: 20px;
          pointer-events: none; /* helps magnetic hover */
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
          font-size: 0.8rem;
          color: #999;
          margin: 0;
        }
        .footer-bottom-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .back-to-top {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: #fff;
          text-decoration: none;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .back-to-top:hover {
          background: rgba(255,255,255,0.15);
          transform: translateY(-2px);
        }
        .back-to-top svg {
          width: 16px;
          height: 16px;
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
