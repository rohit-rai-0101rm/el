import React, { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Privacy Policy</h1>
        <p className="policy-intro">
          At Elyx, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your personal information.
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <ul>
            <li><strong>Personal Data:</strong> Name, email, phone number, and address provided through forms or orders.</li>
            <li><strong>Usage Data:</strong> IP address, device details, and browsing activity on our website.</li>
            <li><strong>Cookies:</strong> Small data files to enhance your browsing experience.</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To process and deliver your orders.</li>
            <li>To send updates, offers, and newsletters (with your consent).</li>
            <li>To analyze and improve website functionality.</li>
          </ul>
        </section>

        <section>
          <h2>3. Sharing Your Information</h2>
          <ul>
            <li><strong>Service Providers:</strong> For payment processing and delivery services.</li>
            <li><strong>Legal Compliance:</strong> When required by law or to protect our rights. We never sell or rent your personal information.</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>We use secure systems to safeguard your data, but no method is completely foolproof. We employ the highest industry standards to ensure your peace of mind.</p>
        </section>

        <section>
          <h2>5. Your Choices</h2>
          <ul>
            <li><strong>Email Preferences:</strong> Opt-out of marketing emails anytime.</li>
            <li><strong>Cookies:</strong> Adjust settings in your browser.</li>
          </ul>
        </section>

        <section>
          <h2>6. Third-Party Services</h2>
          <p>Our website may link to other platforms. Their privacy policies govern your data there.</p>
        </section>

        <section>
          <h2>7. Updates to This Policy</h2>
          <p>We may revise this policy occasionally. Please review it for changes.</p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>For questions, reach out at: <a href="mailto:sales@elyx.com">sales@elyx.com</a></p>
        </section>
      </div>
    </div>
  );
}
