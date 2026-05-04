import React, { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-container contact-container">
        <h1>Contact Us</h1>
        <p className="policy-intro">
          Happy to help! Let us know your questions or feedback.
        </p>

        <div className="contact-grid">
          {/* Contact Details */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-block">
              <h3>Phone Number</h3>
              <a href="tel:+2590256215" className="contact-link">+259 (0) 256 215</a>
            </div>
            <div className="info-block">
              <h3>Email Address</h3>
              <a href="mailto:contact@elyx.com" className="contact-link">contact@elyx.com</a>
            </div>
            
            <div className="contact-form">
              <h3>Send a Message</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" rows="4" required></textarea>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>

          {/* Branches */}
          <div className="contact-branches">
            <h2>Our Branches</h2>
            <p className="branches-desc">We have 2 branches across India for your convenience.</p>
            
            <div className="branch-card">
              <h3>Elyx Mumbai</h3>
              <p>Binny's Jewellery Private Limited, 14/A, 1st Floor, Paper Box, Andheri East, Mumbai, Maharashtra 400093</p>
              <a href="tel:+2590256215" className="contact-link">+259 (0) 256 215</a>
              <div className="map-container">
                <iframe 
                  src="https://maps.google.com/maps?q=Andheri%20East,%20Mumbai,%20Maharashtra%20400093&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Elyx Mumbai Map"
                ></iframe>
              </div>
            </div>
            
            <div className="branch-card">
              <h3>Elyx Surat</h3>
              <p>Binny's Jewellery Boutique, Opp Science Center, City Light Rd, next to Sarvoday Bank, Surat, Gujarat</p>
              <a href="tel:+2590256215" className="contact-link">+259 (0) 256 215</a>
              <div className="map-container">
                <iframe 
                  src="https://maps.google.com/maps?q=City%20Light%20Rd,%20Surat,%20Gujarat&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Elyx Surat Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-container {
          max-width: 1000px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        .contact-grid h2 {
          font-family: 'Clash Display', sans-serif;
          font-size: 1.8rem;
          color: #fff;
          margin-bottom: 32px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding-bottom: 16px;
        }
        .info-block {
          margin-bottom: 24px;
        }
        .info-block h3, .branch-card h3, .contact-form h3 {
          font-family: 'Satoshi', sans-serif;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #777;
          margin-bottom: 8px;
        }
        .contact-link {
          font-family: 'Clash Display', sans-serif;
          font-size: 1.4rem;
          color: #fff !important;
          text-decoration: none !important;
          transition: color 0.3s ease;
        }
        .contact-link:hover {
          color: #d4af37 !important;
        }
        .branches-desc {
          margin-bottom: 32px;
        }
        .branch-card {
          background: rgba(255,255,255,0.03);
          padding: 32px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.06);
          margin-bottom: 24px;
        }
        .branch-card h3 {
          color: #fff;
          font-size: 1.2rem;
          text-transform: none;
          letter-spacing: 0;
          margin-bottom: 12px;
        }
        .branch-card p {
          font-size: 0.95rem;
          margin-bottom: 16px;
        }
        .map-container {
          margin-top: 24px;
          width: 100%;
          height: 200px;
          border-radius: 6px;
          overflow: hidden;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        /* Form */
        .contact-form {
          margin-top: 48px;
        }
        .contact-form form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 16px;
        }
        .contact-form input, .contact-form textarea {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 16px;
          border-radius: 4px;
          color: #fff;
          font-family: 'Satoshi', sans-serif;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          border-color: rgba(255,255,255,0.3);
        }
        .submit-btn {
          background: #fff;
          color: #000;
          border: none;
          padding: 16px;
          font-family: 'Clash Display', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }
        .submit-btn:hover {
          background: #e0e0e0;
        }
        .submit-btn:active {
          transform: scale(0.98);
        }

        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </div>
  );
}
