import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Card = () => {

  // Define profileViews and domainWorkData within the component
  const profileViews = 1200; // Example data

  // Example data for the bar graph
  const domainWorkData = {
    labels: ['Blockchain', 'Web Dev', 'UI/UX', 'Java', 'Others'],
    datasets: [
      {
        label: 'Hours Worked',
        data: [300, 500, 200, 150, 100],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="portfolio-header">
        <h1>Goldmann</h1>
        <p>Web Developer | Designer | Freelancer</p>
      </header>
      
      {/* Job Success and Hours Worked */}
      <section className="stats-section">
        <div className="job-success">
          <h2>Job Success</h2>
          <div className="stars">
            ⭐⭐⭐⭐
          </div>
        </div>
        <div className="hours-worked">
          <h2>Hours Worked</h2>
          <p>1500+ hours</p>
        </div>
      </section>

      {/* Basic Details Section */}
      <section className="basic-details-section">
        <h2>Basic Details</h2>
        <div className="basic-details">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Date of Birth:</strong> January 1, 1990</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Summary:</strong> I am a passionate web developer with over 5 years of experience in creating dynamic and responsive websites. My expertise lies in front-end development with a keen eye for design and user experience. I am also proficient in back-end technologies, making me a versatile developer.</p>
          <p><strong>Address:</strong> 123 Main Street, Anytown, Country</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        <ul className="education-list">
          <li>Bachelor's in Information Technology - Veermata Jijabai Technological Institute</li>
          <li>Masters in Development - ABC Institute</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Node.js</li>
        </ul>
      </section>

      {/* Profile Statistics Section */}
      <section className="profile-statistics-section">
        <h2>Profile Statistics</h2>
        <div className="profile-views">
          <h3><i className="fas fa-eye"></i> Profile Views</h3>
          <p>{profileViews}</p>
        </div>
        <div className="domain-work-graph">
          <h3>Domain Work</h3>
          <Bar data={domainWorkData} />
        </div>
      </section>

      
    </div>
  );
};

export default Card;
