import React from 'react';

import { Link } from 'react-router-dom';
import './HomePage.css'; // We'll create this CSS file next
import Navbar from './components/Navbar';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function HomePage() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="home-page">
      <Navbar />

      <section className="hero-section">
        <h1>{t.info_hero}</h1>
        <p>Your trusted source for essential information, services, and opportunities in Kakuma Refugee Camp</p>
      </section>

      <section className="quick-access-section">
        <h2>Quick Access</h2>
        <div className="quick-access-grid">
          <Link to="/information" className="quick-access-card">
            <i className="fas fa-info-circle"></i>
            <h3>{t.information}</h3>
            <p>Find essential services and resources</p>
          </Link>
          <Link to="/arrival-in-kakuma" className="quick-access-card">
            <i className="fas fa-map-marked-alt"></i>
            <h3>{t.arrival_in_kakuma}</h3>
            <p>New to Kakuma? Start here</p>
          </Link>
          <Link to="/hospitals-clinics" className="quick-access-card">
            <i className="fas fa-hospital"></i>
            <h3>{t.hospitals_clinics}</h3>
            <p>Healthcare services and locations</p>
          </Link>
          <Link to="/schools" className="quick-access-card">
            <i className="fas fa-graduation-cap"></i>
            <h3>{t.schools}</h3>
            <p>Education opportunities</p>
          </Link>
          <Link to="/unhcr-services" className="quick-access-card">
            <i className="fas fa-hands-helping"></i>
            <h3>{t.unhcr_services}</h3>
            <p>UNHCR support and assistance</p>
          </Link>
          <Link to="/scholarships" className="quick-access-card">
            <i className="fas fa-award"></i>
            <h3>{t.scholarships}</h3>
            <p>Educational funding opportunities</p>
          </Link>
        </div>
      </section>

      <section className="ask-question-section">
        <h2>{t.ask_question}</h2>
        <p>{t.support_platforms}</p>
        <div className="platform-buttons">
          <a href="#" className="platform-button facebook">
            <i className="fab fa-facebook"></i>
            <span>{t.facebook}</span>
            <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
          <a href="https://wa.me/+254704273083" className="platform-button whatsapp">
            <i className="fab fa-whatsapp"></i>
            <span>{t.whatsapp}</span>
            <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
          <a href="#" className="platform-button telegram">
            <i className="fab fa-telegram"></i>
            <span>{t.telegram}</span>
            <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </section>
      
      <footer className="footer">
        <p>{t.copyright}</p>
      </footer>
    </div>
  );
}

export default HomePage;