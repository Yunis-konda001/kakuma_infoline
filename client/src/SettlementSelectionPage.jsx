import React from 'react';
import { Link } from 'react-router-dom';
import './SettlementSelectionPage.css';

function SettlementSelectionPage() {
  return (
    <div className="settlement-selection-page">
      <div className="logo">
        Kakuma<span className="highlight">InfoLine</span>
      </div>
      <p className="info-text">
        Information for asylum-seekers, refugees, and migrants in Kakuma Camp.
        Please select your settlement to continue.
      </p>
      <div className="location-buttons">
        <Link to="/home" className="location-button">
          Kakuma
        </Link>
        <button className="location-button disabled" disabled>
          Kalobeyei (Coming Soon)
        </button>
      </div>


    </div>
  );
}

export default SettlementSelectionPage;