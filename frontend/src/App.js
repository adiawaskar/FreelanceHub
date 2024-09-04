import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Jobs from './components/Home/Jobs';
import Messages from './components/Home/Messages';
import Landing from './components/Landing/Landing';
import JobPostingForm from './components/Home/job-posting/JobPostingForm';
import LoginSignup from './components/Login/components/LoginSignup/LoginSignup';
import SignupChoice from './components/Login/components/SignupChoice/SignupChoice';
import FreelancerSignup from './components/Login/components/Freelancer-Signup/Freelancer-Signup';
import HirerSignup from './components/Login/components/Hirer-Signup/Hirer-Signup';
import UserProfile from './components/UserProfile/UserProfile';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const bodyClassMap = {
      '/': 'landing-body',
      '/login': 'login-body',
      '/signup-choice': 'signup-choice-body',
      '/freelancer-signup': 'freelancer-signup-body',
      '/employer-signup': 'hirer-signup-body',
      '/form': 'posting-form-body',
      '/user-profile': 'user-profile-body',
    };

    const className = bodyClassMap[location.pathname] || '';
    document.body.className = className;

    if (location.pathname === '/signup-choice') {
      document.documentElement.className = 'signup-html';
    }

    return () => {
      document.body.className = '';
      document.documentElement.className = '';
    };
  }, [location]);

  return (
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Jobs />} />
          <Route path="/projects" element={<Jobs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/form" element={<JobPostingForm />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup-choice" element={<SignupChoice />} />
          <Route path="/freelancer-signup" element={<FreelancerSignup />} />
          <Route path="/employer-signup" element={<HirerSignup />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </div>
  );
}

export default App;
