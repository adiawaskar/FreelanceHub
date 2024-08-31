import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">FreelanceHub</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><Link to="/login" className="no-underline">Login</Link></li>
          <li><Link to="/signup-choice">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
