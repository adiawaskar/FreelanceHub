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
          DashBoard
        </Link>
        <Link to="/portfolio" className="item">
          <BiTask className="icon" />
          Portfolio
        </Link>
        <Link to="/contract" className="item">
          <BiSolidReport className="icon" />
          Contract
        </Link>
        <Link to="/certifications" className="item">
          <BiBookOpen className="icon" />
          Certifications
        </Link>
        <Link to="/proposal" className="item">
          <BiStats className="icon" />
          Proposal
        </Link>
        <Link to="/projects" className="item">
          <BiFolder className="icon" />
          Projects
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
