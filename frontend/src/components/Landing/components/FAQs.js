import React, { useState } from 'react';
import './FAQs.css';

const faqData = [
  {
    question: "Will freelancers be committed to my business's NDA?",
    answer: "Yes, all freelancers on FreelanceHub are required to sign and adhere to Non-Disclosure Agreements (NDAs) when working with clients. This ensures that your business's confidential information is protected throughout the project.",
  },
  {
    question: "How do I know that a freelancer is qualified to complete my project?",
    answer: "On FreelanceHub, our industry experts evaluate every freelancer before they are accepted and continue to hold them to the highest standards during their activity on FreelanceHub. You can expect vast experience, creativity, top communication and customer service skills, and the flexibility to take on long-term engagements.",
  },
  {
    question: "What if I didn't find the exact service that suits my project needs?",
    answer: "If you don't find the exact service you're looking for, you can reach out to our support team. They can help you find a freelancer with the specific skills you need or recommend similar services that might suit your project requirements.",
  },
  {
    question: "How does FreelanceHub protect us in the order process?",
    answer: "FreelanceHub ensures your protection through secure payment systems, milestone-based project management, and clear communication channels. If any issues arise during the order process, our dispute resolution team is here to assist you.",
  },
  {
    question: "How do I see a freelancer's hourly rate?",
    answer: "You can view a freelancer's hourly rate on their profile page, which also includes their portfolio, client reviews, and skillset. Additionally, rates are typically displayed when you search for services.",
  },
  {
    question: "How many team members can join my FreelanceHub  account?",
    answer: "Your FreelanceHub account can accommodate multiple team members, allowing you to collaborate efficiently on projects. The exact number of team members you can add depends on your subscription plan.",
  },
  {
    question: "How do I become a FreelanceHub freelancer?",
    answer: "To become a freelancer on FreelanceHub, you need to apply through our platform. Your application will be reviewed by our industry experts, and if you meet our quality standards, you will be accepted to offer your services on our platform.",
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