import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Find Freelancers</h3>
          <p>Hire top talent for your projects easily.</p>
        </div>
        <div className="service-item">
          <h3>Post a Job</h3>
          <p>Post your project and get proposals from professionals.</p>
        </div>
        <div className="service-item">
          <h3>Manage Projects</h3>
          <p>Track project progress and communicate with freelancers.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
