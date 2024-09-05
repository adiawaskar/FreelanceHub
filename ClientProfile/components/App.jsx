import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Profile from './components/Profile/Profile';
// import PortfolioPage from './components/Portfolio/Portfolio';
import Projects from './components/Projects/Projects'; 
// import Certifications from './components/Certifications/Certificatlions'

import './App.css';

function App() {
  return (
    <Router>
      <div className='dashboard'>
        <Sidebar />
        <div className="dashboard--content">
          <Routes>
            <Route path="/" element={<Content />} />
        
            <Route path="/projects" element={<Projects />} /> 
          
            
          </Routes>
          <Profile />
        </div>
      </div>
    </Router>
  );
}

export default App;
