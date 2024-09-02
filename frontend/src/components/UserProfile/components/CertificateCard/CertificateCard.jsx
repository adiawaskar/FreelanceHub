import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';
import "./CertificateCard.css";

const CertificateCard = () => {
  const [showDescription, setShowDescription] = useState({});

  const certificates = [
    {
      title: 'INTERNATIONAL MATHEMATICS OLYMPIAD',
      provider: 'SOF',
      issueDate: '23/23/2344',
      expiryDate: '23/43/2342',
      certificationId: '2342355',
      description: 'This certificate was awarded for excellence in Mathematics in the International Mathematics Olympiad.',
    },
    {
      title: 'Certified Java Developer',
      provider: 'Oracle',
      issueDate: '01/15/2022',
      expiryDate: '01/15/2025',
      certificationId: '1234567',
      description: 'Certification in Java programming language, covering all core and advanced Java concepts.',
    },
    {
      title: 'AWS Certified Solutions Architect',
      provider: 'Amazon Web Services',
      issueDate: '08/10/2021',
      expiryDate: '08/10/2024',
      certificationId: '7654321',
      description: 'Certification in designing and deploying scalable, highly available, and fault-tolerant systems on AWS.',
    },
    {
      title: 'Google Data Analytics Professional Certificate',
      provider: 'Google',
      issueDate: '03/12/2023',
      expiryDate: '03/12/2026',
      certificationId: '9876543',
      description: 'Certification in data analytics, covering data cleaning, analysis, and visualization using various tools.',
    },
  ];

  const toggleDescription = (index) => {
    setShowDescription((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div>
      {certificates.map((certificate, index) => (
        <div key={index} className="certificate-card">
          <div className="card-content">
            <div className="card-icon">
              <FileText size={48} className="icon" />
            </div>
            <div className="card-info">
              <h3 className="card-title">{certificate.title}</h3>
              <p className="card-detail"><span className="label">Provider:</span> {certificate.provider}</p>
              <p className="card-detail"><span className="label">Issued:</span> {certificate.issueDate} - <span className="label">Expires:</span> {certificate.expiryDate}</p>
              <p className="card-detail"><span className="label">Certification ID:</span> {certificate.certificationId}</p>
            </div>
          </div>
          <div className="card-description">
            <button 
              className="description-toggle"
              onClick={() => toggleDescription(index)}
            >
              {showDescription[index] ? 'Hide description' : 'Show description'}
              {showDescription[index] ? <ChevronUp className="toggle-icon" /> : <ChevronDown className="toggle-icon" />}
            </button>
            {showDescription[index] && (
              <p className="description-text">{certificate.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateCard;
