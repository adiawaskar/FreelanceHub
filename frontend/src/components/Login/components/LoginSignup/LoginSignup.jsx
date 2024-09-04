import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/v1/freelancers/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include', // important for sending/receiving cookies
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Save tokens or user data if needed, for example:
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      // Redirect to home page or another page
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
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
          {error && <p className="error-message">{error}</p>} {/* Display error if any */}
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
          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account?  
              <Link
                to="/signup-choice"
                style={linkStyle}
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
