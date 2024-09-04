import React from 'react';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import './Profile.css';
import userImage from './user.png';
import { BiBook } from 'react-icons/bi';

const courses = [
  {
    title: 'Java Programming',
    duration: '2 Hours',
    icon: <BiBook />,
  },
  {
    title: 'Data Structures and Algorithms',
    duration: '2 Hours',
    icon: <BiBook />,
  },
  {
    title: 'Web Development',
    duration: '2 Hours',
    icon: <BiBook />,
  },
];

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />

      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt="" />
          <h3 className="username">John Doe</h3>
          <span className="profession">Freelancer</span>
        </div>

        <div className="user-courses">
          {courses.map((course, index) => (
            <div className="course" key={index}>
              <div className="course--detail">
                <div className="course--cover">{course.icon}</div>
                <div className="course--name">
                  <h5 className="title">{course.title}</h5>
                  <span className="duration">{course.duration}</span>
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
