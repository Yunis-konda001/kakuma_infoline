import React from 'react';
import './shared-info-page.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function NGOOfficesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const ngos = [
    {
      name: 'International Rescue Committee (IRC)',
      location: 'Kakuma town, Inside LWF compound',
      hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
      services: 'Healthcare, nutrition, women\'s centers, emergency response',
      type: 'Health & Emergency',
      icon: 'fas fa-heart'
    },
    {
      name: 'Lutheran World Federation (LWF)',
      location: 'Kakuma town, Inside LWF compound',
      hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
      services: 'Primary education, child protection, livelihoods',
      type: 'Education & Protection',
      icon: 'fas fa-graduation-cap'
    },
    {
      name: 'Danish Refugee Council (DRC)',
      location: 'Kakuma town, Inside LWF compound',
      hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
      services: 'Child protection, GBV support, livelihoods',
      type: 'Protection & Support',
      icon: 'fas fa-shield-alt'
    },
    {
      name: 'Jesuit Refugee Services (JRS)',
      location: 'Kakuma town, Inside LWF compound',
      hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
      services: 'Education, psychosocial support',
      type: 'Education & Mental Health',
      icon: 'fas fa-brain'
    },
    {
      name: 'Don Bosco',
      location: 'Kakuma town, Inside LWF compound',
      hours: 'Monday - Friday, 8:00 AM - 5:00 PM + Emergency services',
      services: 'Vocational training, emergency support',
      type: 'Training & Emergency',
      icon: 'fas fa-tools'
    },
    {
      name: 'Norwegian Refugee Council (NRC)',
      location: 'Kakuma town, Inside UNHCR Compound 3',
      hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
      services: 'Shelter, education, youth programs',
      type: 'Shelter & Education',
      icon: 'fas fa-home'
    },
    {
      name: 'Refugee Consortium of Kenya (RCK)',
      location: 'Kakuma town, Inside UNHCR Compound 3',
      hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
      services: 'Legal aid, resettlement support',
      type: 'Legal Services',
      icon: 'fas fa-balance-scale'
    },
    {
      name: 'Kenya Red Cross Society (KRCS)',
      location: 'Kakuma 3, near Reception Center',
      hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
      services: 'Emergency aid, health, disaster response',
      type: 'Emergency & Health',
      icon: 'fas fa-plus-circle'
    },
    {
      name: 'FilmAid Kenya',
      location: 'Kakuma town, Inside UNHCR Compound 3',
      hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
      services: 'Communication (film, radio), protection messaging',
      type: 'Communication',
      icon: 'fas fa-video'
    },
    {
      name: 'Peace Wind Japan',
      location: 'Kakuma town, Inside UNHCR Compound 3',
      hours: 'Monday - Friday, 8:00 AM - 4:00 PM',
      services: 'Water services, infrastructure',
      type: 'Water & Infrastructure',
      icon: 'fas fa-tint'
    },
    {
      name: 'Windle International Kenya',
      location: 'Kakuma town, Inside UNHCR Compound 3',
      hours: 'Monday - Friday, 8:00 AM - 5:00 PM',
      services: 'Education, disaster response',
      type: 'Education & Emergency',
      icon: 'fas fa-book'
    }
  ];

  return (
    <div className="info-page">
      <Navbar />

      <main className="main-content">
        <section className="info-section">
          <div className="section-header info">
            <h1><i className="fas fa-building"></i> {t.ngo_offices}</h1>
            <p>Find NGO offices and organizations providing support services in Kakuma</p>
          </div>
          
          <div className="section-content">
            <p className="intro-text">
              Below are the NGOs operating in Kakuma, their locations, operating hours, and services provided. 
              All organizations work together to support refugees and the host community.
            </p>

            <div className="cards-grid">
              {ngos.map((ngo, index) => (
                <div key={index} className="info-card">
                  <h3 className="card-title">
                    <i className={ngo.icon}></i>
                    {ngo.name}
                  </h3>
                  <div className="card-type">{ngo.type}</div>
                  <div className="card-info">
                    <div className="info-item">
                      <i className="fas fa-map-marker-alt info-icon"></i>
                      <div>
                        <div className="info-label">Location</div>
                        <div className="info-text">{ngo.location}</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-clock info-icon"></i>
                      <div>
                        <div className="info-label">Operating Hours</div>
                        <div className="info-text">{ngo.hours}</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-hand-holding-heart info-icon"></i>
                      <div>
                        <div className="info-label">Services</div>
                        <div className="info-text">{ngo.services}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-info">
              <h3><i className="fas fa-phone"></i> Need Assistance?</h3>
              <p>Contact UNHCR Helpline or visit any NGO office for support and information about their services.</p>
              <a href="tel:1517" className="helpline">
                <i className="fas fa-phone"></i>
                Call UNHCR Helpline: 1517
              </a>
            </div>

            <div className="notes-section">
              <h3><i className="fas fa-info-circle"></i> Important Information</h3>
              <ul>
                <li>All NGO services are provided free of charge to refugees and host community</li>
                <li>Operating hours may vary during holidays and emergencies</li>
                <li>Some organizations provide 24/7 emergency services</li>
                <li>Bring your refugee ID or documentation when visiting offices</li>
                <li>Most offices are located within the LWF compound or UNHCR compounds</li>
              </ul>
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

export default NGOOfficesPage;