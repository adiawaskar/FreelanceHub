import React from 'react';
import { Link } from 'react-router-dom';
import './SignupChoice.css';

function SignupChoice() {
  return (
    <div className="signup-choice-container">
      <h1>Choose Your Account Type</h1>
      <div className="button-container">
        <Link to="/freelancer-signup" className="signup-button freelancer">
          Sign up as Freelancer
        </Link>
        <Link to="/employer-signup" className="signup-button employer">
          Sign up as Employer
        </Link>
      </div>
    </div>
  );
}

export default SignupChoice;