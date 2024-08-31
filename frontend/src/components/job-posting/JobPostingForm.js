import React, { useState } from 'react';
import './JobPostingForm.css'; // Import CSS file
import uploadedImage from './side-image.jpg';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    date: '',
    location: '',
    skills: '',
    status: 'open',
    payRate: '',
    jobDescription: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
    <div className="job-posting-form-container mt-12">
      
      <form className="job-posting-form " onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <>
            <h2 className="form-title">Create a Job Listing</h2>
            <label className="form-label">
              Job Title:
              <input
                className="form-input"
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <label className="form-label">
              Company Name:
              <input
                className="form-input"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <label className="form-label">
              Date:
              <input
                className="form-input"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <label className="form-label">
              Location:
              <input
                className="form-input"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <button type="button" onClick={handleNextStep} className="form-next-button">
              Next
            </button>
          </>
        )}

        {currentStep === 2 && (
          <>
            <label className="form-label">
              Skills Required:
              <input
                className="form-input"
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g., React, CSS, JavaScript"
                required
              />
            </label>
            <br />

            <label className="form-label">
              Status:
              <select
                className="form-select"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </label>
            <br />

            <label className="form-label">
              Pay Rate (per hour):
              <input
                className="form-input"
                type="number"
                name="payRate"
                value={formData.payRate}
                onChange={handleChange}
                min="0"
                required
              />
            </label>
            <br />

            <label className="form-label">
              Job Description:
              <textarea
                className="form-textarea"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                rows="4"
                cols="50"
                required
              />
            </label>
            <br />

            <button type="button" onClick={handlePrevStep} className="form-prev-button">
              Previous
            </button>
            <button className="form-submit-button" type="submit">
              Submit
            </button>
          </>
        )}
      </form>
      {/* <img src={uploadedImage} alt="Customer Support" className="uploaded-image" /> */}
    </div>
    <img src={uploadedImage} alt="Customer Support" className="uploaded-image" />
    </>
  );
};

export default JobPostingForm;
