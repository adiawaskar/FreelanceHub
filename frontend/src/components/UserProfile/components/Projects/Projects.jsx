import React, { useEffect, useState } from 'react';
import './Projects.css';
import { BiLogoHtml5, BiSearch } from 'react-icons/bi';

const Projects = () => {
    const [showForm, setShowForm] = useState(false);
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        project_name: '',
        project_description: '',
        project_url: ''
    });

    // Fetching project data from backend
useEffect(() => {
    fetch('http://localhost:8000/api/v1/freelancers/projects', { credentials: 'include' }) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Ensure the response contains the 'data' field where the portfolio array is located
            if (data && data.data && Array.isArray(data.data)) {
                setProjects(data.data); // Set projects with the actual portfolio array
            } else {
                console.error("Fetched data does not contain the expected portfolio array");
            }
        })
        .catch(error => {
            console.error("There was an error fetching the projects!", error);
        });
}, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first file selected

        if (file) {
            // Validate file size and type
            if (file.size > 5 * 1024 * 1024) { // Limit file size to 5MB
                alert("File size exceeds 5MB. Please select a smaller file.");
                return;
            }

            if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) { // Allowed file types
                alert("Invalid file type. Please select a JPEG, PNG, or GIF image.");
                return;
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Prepare form data including file upload
        const formDataToSend = new FormData();
        formDataToSend.append('project_name', formData.project_name);
        formDataToSend.append('project_description', formData.project_description);
        formDataToSend.append('project_url', formData.project_url);
    
        // Append file if any
        const fileInput = document.getElementById('images');
        if (fileInput.files.length > 0) {
            formDataToSend.append('images', fileInput.files[0]);
        }
    
        fetch('http://localhost:8000/api/v1/freelancers/projects', {
            method: 'POST',
            body: formDataToSend,
            credentials: 'include',  // Include credentials if necessary
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Ensure the response contains the 'data' field where the portfolio array is located
            if (data && data.data && Array.isArray(data.data)) {
                setProjects(data.data); // Update the projects with the entire updated portfolio array
            } else {
                console.error("Response does not contain the expected portfolio data");
            }
            setShowForm(false);  // Close form after submission
        })
        .catch(error => {
            console.error("There was an error adding the project!", error);
        });
    };
    

    return (
        <div className="projects-page">
            <div className={showForm ? 'blur-background' : ''}>
                <div className="projects--header">
                    <h1 className="header--title">Projects</h1>
                    <div className="projects--activity">
                        <div className="projects--search-box">
                            <input type="text" placeholder="Search anything" />
                            <BiSearch className="icon" />
                        </div>
                    </div>
                </div>

                <div className="projects--container">
    {projects.length === 0 ? (
        <div className="no-projects-message">
            <h2>No projects yet!</h2>
        </div>
    ) : (
        projects.map((item) => (
            <div className="projects--card" key={item._id}>
                <div className="projects--card-cover">
                    {item.images && item.images.length > 0 ? (
                        <img src={item.images[0].image_url} alt="Project" className="project-image" />
                    ) : (
                        <BiLogoHtml5 /> // Fallback icon if no image is available
                    )}
                </div>
                <div className="projects--card-title">
                    <h2>{item.project_name}</h2>
                    <p className="projects--card-description">{item.project_description}</p>
                    <ul className="projects--card-techstack">
                        {item.techStack && item.techStack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))
    )}
</div>


                <button onClick={() => setShowForm(true)} className="add-project-button">Add Project</button>
            </div>

            {showForm && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="modal-close" onClick={() => setShowForm(false)}>✖</button>
                        <form className="add-project-form" onSubmit={handleSubmit}>
                            <h2>Add a New Project</h2>
                            <div className="form-group">
                                <label htmlFor="project_name">Project Name:</label>
                                <input
                                    type="text"
                                    name="project_name"
                                    id="project_name"
                                    placeholder="Enter project name"
                                    value={formData.project_name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="project_description">Project Description:</label>
                                <textarea
                                    name="project_description"
                                    id="project_description"
                                    placeholder="Enter project description"
                                    value={formData.project_description}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="project_url">Project URL (optional):</label>
                                <input
                                    type="text"
                                    name="project_url"
                                    id="project_url"
                                    placeholder="Enter project URL"
                                    value={formData.project_url}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="images">Upload Project Image:</label>
                                <input
                                    type="file"
                                    name="images"
                                    id="images"
                                    onChange={handleFileChange}
                                />
                            </div>
                            <button type="submit" className="add-project-button">Add Project</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
