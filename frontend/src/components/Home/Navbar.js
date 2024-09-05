import React from "react";
import Logo from './logo.png';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function Navbar() {
  const [userDetails, setUserDetails] = useState({
    profile_image: '',
    name: '',
    skills: [],
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/freelancers/me', {
          method: 'GET',
          credentials: 'include', // Important for sending cookies
        });
        const data = await response.json();
        setUserDetails({
          profile_image: data.data.profile_image,
          name: data.data.name,
          skills: data.data.skills,
        });
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);
  return (

    <div className="headerr">
      <nav className="nav-bar">
        <div className="logoo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="navlinks">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/messages">Messages</Link></li>
        </ul>
        <span className="flex justify-center text-white">
          <span className="py-2 hover:bg-green-200 hover:bg-opacity-15 rounded-md">
            <img src={userDetails.profile_image} className="h-8 rounded-s-full" alt="Profile" />
          </span>
          <span className="px-2 py-2 mt-1">
            <ul className="navlinks">
              <li><Link to="/user-profile">Your Profile</Link></li>
            </ul>
          </span>
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
