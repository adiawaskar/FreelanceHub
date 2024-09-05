import React from 'react';
import { BiHome, BiBookAlt, BiBookOpen, BiSolidReport, BiStats, BiTask, BiFolder, BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Sidebar.css';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleHomeNavigation = () => {
    navigate('/home'); // Navigate to the home page
  };

  return (
    <div className='menu'>
      <div className="sidebarLogo">
        <BiArrowBack className="back-icon" onClick={handleHomeNavigation} />
        {/* <BiBookAlt className="sidebarLogo-icon" />
        <h2>FreeLanceHub</h2> */}
      </div>

      <div className="menu--list">
        <a
          href="#"
          className={`item ${activeItem === 'Dashboard' ? 'activ' : ''}`}
          onClick={() => setActiveItem('Dashboard')}
        >
          <BiHome className="icon" />
          Dashboard
        </a>
        <a
          href="#"
          className={`item ${activeItem === 'Portfolio' ? 'activ' : ''}`}
          onClick={() => setActiveItem('Portfolio')}
        >
          <BiTask className="icon" />
          Portfolio
        </a>
        {/* <a
          href="#"
          className={`item ${activeItem === 'Contract' ? 'activ' : ''}`}
          onClick={() => setActiveItem('Contract')}
        >
          <BiSolidReport className="icon" />
          Contract
        </a> */}
        <a
          href="#"
          className={`item ${activeItem === 'Certifications' ? 'activ' : ''}`}
          onClick={() => setActiveItem('Certifications')}
        >
          <BiBookOpen className="icon" />
          Certifications
        </a>
        <a
          href="#"
          className={`item ${activeItem === 'Proposals' ? 'activ' : ''}`}
          onClick={() => setActiveItem('Proposals')}
        >
          <BiStats className="icon" />
          Proposal
        </a>
        <a
          href="#"
          className={`item ${activeItem === 'Projects' ? 'activ' : ''}`}
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

