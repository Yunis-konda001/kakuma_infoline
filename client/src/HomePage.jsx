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
      </section>

      <section className="ask-question-section">
        <h2>{t.ask_question}</h2>
        <p>{t.support_platforms}</p>
        <div className="platform-buttons">
          <a href="#" className="platform-button facebook">
            <i className="fab fa-facebook"></i> {t.facebook} <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
          <a href="https://wa.me/+254704273083" className="platform-button whatsapp">
            <i className="fab fa-whatsapp"></i> {t.whatsapp} <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
          <a href="#" className="platform-button facebook-messenger">
            <i className="fab fa-facebook-messenger"></i> {t.messenger} <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
          <a href="#" className="platform-button telegram">
            <i className="fab fa-telegram"></i> {t.telegram} <i className="fas fa-arrow-up-right-from-square"></i>
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