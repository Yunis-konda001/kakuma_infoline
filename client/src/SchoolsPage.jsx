import React from 'react';
import './shared-info-page.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function SchoolsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const schools = [
    {
      name: "Vision Secondary School",
      location: "Kakuma 2, opposite IOM",
      services: "Mixed day school, KCSE preparation",
      type: "Secondary School"
    },
    {
      name: "Somali Bantu Secondary School",
      location: "Kakuma 2",
      services: "Mixed day school, KCSE preparation",
      type: "Secondary School"
    },
    {
      name: "Greenlight Secondary School",
      location: "Kakuma 2, near Furaha Center 2",
      services: "Mixed day school, KCSE preparation",
      type: "Secondary School"
    },
    {
      name: "Kakuma Refugee Secondary School (KRSS)",
      location: "Kakuma 1, opposite Don Bosco",
      services: "Mixed day school, KCSE preparation",
      type: "Secondary School"
    },
    {
      name: "Blue State Secondary School",
      location: "Kakuma 2, opposite Clinic 5",
      services: "Mixed day school, KCSE preparation",
      type: "Secondary School"
    },
    {
      name: "Lifeworks Tumaini Girls Secondary School",
      location: "Kalimchuch, opposite Ato Rite",
      services: "Girls boarding school, KCSE preparation",
      type: "Girls Boarding School"
    },
    {
      name: "Star Light Secondary School",
      location: "Kakuma 1, opposite Arrupe Center",
      services: "Mixed day school, KCSE preparation",
      type: "Secondary School"
    }
  ];

  return (
    <div className="info-page">
      <Navbar />

      <main className="main-content">
        <section className="info-section">
          <div className="section-header primary">
            <h1><i className="fas fa-graduation-cap"></i> {t.schools}</h1>
            <p>Find educational opportunities and schools in Kakuma Refugee Camp</p>
          </div>
          
          <div className="section-content">
            <p className="intro-text">
              Below are the schools operating in Kakuma, their locations, and services provided. 
              All schools offer quality education to help refugees build their future.
            </p>

            <div className="cards-grid">
              {schools.map((school, index) => (
                <div key={index} className="info-card">
                  <h3 className="card-title">
                    <i className="fas fa-school"></i>
                    {school.name}
                  </h3>
                  <div className="card-type">{school.type}</div>
                  <div className="card-info">
                    <div className="info-item">
                      <i className="fas fa-map-marker-alt info-icon"></i>
                      <div>
                        <div className="info-label">Location</div>
                        <div className="info-text">{school.location}</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-school info-icon"></i>
                      <div>
                        <div className="info-label">Type</div>
                        <div className="info-text">{school.type}</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-book info-icon"></i>
                      <div>
                        <div className="info-label">Services</div>
                        <div className="info-text">{school.services}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-info">
              <h3><i className="fas fa-phone"></i> Need More Information?</h3>
              <p>Contact UNHCR Helpline or school offices for exact details, enrollment procedures, and requirements.</p>
              <a href="tel:1517" className="helpline">
                <i className="fas fa-phone"></i>
                Call UNHCR Helpline: 1517
              </a>
            </div>

            <div className="note">
              <i className="fas fa-info-circle"></i>
              <strong>Note:</strong> Locations use camp zones and landmarks for easy navigation. 
              Contact schools directly for the most current information about enrollment, schedules, and requirements.
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{t.copyright}</p>
      </footer>
    </div>
  );
}

export default SchoolsPage;