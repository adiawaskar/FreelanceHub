import React from 'react';
import { BiHome, BiBookAlt, BiBookOpen, BiSolidReport, BiStats, BiTask, BiFolder } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='menu'>
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>FreelanceHub</h2>
      </div>

      <div className="menu--list">
        <Link to="/" className="item active">
          <BiHome className="icon" />
          Information
        </Link>
        <Link to="/portfolio" className="item">
          <BiTask className="icon" />
          Your listings
        </Link>
        <Link to="/proposal" className="item">
          <BiStats className="icon" />
          Applications
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
