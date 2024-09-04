// JobDetails.jsx
import React, { useState } from 'react';
import './JobDetails.css';
import { FaBrain, FaArrowLeft } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { BiStopwatch } from "react-icons/bi";

const JobDetails = ({
  company_name,
  job_title,
  job_description,
  job_status,
  job_visibility,
  job_skills_required,
  pay_rate,
  location,
  requirements,
  last_date_to_apply
}) => {
  const [isOpen, setIsOpen] = useState(true);
  
  return (
    <div className={`job-details-card ${isOpen ? 'active' : ''}`}>
      <FaArrowLeft className="close-btn" onClick={() => { setIsOpen(false); }} />
      <div className="job-details-content">
        <h1>{job_title}</h1>
        <div className="posted-on-line">
          <div>Posted <span>{new Date().toLocaleString()}</span></div>
          <div className="location">{location}</div>
        </div>
        <div className="job-description">
          {job_description}
          <div className="requirements">Requirements:
            <ul>
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="details-icons">
          <div className="details-item">
            <FaBrain className="icon" />
            <p>{job_status.charAt(0).toUpperCase() + job_status.slice(1)}</p>
            <p className="details-description">Innovative solutions and design thinking.</p>
          </div>
          <div className="details-item">
            <FaRegClock className="icon" />
            <p>Less Than 30hr/week</p>
            <p className="details-description">Innovative solutions and design thinking.</p>
          </div>
          <div className="details-item">
            <BiStopwatch className="icon" />
            <p>Hourly Payments</p>
            <p className="details-description">Innovative solutions and design thinking.</p>
          </div>
        </div>
        <div className="skills-section">
          <h2>Skills Required</h2>
          <ul className="skills-list">
            {job_skills_required.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="button-container flex">
          <button className="apply-button w-64 ml-80">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
