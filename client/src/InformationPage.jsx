import React from 'react';
import { Link } from 'react-router-dom';
import './InformationPage.css';
import './FieldPostOffices.css';
import Navbar from './components/Navbar';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function InformationPage() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="information-page">
      <Navbar />
      <section className="info-section">
        <h1>{t.information}</h1>
        <p>{t.information} for asylum-seekers, refugees, and migrants in Kakuma about procedures, rights and services</p>
        <div className="info-grid">
          <Link to="/arrival-in-kakuma" className="info-card">
            <i className="fas fa-person-walking"></i>
            <span>{t.arrival_in_kakuma}</span>
          </Link>
          <Link to="/hospitals-clinics" className="info-card">
            <i className="fas fa-hospital"></i>
            <span>{t.hospitals_clinics}</span>
          </Link>
          <Link to="/schools" className="info-card">
            <i className="fas fa-school"></i>
            <span>{t.schools}</span>
          </Link>
          <Link to="/unhcr-services" className="info-card">
            <i className="fas fa-hands-helping"></i>
            <span>{t.unhcr_services}</span>
          </Link>
          <Link to="/field-post-offices" className="info-card">
            <i className="fas fa-mail-bulk"></i>
            <span>{t.field_post_offices}</span>
          </Link>
          <Link to="/ngo-offices" className="info-card">
            <i className="fas fa-building"></i>
            <span>{t.ngo_offices}</span>
          </Link>
          <Link to="/scholarships" className="info-card">
            <i className="fas fa-graduation-cap"></i>
            <span>{t.scholarships}</span>
          </Link>
        </div>
      </section>
      <footer className="footer">
        <p>{t.copyright}</p>
      </footer>
    </div>
  );
}

export default InformationPage;