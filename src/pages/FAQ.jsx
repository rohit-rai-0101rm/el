import React, { useEffect, useState } from 'react';

const FAQ_DATA = [
  {
    question: "What materials are used in Elyx bracelets?",
    answer: "Elyx bracelets are crafted using premium-quality Swiss rubber, diamonds, and enamel, ensuring durability and style for every occasion."
  },
  {
    question: "Are the bracelets suitable for everyday wear?",
    answer: "Yes! Elyx bracelets are designed to be versatile, lightweight, and durable, making them perfect for daily wear."
  },
  {
    question: "Can I customize a bracelet?",
    answer: "Yes, we offer customization options. Contact our team at sales@elyx.com to discuss your preferences."
  },
  {
    question: "What is the return policy?",
    answer: "Returns are accepted within 14 days of delivery for unused and undamaged items. For more details, visit our Refund Policy page."
  },
  {
    question: "Are the diamonds certified?",
    answer: "Yes, all diamonds used in Elyx products are ethically sourced and certified for quality."
  },
  {
    question: "How do I care for my Elyx bracelet?",
    answer: "To maintain its shine and durability: Clean gently with a soft cloth. Avoid contact with harsh chemicals, perfumes, or water."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="policy-page">
      <div className="policy-container faq-container">
        <h1>Frequently Asked Questions</h1>
        <p className="policy-intro">
          Everything you need to know about our products and services.
        </p>

        <div className="faq-list">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-container {
          max-width: 700px;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .faq-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .faq-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.15);
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
        }
        .faq-question h3 {
          font-family: 'Satoshi', sans-serif;
          font-size: 1.1rem;
          font-weight: 500;
          color: #fff;
          margin: 0;
        }
        .faq-icon {
          font-size: 1.5rem;
          color: #b3b3b3;
          font-weight: 300;
          line-height: 1;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          padding: 0 24px;
        }
        .faq-item.open .faq-answer {
          max-height: 200px;
          padding-bottom: 24px;
        }
        .faq-answer p {
          margin: 0;
          font-family: 'Satoshi', sans-serif;
          font-size: 1rem;
          color: #999;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
