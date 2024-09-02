import React from 'react';
import { BiBuilding, BiLogoAndroid, BiLogoHtml5, BiSearch, BiNotification } from 'react-icons/bi';
import './Projects.css';


const Projects = () => {

    const projectList = [
        {
          title: 'Project 1',
          description: 'A web development project using HTML5, CSS, and JavaScript.',
          techStack: ['HTML5', 'CSS', 'JavaScript'],
          icon: <BiLogoHtml5 />,
        },
        {
          title: 'Project 2',
          description: 'An Android app development project with Kotlin.',
          techStack: ['Kotlin', 'Android Studio'],
          icon: <BiLogoAndroid />,
        },
        {
          title: 'Project 3',
          description: 'A UX & UI design project focusing on user experience and interface.',
          techStack: ['Figma', 'Adobe XD'],
          icon: <BiBuilding />,
        },
        {
          title: 'Project 4',
          description: 'A responsive website built with modern web technologies.',
          techStack: ['HTML5', 'CSS', 'React'],
          icon: <BiLogoHtml5 />,
        },
        {
          title: 'Project 5',
          description: 'An Android app featuring user authentication and database integration.',
          techStack: ['Kotlin', 'Firebase'],
          icon: <BiLogoAndroid />,
        },
        {
          title: 'Project 6',
          description: 'A comprehensive UX & UI project with a focus on usability testing.',
          techStack: ['Sketch', 'InVision'],
          icon: <BiBuilding />,
        },
    ];


  return (
    <div className="projects">
        <div className="project--header">
            <h1 className="header--title">Projects</h1>
            <div className="projects--activity">
            <div className="projects--search-box">
            <input type="text" placeholder="Search anything" />
            <BiSearch className="icon" />
            </div>
      </div>
        </div>
        <div className="projects--container">
            {projectList.map((item) => (
            <div className="projects--card" key={item.title}>
                <div className="projects--card-cover">{item.icon}</div>
                <div className="projects--card-title">
                <h2>{item.title}</h2>
                <p className="projects--card-description">{item.description}</p>
                    <ul className="projects--card-techstack">
                    {item.techStack.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                    </ul>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Projects