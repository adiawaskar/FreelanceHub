import React from 'react';
import './Listing.css';

const Listing = () => {
  const gigs = [
    { title: 'Frontend Developer', description: 'Develop user interfaces for web applications', payRate: '$50/hr', location: 'Remote' },
    { title: 'Backend Developer', description: 'Build scalable backend systems for apps', payRate: '$60/hr', location: 'Remote' },
    { title: 'UI/UX Designer', description: 'Design intuitive user interfaces and user experiences', payRate: '$45/hr', location: 'New York, USA' },
    { title: 'Frontend Developer', description: 'Develop user interfaces for web applications', payRate: '$50/hr', location: 'Remote' },
    { title: 'Backend Developer', description: 'Build scalable backend systems for apps', payRate: '$60/hr', location: 'Remote' },
    { title: 'UI/UX Designer', description: 'Design intuitive user interfaces and user experiences', payRate: '$45/hr', location: 'New York, USA' },
  ];

  return (
    <div className="gig-list-container">
      <h1>Listed Gigs</h1>
      <div className="gig-cards">
        {gigs.map((gig, index) => (
          <div key={index} className="gig-card">
            <h2>{gig.title}</h2>
            <p>{gig.description}</p>
            <p><strong>Pay Rate:</strong> {gig.payRate}</p>
            <p><strong>Location:</strong> {gig.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
