import React, { useState } from 'react';
import { FileText, ChevronDown, ChevronUp } from 'lucide-react';
import "./Card.css";

const Card = ({ title, provider, issueDate, expiryDate, certificationId, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="certificate-card">
      <div className="card-content">
        <div className="card-icon">
          <FileText size={48} className="icon" />
        </div>
        <div className="card-info">
          <h3 className="card-title">INTERNATIONAL MATHEMATICS OLYMPAID</h3>
          <p className="card-detail"><span className="label">Provider:</span> SOF</p>
          <p className="card-detail"><span className="label">Issued:</span> 23/23/2344 - <span className="label">Expires:</span> 23/43/2342</p>
          <p className="card-detail"><span className="label">Certification ID:</span> 2342355</p>
        </div>
      </div>
      <div className="card-description">
        <button 
          className="description-toggle"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? 'Hide description' : 'Show description'}
          {showDescription ? <ChevronUp className="toggle-icon" /> : <ChevronDown className="toggle-icon" />}
        </button>
        {showDescription && (
          <p className="description-text">{description}</p>
        )}
      </div>
    </div>
  );
};

export default Card;