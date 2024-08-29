import React from 'react';
import './Features.css';

const features = [
  {
    title: 'Post a Job',
    description: 'Create your free job posting and start receiving Quotes within hours.',
    icon: '📝',
  },
  {
    title: 'Hire Freelancers',
    description: 'Compare the Quotes you receive and hire the best freelance professionals for the job.',
    icon: '💼',
  },
  {
    title: 'Get Work Done',
    description: 'Decide on how and when payments will be made and use WorkRooms to collaborate, communicate and track work.',
    icon: '✅',
  },
  {
    title: 'Make Secure Payments',
    description: 'Choose from multiple payment methods with SafePay payment protection.',
    icon: '💳',
  },
];

const Features = () => {
  return (
    <div className="features-section">
      <h2>It's Easy to Get Work Done on FreelanceHub</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <button className="cta-button">See How It Works</button>
    </div>
  );
};

export default Features;
