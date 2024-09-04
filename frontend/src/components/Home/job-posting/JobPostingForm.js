import React, { useState } from 'react';
import './JobPostingForm.css';
import uploadedImage from './side-image.jpg';
import Navbar from '../Navbar';

const JobPostingForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    last_date_to_apply: '',
    location: '',
    skills: '',
    status: 'open',
    payRate: '',
    jobDescription: '',
    jobVisibility: 'public',
    requirements: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedFormData = {
      company_name: formData.company,
      job_title: formData.jobTitle,
      job_description: formData.jobDescription,
      job_status: formData.status,
      job_visibility: formData.jobVisibility,
      job_skills_required: formData.skills.split(',').map(skill => skill.trim()),
      pay_rate: formData.payRate,
      location: formData.location,
      requirements: formData.requirements.split(',').map(req => req.trim()),
      last_date_to_apply: formData.last_date_to_apply
    };

    console.log('Submitting data:', formattedFormData);

    fetch('http://localhost:8000/api/v1/jobPosting/postJob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedFormData),
    })
      .then(response => response.json())
      .then(data => {
        // Display success message
    alert("Job Added Successfully");

    // Redirect to the form page
    window.location.href = 'http://localhost:3000/form';

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="job-posting-form-container mt-12">
        <form className="job-posting-form" onSubmit={handleSubmit}>
          {currentStep === 1 && (
            <>
              <h2 className="form-title">Create a Job Listing</h2>
              <input
                className="form-input"
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                required
              />

              <input
                className="form-input"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                required
              />

              <input
                className="form-input"
                type="date"
                name="last_date_to_apply"
                value={formData.last_date_to_apply}
                onChange={handleChange}
                required
              />

              <input
                className="form-input"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
              />

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

              <div className="form-button-container">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="form-next-button"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <input
                className="form-input"
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Skills Required (e.g., React, CSS, JavaScript)"
                required
              />

              <input
                className="form-input"
                type="number"
                name="payRate"
                value={formData.payRate}
                onChange={handleChange}
                min="0"
                placeholder="Pay Rate (per hour)"
                required
              />

              <input
                className="form-input"
                type="text"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                placeholder="Requirements (e.g., 3 years of experience, Bachelor's degree)"
                required
              />

              <textarea
                className="form-textarea"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                rows="4"
                placeholder="Job Description"
                required
              />

              <select
                className="form-select"
                name="jobVisibility"
                value={formData.jobVisibility}
                onChange={handleChange}
                required
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>

              <div className="form-button-container">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="form-prev-button"
                >
                  Previous
                </button>
                <button className="form-submit-button" type="submit">
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
      <img src={uploadedImage} alt="Customer Support" className="uploaded-image" />
    </>
  );
};

export default JobPostingForm;
