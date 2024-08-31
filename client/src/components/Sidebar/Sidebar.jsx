import React from 'react';
import { BiHome, BiBookAlt, BiBookOpen, BiSolidReport, BiStats, BiTask, BiFolder } from 'react-icons/bi';
import './Sidebar.css';

const Sidebar = ({ activeItem, setActiveItem }) => {
  return (
    <div className='menu'>
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>EduFlex</h2>
      </div>

      <div className="menu--list">
        <a
          href="#"
          className={`item ${activeItem === 'Dashboard' ? 'active' : ''}`}
          onClick={() => setActiveItem('Dashboard')}
        >
          <BiHome className="icon" />
          Dashboard
        </a>
        <a
          href="#"
          className={`item ${activeItem === 'Portfolio' ? 'active' : ''}`}
          onClick={() => setActiveItem('Portfolio')}
        >
          <BiTask className="icon" />
          Portfolio
        </a>
        {/* <a
          href="#"
          className={`item ${activeItem === 'Contract' ? 'active' : ''}`}
          onClick={() => setActiveItem('Contract')}
        >
          <BiSolidReport className="icon" />
          Contract
        </a> */}
        <a
          href="#"
          className={`item ${activeItem === 'Certifications' ? 'active' : ''}`}
          onClick={() => setActiveItem('Certifications')}
        >
          <BiBookOpen className="icon" />
          Certifications
        </a>
        {/* <a
          href="#"
          className={`item ${activeItem === 'Proposal' ? 'active' : ''}`}
          onClick={() => setActiveItem('Proposal')}
        >
          <BiStats className="icon" />
          Proposal
        </a> */}
        <a
          href="#"
          className={`item ${activeItem === 'Projects' ? 'active' : ''}`}
          onClick={() => setActiveItem('Projects')}
        >
          <BiFolder className="icon" />
          Projects
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
