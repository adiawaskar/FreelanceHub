import React, { useEffect, useState } from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import './Profile.css';
import { BiBook } from 'react-icons/bi';

const Profile = () => {
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
    <div className="profile">
      <ProfileHeader />

      <div className="user--profile">
        <div className="user--detail">
          {/* Display profile image from the backend */}
          <img src={userDetails.profile_image} alt="Profile" />
          <h3 className="username">{userDetails.name}</h3>
          <span className="profession">Freelancer</span>
        </div>

        {/* Display skills dynamically */}
        <div className="user-courses">
          {userDetails.skills.map((skill, index) => (
            <div className="course" key={index}>
              <div className="course--detail">
                <div className="course--cover"><BiBook /></div>
                <div className="course--name">
                  <h5 className="title">{skill}</h5>
                  <span className="duration">Skill</span>
                </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <div className="logout-container">
          <button className="logout-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
