import React from 'react';
import './About.css';
import illustration from '../assets/img1.png'; 

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <img src={illustration} alt="Illustration" className="about-image" />
        <div className="about-text">
          <h2>About FreelanceHub</h2>
          <p>
            FreelanceHub connects businesses with freelancers, offering a seamless experience for finding talent or jobs in any field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
