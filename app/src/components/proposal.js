import React, { useState } from 'react';
import './proposal.css'; // Import the CSS file for styling
import uploadedImage from '../assets/img8.png'; // Correct path to the image
// import Navbar from '../assets/img1.png'; // Correctly import the Navbar component

const ProposalForm = () => {
  const [formData, setFormData] = useState({
    proposalDate: '',
    proposalStatus: 'Pending',
    name: '',
    gender: '',
    contractStartDate: '',
    contractEndDate: '',
    contractStatus: 'Active',
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
    console.log(formData); // Handle the submitted data as required
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      {/* Use the Navbar component */}
      {/* <Navbar /> */}
      <div className="proposal-form-container mt-12">
        <form className="proposal-form" onSubmit={handleSubmit}>
          {/* Step 1: Proposal Details */}
          {currentStep === 1 && (
            <>
              <h2 className="form-title">Submit Your Proposal</h2>

              <label className="form-label">
                Proposal Date:
                <input
                  className="form-input"
                  type="date"
                  name="proposalDate"
                  value={formData.proposalDate}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />

              <label className="form-label">
                Proposal Status:
                <select
                  className="form-select"
                  name="proposalStatus"
                  value={formData.proposalStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="Pending">Pending</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </label>
              <br />

              <label className="form-label">
                Name:
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />

              <label className="form-label">
                Gender:
                <select
                  className="form-select"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <br />

              <button type="button" onClick={handleNextStep} className="form-next-button">
                Next
              </button>
            </>
          )}

          {/* Step 2: Contract Details */}
          {currentStep === 2 && (
            <>
              <h2 className="form-title">Contract Details</h2>

              <label className="form-label">
                Contract Start Date:
                <input
                  className="form-input"
                  type="date"
                  name="contractStartDate"
                  value={formData.contractStartDate}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />

              <label className="form-label">
                Contract End Date:
                <input
                  className="form-input"
                  type="date"
                  name="contractEndDate"
                  value={formData.contractEndDate}
                  onChange={handleChange}
                  required
                />
              </label>
              <br />

              <label className="form-label">
                Contract Status:
                <select
                  className="form-select"
                  name="contractStatus"
                  value={formData.contractStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
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
      </div>

      {/* Correctly using the uploaded image */}
      <img src={uploadedImage} alt="Customer Support" className="uploaded-image" />
    </>
  );
};

export default ProposalForm;
