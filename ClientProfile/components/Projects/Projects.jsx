import React from 'react';
import './Projects.css'; // Import the corresponding CSS file

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-gallery">
        {/* Placeholder for project items - images and videos */}
        <div className="project-item">
          <img src={`${process.env.PUBLIC_URL}/project1.jpg`} alt="Project 1" />
          <h3>Project 1</h3>
          <p>Description of the project. (e.g., Developed a full-stack web application using React and Node.js)</p>
        </div>
        <div className="project-item">
          <img src={`${process.env.PUBLIC_URL}/project2.jpg`} alt="Project 2" />
          <h3>Project 2</h3>
          <p>Description of the project. (e.g., Designed and implemented a responsive e-commerce website)</p>
        </div>
        <div className="project-item">
          <video controls width="100%" height="300">
            <source src={`${process.env.PUBLIC_URL}/project-video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>Project 3</h3>
          <p>Description of the project. (e.g., Created a promotional video for a product launch)</p>
        </div>
        {/* Add more project items as needed */}
      </div>
    </div>
  );
};

export default Projects;
