import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form Data Submitted:', formData);
  };

  //do not touch these styles
  const linkStyle = {
    color: 'white',
    fontWeight: 600,
    textDecoration: 'none',
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <Link to="/forgot-password"> Forgot Password</Link>
          </div>
          <button type="submit"><Link to="/home">Login</Link></button>

          <div className="register-link">
            <p>Don't have an account?  <Link
              to="/signup-choice"
              style={linkStyle}
            >
              Sign up
            </Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
