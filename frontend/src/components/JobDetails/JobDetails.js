// JobDetails.jsx
import React, { useState } from 'react';
import './JobDetails.css';
import { FaBrain, FaArrowLeft } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { BiStopwatch } from "react-icons/bi";

const JobDetails = () => {
  const [isOpen,setIsOpen] = useState(true);
  return (
    <div className={`job-details-card ${isOpen ? 'active' : ''}`}>
        <FaArrowLeft className="close-btn" onClick={()=>{setIsOpen(false)}} />
      <div className="job-details-content">
        <h1>UI Design for a Web App like Angie's List</h1>
        <div className="posted-on-line">
          <div>Posted <span>1 hour ago</span></div>
          <div className="location">Worldwide</div>
        </div>
        <div className="job-description">
        We are seeking a talented UI Designer for a short-term project requiring just 1 hour of work. The task involves creating a simple and clean user interface design for a specific feature on our platform. The ideal candidate should have experience in UI design, proficiency in design tools like Figma or Adobe XD, and a keen eye for detail. This is a quick task with the potential for future projects based on performance.
        <div className="requirements">Requirements:
        <ul>
            <li>Strong experience in UI design.</li>
            <li>Proficiency in Figma, Adobe XD, or similar tools.</li>
            <li>Ability to deliver quality work within a short time frame.</li>
            <li>Attention to detail and creativity.</li>
            <li>Duration: 1 hour</li>
        </ul>
        </div>
        </div>
        <div className="details-icons">
          <div className="details-item">
            <FaBrain className="icon" />
            <p>Entry Level</p>
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
        </div>
        <div className="skills-section">
          <h2>Skills Required</h2>
          <ul className="skills-list">
            <li>User Interface Design</li>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Attention to Detail</li>
            <li>Creative Problem-Solving</li>
          </ul>
        </div><div className="button-container">
          <button className="apply-button">Apply Now</button>
        </div>
    </div>
  );
};

export default JobDetails;

