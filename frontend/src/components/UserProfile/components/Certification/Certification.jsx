// // Certification.jsx
// import React, { useState, useEffect } from 'react';
// import CertificateCard from '../CertificateCard/CertificateCard';
// import './Certification.css';

// const Certification = () => {
//   const [certificates, setCertificates] = useState([]);
//   const [newCert, setNewCert] = useState({
//     certification_name: '',
//     certification_institution: '',
//     issue_date: '',
//     expiration_date: '',
//     certificate_url: null,
//   });

//   useEffect(() => {
//     fetchCertifications();
//   }, []);

//   const fetchCertifications = async () => {
//     try {
//       const response = await fetch('/api/certifications'); // Adjust the endpoint as needed
//       const data = await response.json();
//       setCertificates(data.data); // Assuming `data` contains the certifications
//     } catch (error) {
//       console.error('Error fetching certifications:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'certificate_url') {
//       setNewCert((prev) => ({ ...prev, certificate_url: files[0] }));
//     } else {
//       setNewCert((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     for (const [key, value] of Object.entries(newCert)) {
//       formData.append(key, value);
//     }

//     try {
//       await fetch('/api/certifications', { // Adjust the endpoint as needed
//         method: 'POST',
//         body: formData,
//       });
//       fetchCertifications(); // Refresh the certificates after adding a new one
//     } catch (error) {
//       console.error('Error adding certification:', error);
//     }
//   };

//   const handleDelete = async (certificationId) => {
//     try {
//       await fetch(`/api/certifications/${certificationId}`, { // Adjust the endpoint if needed
//         method: 'DELETE',
//         headers: {
//           'Authorization': `Bearer ${localStorage.getItem('token')}`, // Add token if required
//         },
//       });
//       fetchCertifications(); // Refresh the certifications after deletion
//     } catch (error) {
//       console.error('Error deleting certification:', error);
//     }
//   };
  

//   return (
//     <div className="content">
//       <form onSubmit={handleSubmit} className="add-cert-form">
//         <input type="text" name="certification_name" placeholder="Certification Name" onChange={handleChange} required />
//         <input type="text" name="certification_institution" placeholder="Institution" onChange={handleChange} required />
//         <input type="date" name="issue_date" placeholder="Issue Date" onChange={handleChange} required />
//         <input type="date" name="expiration_date" placeholder="Expiration Date" onChange={handleChange} required />
//         <input type="file" name="certificate_url" onChange={handleChange} required />
//         <button type="submit">Add Certification</button>
//       </form>

//       <CertificateCard certifications={certificates} onDelete={handleDelete} />
//     </div>
//   );
// };

// export default Certification;

import React, { useState, useEffect } from 'react';
import CertificateCard from '../CertificateCard/CertificateCard';
import './Certification.css';

const Certification = () => {
  const [certificates, setCertificates] = useState([]);
  const [newCert, setNewCert] = useState({
    certification_name: '',
    certification_institution: '',
    issue_date: '',
    expiration_date: '',
    certificate_url: null,
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchCertifications();
  }, []);

  const fetchCertifications = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/freelancers/certifications', {
        credentials: 'include', // Include cookies with the request
      });
      const data = await response.json();
      setCertificates(data.data); // Assuming `data` contains the certifications
    } catch (error) {
      console.error('Error fetching certifications:', error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'certificate_url') {
      setNewCert((prev) => ({ ...prev, certificate_url: files[0] }));
    } else {
      setNewCert((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const [key, value] of Object.entries(newCert)) {
      formData.append(key, value);
    }
  
    try {
      await fetch('http://localhost:8000/api/v1/freelancers/certifications', {
        method: 'POST',
        body: formData,
        credentials: 'include', // Include cookies with the request
      });
      setShowForm(false); // Hide the form after successful submission
      fetchCertifications(); // Refresh the certificates after adding a new one
    } catch (error) {
      console.error('Error adding certification:', error);
    }
  };
  

  const handleDelete = async (certificationId) => {
    try {
      await fetch(`/api/certifications/${certificationId}`, { // Adjust the endpoint if needed
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Add token if required
        },
      });
      fetchCertifications(); // Refresh the certifications after deletion
    } catch (error) {
      console.error('Error deleting certification:', error);
    }
  };

  return (
    <div className="certification-container">
      <h1 className="certification-header">Certifications</h1>
      <button onClick={() => setShowForm(prev => !prev)} className="certification-toggle-button">
        {showForm ? 'Cancel' : 'Add Certification'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="certification-form">
          <input 
            type="text" 
            name="certification_name" 
            placeholder="Certification Name" 
            onChange={handleChange} 
            required 
            className="certification-input"
          />
          <input 
            type="text" 
            name="certification_institution" 
            placeholder="Institution" 
            onChange={handleChange} 
            required 
            className="certification-input"
          />
          <input 
            type="date" 
            name="issue_date" 
            placeholder="Issue Date" 
            onChange={handleChange} 
            required 
            className="certification-input"
          />
          <input 
            type="date" 
            name="expiration_date" 
            placeholder="Expiration Date" 
            onChange={handleChange} 
            required 
            className="certification-input"
          />
          <input 
            type="file" 
            name="certificate_url" 
            onChange={handleChange} 
            required 
            className="certification-file-input"
          />
          <button type="submit" className="certification-submit-button">Add Certification</button>
        </form>
      )}

      {certificates.length === 0 ? (
        <p className="certification-no-data">No certifications available.</p>
      ) : (
        <CertificateCard certifications={certificates} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Certification;


