import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">FreelanceHub</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#signup">Signup</a></li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
