import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Profile from './components/Profile/Profile';
import PortfolioPage from './components/Portfolio/Portfolio';
import Projects from './components/Projects/Projects'; // Import the Projects component
import './App.css';

function App() {
  return (
    <Router>
      <div className='dashboard'>
        <Sidebar />
        <div className="dashboard--content">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/projects" element={<Projects />} /> {/* Route for Projects */}
          </Routes>
          <Profile />
        </div>
      </div>
    </Router>
  );
}

export default App;
