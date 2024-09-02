import React, { useState } from 'react';
import './Freelancer-Signup.css';
import { FaUser, FaEnvelope, FaLock, FaFileUpload } from "react-icons/fa";
import Select from 'react-select';
import { Link } from 'react-router-dom';
const options = [
  { value: 'react', label: 'React' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'css', label: 'CSS' },
  // Add more skills as needed
];

//do not mess with these styles....RAJ- Bhak Be  -AYUSH

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '40px',
    color: '#fff',
    minHeight: '50px',
    paddingLeft: '20px',
    boxShadow: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    color: '#fff',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'rgba(255, 111, 97, 0.3)' : 'transparent',
    color: state.isSelected ? '#fff' : '#fff',
    padding: '10px',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'rgba(255, 111, 97, 0.3)',
    color: '#fff',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#fff',
    backgroundColor: '#ff3d2e',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#ff6f61',
      color: '#fff',
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#fff',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
};

const FreelancerSignup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        profilePic: null,
        resume: null,
        selectedSkills: [],
    });

    const [step, setStep] = useState(1); // Track the current step

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSkillChange = (selectedOptions) => {
        setFormData({
            ...formData,
            selectedSkills: selectedOptions,
        });
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Submit logic goes here
    };

    return (
        <div className="wrapper">
            <form className="form-box signup-form" onSubmit={handleSubmit}>
                

                {step === 1 && (
                    <>
                        <h1 className="h1">Freelancer Sign Up</h1>
                        <div className="input-box">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Username"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                            <FaUser className="icon" />
                        </div>

                        <div className="input-box">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <FaEnvelope className="icon" />
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <FaLock className="icon" />
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                name="confirm-password"
                                placeholder="Confirm Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <FaLock className="icon" />
                        </div>

                        <button type="button" onClick={nextStep}>
                            Next
                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="input-box">
                            <Select
                                className="select-input"
                                isMulti
                                options={options}
                                value={formData.selectedSkills}
                                onChange={handleSkillChange}
                                placeholder="Select your key skills"
                                styles={customStyles}
                            />
                        </div>

                        <div className="input-box file-input">
                            <label className="file-input-label">
                                Upload Profile Picture
                                <input
                                    type="file"
                                    name="profilePic"
                                    onChange={handleChange}
                                    required
                                />
                                <FaFileUpload className="icon" />
                            </label>
                        </div>

                        <div className="input-box file-input">
                            <label className="file-input-label">
                                Upload Resume
                                <input
                                    type="file"
                                    name="resume"
                                    onChange={handleChange}
                                    required
                                />
                                <FaFileUpload className="icon" />
                            </label>
                        </div>


                        <button type="button" onClick={prevStep}>
                            Previous
                        </button>
                        <button type="submit">
                            <Link to="/login">
                                Sign Up
                            </Link>
                        </button>
                    </>
                )}
            </form>
        </div>
    );
};

export default FreelancerSignup;
