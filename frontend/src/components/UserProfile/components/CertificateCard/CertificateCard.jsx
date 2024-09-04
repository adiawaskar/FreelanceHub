import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp, XCircle } from 'lucide-react';
import "./CertificateCard.css";

const CertificateCard = ({ certifications, onDelete }) => {
  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleDelete = async (certificationId) => {
    try {
      await fetch(`/api/certifications/${certificationId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Ensure the token is set correctly
        },
      });

      if (onDelete) {
        onDelete(certificationId); // Notify parent to refresh the certifications
      }
    } catch (error) {
      console.error('Error deleting certification:', error);
    }
  };

  return (
    <div>
      {certifications.map((certificate, index) => (
        <div key={certificate._id} className="certificate-card">
          <div className="card-content">
            <div className="card-icon">
              <FileText size={48} className="icon" />
            </div>
            <div className="card-info">
              <h3 className="card-title">{certificate.certification_name}</h3>
              <p className="card-detail">
                <span className="label">Provider:</span> {certificate.certification_institution}
              </p>
              <p className="card-detail">
                <span className="label">Issued:</span> {certificate.issue_date} - <span className="label">Expires:</span> {certificate.expiration_date}
              </p>
              <p className="card-detail">
                <span className="label">Certification ID:</span> {certificate._id}
              </p>
            </div>
            <div className="card-actions">
              <button
                className="delete-button"
                onClick={() => handleDelete(certificate._id)}
              >
                <XCircle size={24} className="delete-icon" />
              </button>
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

