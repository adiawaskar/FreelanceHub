import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Jobs from './components/Jobs';
import ProjectDetails from './components/ProjectDetails';
import Messages from './components/Messages';
import JobPostingForm from './components/job-posting/JobPostingForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/projects" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/form" element={<JobPostingForm />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;