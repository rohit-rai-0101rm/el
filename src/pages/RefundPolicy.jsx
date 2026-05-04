import React, { useEffect } from 'react';

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Refund & Exchange Policy</h1>
        <p className="policy-intro">
          At Elyx, we take pride in our artisan craftsmanship. Every bracelet undergoes 72 hours of refinement before it reaches you. We want you to be completely satisfied with your luxury purchase.
        </p>

        <section>
          <h2>1. Return Policy</h2>
          <p>
            We accept returns within 14 days of delivery for a full refund or exchange. To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original premium packaging.
          </p>
        </section>

        <section>
          <h2>2. Non-Returnable Items</h2>
          <ul>
            <li>Custom-engraved or personalized pieces.</li>
            <li>Items marked as Final Sale or part of an exclusive limited-edition drop (unless defective).</li>
            <li>Gift cards.</li>
          </ul>
        </section>

        <section>
          <h2>3. Exchanges</h2>
          <p>
            We only replace items if they are defective or damaged upon arrival. If you need to exchange an item for a different size, please initiate a return for the original item and place a new order.
          </p>
        </section>

        <section>
          <h2>4. Refund Process</h2>
          <p>
            Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. If approved, your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
          </p>
        </section>

        <section>
          <h2>5. Shipping Costs</h2>
          <p>
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. We strongly recommend using a trackable shipping service or purchasing shipping insurance for these high-value items.
          </p>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>To initiate a return or exchange, please contact our concierge team at: <a href="mailto:concierge@elyx.com">concierge@elyx.com</a></p>
        </section>
      </div>
    </div>
  );
}
