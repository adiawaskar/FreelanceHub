import React, { useState } from 'react';
import './FAQs.css';

const faqData = [
  {
    question: "Will freelancers be committed to my business's NDA?",
    answer: "",
  },
  {
    question: "How do I know that a freelancer is qualified to complete my project?",
    answer: "On FreelanceHub, our industry experts evaluate every freelancer before they are accepted and continue to hold them to the highest standards during their activity on Fiverr Pro. You can expect vast experience, creativity, top communication and customer service skills, and the flexibility to take on long-term engagements.",
  },
  {
    question: "What if I didn't find the exact service that suits my project needs?",
    answer: "",
  },
  {
    question: "How does Fiverr protect us in the order process?",
    answer: "",
  },
  {
    question: "How do I see a freelancer's hourly rate?",
    answer: "",
  },
  {
    question: "How many team members can join my Fiverr Pro account?",
    answer: "",
  },
  {
    question: "How do I become a Fiverr Pro freelancer?",
    answer: "",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2>FAQs</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <span>{faq.question}</span>
            <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQs;