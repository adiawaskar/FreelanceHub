import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const LoginSignup = () => {

  const [action, setAction] = useState('');
  
  const registerLink = () => {
    setAction(' active');
  };
  const loginLink = () => {
    setAction('');
  };


  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder='Email' required/>
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon'/>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#"> Forgot Password</a>
          </div>
          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#" onClick={registerLink}>Sign Up</a></p>
          </div>
        </form>
      </div>
      <div className="form-box signup">
        <form action="">
          <h1>Sign Up</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required/>
            <FaUser className='icon'/>
          </div>
          <div className="input-box">
            <input type="email" placeholder='Email' required/>
            <FaEnvelope className='icon'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon'/>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" />Agree terms and conditions.</label>
          </div>
          <button type="submit">Sign Up</button>

          <div className="register-link">
            <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginSignup;