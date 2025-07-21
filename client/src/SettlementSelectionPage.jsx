import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SettlementSelectionPage.css';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function SettlementSelectionPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const handleKakumaClick = (e) => {
    e.preventDefault();
    sessionStorage.setItem('seenLanding', 'true');
    navigate('/home');
  };
  return (
    <div className="landing-hero-bg">
      <div className="landing-overlay" />
      <div className="landing-content">
        <div className="landing-logo">
          Kakuma<span className="highlight">InfoLine</span>
        </div>
        <h1 className="landing-title">{t.info_hero}</h1>
        <p className="landing-desc">{t.select_settlement}</p>
        <div className="landing-location-buttons">
          <button className="landing-location-btn" onClick={handleKakumaClick}>
            {t.kakuma}
          </button>
          <button className="landing-location-btn disabled" disabled>
            {t.kalobeyei}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SettlementSelectionPage;