import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaBuilding, FaGlobe, FaMapMarkerAlt, FaPhone, FaIndustry, FaLink, FaFileUpload, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Hirer-Signup.css';
import { Link } from 'react-router-dom';

function HirerSignup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyWebsite: '',
    companyAddress: '',
    phoneNumber: '',
    location: '',
    profilePic: null,
    jobTitle: '',
    industry: '',
    socialMediaLinks: '',
    taxInfo: '',
    businessRegistration: null,
    idVerification: null,
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Submit logic goes here
  };

  return (
    <div className="wrapper">
      <form className="signup-form" onSubmit={handleSubmit}>
        

        {step === 1 && (
          <div className="form-box">
            <h1 className="h1">Sign up as an Employer</h1>
            <div className="input-box">
              <FaUser className="icon" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </div>

            <div className="input-box">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>

            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>

            <button type="button" onClick={handleNext}>
              Next 
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="form-box">
            <div className="input-box">
              <FaBuilding className="icon" />
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
                required
              />
            </div>

            <div className="input-box">
              <FaGlobe className="icon" />
              <input
                type="url"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                placeholder="Company Website"
              />
            </div>

            <div className="input-box">
              <FaMapMarkerAlt className="icon" />
              <input
                type="text"
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleChange}
                placeholder="Company Address"
                required
              />
            </div>

            <div className="input-box">
              <FaPhone className="icon" />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>

            <button type="button" onClick={handlePrev}>
              Previous
            </button>

            <button type="button" onClick={handleNext}>
              Next 
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="form-box">
            <div className="input-box">
              <FaMapMarkerAlt className="icon" />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                required
              />
            </div>

            <div className="input-box">
              <FaBuilding className="icon" />
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title/Role"
                required
              />
            </div>

            <div className="input-box">
              <FaIndustry className="icon" />
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="Industry"
                required
              />
            </div>

            <div className="input-box">
              <FaLink className="icon" />
              <input
                type="url"
                name="socialMediaLinks"
                value={formData.socialMediaLinks}
                onChange={handleChange}
                placeholder="Social Media Links"
              />
            </div>

            <button type="button" onClick={handlePrev}>
              Previous
            </button>

            <button type="button" onClick={handleNext}>
              Next 
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="form-box">
            <div className="input-box">
              <FaFileUpload className="icon" />
              <input
                type="text"
                name="taxInfo"
                value={formData.taxInfo}
                onChange={handleChange}
                placeholder="Tax Information"
                required
              />
            </div>

            <div className="input-box">
              <FaFileUpload className="icon" />
              <input
                type="text"
                placeholder="Upload Profile Picture"
                onClick={() => document.getElementById('profilePic').click()}
                readOnly
              />
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaFileUpload className="icon" />
              <input
                type="text"
                placeholder="Upload ID Verification"
                onClick={() => document.getElementById('idVerification').click()}
                readOnly
              />
              <input
                type="file"
                id="idVerification"
                name="idVerification"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <FaFileUpload className="icon" />
              <input
                type="text"
                placeholder="Upload Business Registration"
                onClick={() => document.getElementById('businessRegistration').click()}
                readOnly
              />
              <input
                type="file"
                id="businessRegistration"
                name="businessRegistration"
                accept="image/*, .pdf"
                style={{ display: 'none' }}
                onChange={handleChange}
              />
            </div>

            <button type="button" onClick={handlePrev}>
               Previous
            </button>

            <button type="submit"><Link to="/login">Sign Up</Link></button>
          </div>
        )}
      </form>
    </div>
  );
}

export default HirerSignup;
