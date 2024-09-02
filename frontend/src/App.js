import React,{lazy, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Navbar from './components/Home/Navbar';
import Jobs from './components/Home/Jobs';
// import ProjectDetails from './components/Home/ProjectDetails';
import Messages from './components/Home/Messages';
import Landing from './components/Landing/Landing';
import JobPostingForm from './components/Home/job-posting/JobPostingForm';
// const LoginSignup =lazy(()=> import('./components/Login/components/LoginSignup/LoginSignup'));
import LoginSignup from './components/Login/components/LoginSignup/LoginSignup'
import SignupChoice from './components/Login/components/SignupChoice/SignupChoice'
import FreelancerSignup from './components/Login/components/Freelancer-Signup/Freelancer-Signup'
import HirerSignup from './components/Login/components/Hirer-Signup/Hirer-Signup'
import UserProfile from './components/UserProfile/UserProfile';
const App=()=> {
  const location=useLocation();

  useEffect(()=>{
    if(location.pathname==='/'){
      document.body.className='landing-body';
    }
    else if(location.pathname==='/login'){
      document.body.className='login-body';
    }
    else if(location.pathname==='/signup-choice'){
      document.body.className='signup-choice-body';
      document.documentElement.className='signup-html';
    }
    else if(location.pathname==='/freelancer-signup'){
      document.body.className='freelancer-signup-body';
    }
    else if(location.pathname==='/employer-signup'){
      document.body.className='hirer-signup-body';
    }
    else if(location.pathname==='/form'){
      document.body.className='posting-form-body';
    }
    else if(location.pathname==='/user-profile'){
      document.body.className='user-profile-body';
    }
    else{
      document.body.className='';
    }
    return () =>{
      document.body.className='';
      document.documentElement.className='';
    }
  },[location])


  return (
    <>
      
     <div>
        <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/home" element={<Jobs />} />
        <Route path="/projects" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
        <Route path="/form" element={<JobPostingForm />}/>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup-choice" element={<SignupChoice />} />
        <Route path="/freelancer-signup" element={<FreelancerSignup />} />
        <Route path="/employer-signup" element={<HirerSignup />} />
        <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

