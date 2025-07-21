import React from 'react';
import { Link } from 'react-router-dom';
import './SettlementSelectionPage.css';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function SettlementSelectionPage() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="settlement-selection-page">
      <div className="logo">
        Kakuma<span className="highlight">InfoLine</span>
      </div>
      <p className="info-text">
        {t.info_hero}<br />{t.select_settlement}
      </p>
      <div className="location-buttons">
        <Link to="/home" className="location-button">
          {t.kakuma}
        </Link>
        <button className="location-button disabled" disabled>
          {t.kalobeyei}
        </button>
      </div>
    </div>
  );
}

export default SettlementSelectionPage;