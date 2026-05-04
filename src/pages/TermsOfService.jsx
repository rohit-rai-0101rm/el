import React, { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Terms of Service</h1>
        <p className="policy-intro">
          Welcome to Elyx. By accessing or using our website and purchasing our luxury products, you agree to be bound by these Terms of Service.
        </p>

        <section>
          <h2>1. Use of Our Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the site. Elyx reserves the right to suspend or terminate your access if you violate these terms.
          </p>
        </section>

        <section>
          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Elyx and is protected by international copyright laws. Our bespoke designs and signature silhouettes are exclusive intellectual property.
          </p>
        </section>

        <section>
          <h2>3. Product Information & Pricing</h2>
          <p>
            We strive to ensure that all details, descriptions, and prices appearing on the website are accurate. However, errors may occur. If we discover an error in the price of any goods you have ordered, we will inform you and give you the option to reconfirm your order at the correct price or cancel it.
          </p>
        </section>

        <section>
          <h2>4. Orders & Payments</h2>
          <p>
            By placing an order, you are offering to purchase a product subject to these terms. All orders are subject to availability and confirmation of the order price. Dispatch times may vary according to availability and are subject to any delays resulting from postal delays or force majeure.
          </p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            Elyx shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to, use of, or inability to use the website or our products.
          </p>
        </section>

        <section>
          <h2>6. Governing Law</h2>
          <p>
            These terms and conditions are to be construed in accordance with the laws of the jurisdiction in which Elyx operates, and in the event of any dispute or claim associated with these terms, that dispute or claim shall be subject to the exclusive jurisdiction of the local courts.
          </p>
        </section>

        <section>
          <h2>7. Contact Information</h2>
          <p>If you have any questions regarding these Terms of Service, please contact us at: <a href="mailto:support@elyx.com">support@elyx.com</a></p>
        </section>
      </div>
    </div>
  );
}
