import React from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import './Profile.css';
import userImage from './user.png';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />
      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt="User" />
          <h3 className="username">Goldmann</h3>
          <span className="profession">IT Company</span>
        </div>
        <button className="add-job-button">Add Job</button>
      </div>
    </div>
  );
};

export default Profile;
