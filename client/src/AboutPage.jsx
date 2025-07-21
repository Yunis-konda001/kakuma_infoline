import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import Navbar from './components/Navbar';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="about-page">
      <Navbar />
      <main className="main-content">
        <section className="about-section">
          <h1>{t.about_title}</h1>
          <p>{t.about_mission}</p>
          <h2>{t.our_vision}</h2>
          <p>{t.our_vision_text}</p>
          <h2>{t.what_we_offer}</h2>
          <ul>
            <li>{t.service_directory}</li>
            <li>{t.location_guides}</li>
            <li>{t.updates_alerts}</li>
            <li>{t.contact_information}</li>
          </ul>
          <h2>{t.our_commitment}</h2>
          <p>{t.our_commitment_text}</p>
        </section>
      </main>
      <footer className="footer">
        <p>{t.copyright}</p>
      </footer>
    </div>
  );
}

export default AboutPage;