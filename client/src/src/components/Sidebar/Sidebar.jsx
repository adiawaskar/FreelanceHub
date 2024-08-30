import React from 'react';
import {BiHome, BiBookAlt, BiBookOpen, BiSolidReport, BiStats, BiTask, BiFolder} from 'react-icons/bi';
import './Sidebar.css';
const Sidebar = () => {
  return (
    <div className='menu'>
        <div className="logo">
            <BiBookAlt className="logo-icon"/>
            <h2>EduFlex</h2>
        </div>

        <div className="menu--list">
            <a href="#" className="item active">
                <BiHome className="icon"/>
                DashBoard
            </a>
            <a href="#" className="item">
                <BiTask className="icon"/>
                Portfolio
            </a>
            <a href="#" className="item">
                <BiSolidReport className="icon"/>
                Contract
            </a>
            <a href="#" className="item">
                <BiBookOpen className="icon"/>
                Certifications
            </a>
            <a href="#" className="item">
                <BiStats className="icon"/>
                Proposal
            </a>
            <a href="#" className="item">
                <BiFolder className="icon"/>
                Projects
            </a>
        </div>
    </div>
  )
}

export default Sidebar