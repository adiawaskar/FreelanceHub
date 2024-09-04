import React, { useState } from 'react';
import './Proposals.css';
import { FaFileAlt } from 'react-icons/fa'; // Example icon, you can replace it with any other

const ProposalCard = ({ title, detail, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="proposal-card">
      <div className="proposal-content">
        <div className="proposal-icon">
          <FaFileAlt className="icon" size={40} />
        </div>
        <div className="proposal-info">
          <div className="proposal-title">{title}</div>
          <div className="proposal-detail">{detail}</div>
          <div className="proposal-description">
            <button
              className="description-toggle"
              onClick={() => setShowDescription(!showDescription)}
            >
              {showDescription ? 'Hide Details' : 'Show Details'}
              <span className="toggle-icon">{showDescription ? '▲' : '▼'}</span>
            </button>
            {showDescription && (
              <div className="description-text">{description}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Proposals = () => {
  return (
    <div>
      <ProposalCard
        title="Proposal 1"
        detail="Client: ABC Corp"
        description="This proposal includes a detailed analysis of the client's requirements and our proposed solutions."
      />
      <ProposalCard
        title="Proposal 2"
        detail="Client: XYZ Ltd"
        description="This proposal outlines the project scope, deliverables, timeline, and cost estimates."
      />
      {/* Add more ProposalCard components as needed */}
    </div>
  );
};

export default Proposals;

