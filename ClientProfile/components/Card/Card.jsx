import React from 'react';
import './Card.css';

const Card = () => {
  // Example data for the company and available jobs
  const companyDetails = {
    companyName: 'Tech Solutions Inc.',
    description: 'Tech Solutions Inc. is a leading tech company providing cutting-edge solutions for businesses worldwide. We specialize in innovative software and web development services.',
    location: 'New York, USA',
    founded: '2010',
    companySize: '200+ employees',
    availableJobs: [
      { role: 'Frontend Developer', summary: 'Develop user interfaces for web applications' },
      { role: 'Backend Developer', summary: 'Build scalable backend systems for apps' },
      { role: 'UI/UX Designer', summary: 'Design intuitive user interfaces and user experiences' },
    ],
  };

  return (
    <div className="client-container">
      {/* Company Details */}
      <header className="client-header">
        <h1>{companyDetails.companyName}</h1>
        <p>{companyDetails.description}</p>
      </header>

      {/* Basic Company Information */}
      <section className="company-details-section">
        <h2>Company Details</h2>
        <div className="company-details">
          <p><strong>Location:</strong> {companyDetails.location}</p>
          <p><strong>Founded:</strong> {companyDetails.founded}</p>
          <p><strong>Company Size:</strong> {companyDetails.companySize}</p>
        </div>
      </section>

      {/* Available Jobs Summary */}
      <section className="available-jobs-section">
        <h2>Available Jobs</h2>
        <ul className="jobs-list">
          {companyDetails.availableJobs.map((job, index) => (
            <li key={index}>
              <strong>{job.role}:</strong> {job.summary}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Card;

