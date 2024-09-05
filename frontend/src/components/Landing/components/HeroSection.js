import React from 'react';
import './HeroSection.css';
import illustration from '../assets/img2.png'; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Gateway to Freelance Success</h1>
        <p>Find top talent or your next gig today! </p>
        <p>Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <img src={illustration} alt="Illustration" className="illustration" />
    </section>
  );
};

export default HeroSection;