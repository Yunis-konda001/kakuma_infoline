import React from 'react';
import { Link } from 'react-router-dom';
import './shared-info-page.css';
import './HospitalsClinicsPage.css';
import Navbar from './components/Navbar';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function HospitalsClinicsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const hospitalsClinics = [
    {
      facility: 'Amusait General Hospital',
      provider: 'IRC',
      location: 'Kakuma 4, near IRC office',
      services: 'Inpatient care, surgery, ultrasound, X-ray, malnutrition treatment',
      hours: '24/7 Emergency Services',
      type: 'General Hospital',
      isEmergency: true
    },
    {
      facility: 'Kaapoka Health Centre',
      provider: 'IRC',
      location: 'Kakuma 1, near UNHCR Field Post 1',
      services: 'Outpatient care, vaccinations, maternal health, malaria treatment',
      hours: '8:00 AM - 4:00 PM',
      type: 'Health Centre',
      isEmergency: false
    },
    {
      facility: 'Nalemsekon (Clinic 5)',
      provider: 'IRC',
      location: 'Kakuma 2, opposite Blue State',
      services: 'Outpatient care, maternal health, child health, disease prevention',
      hours: '8:00 AM - 4:00 PM',
      type: 'Health Clinic',
      isEmergency: false
    },
    {
      facility: 'Nationakor (Clinic 6)',
      provider: 'IRC',
      location: 'Kakuma 3, near Al-Nurr Primary',
      services: 'Outpatient care, new arrival health checks, vaccinations',
      hours: '8:00 AM - 4:00 PM',
      type: 'Health Clinic',
      isEmergency: false
    },
    {
      facility: 'Kakuma 4 Health Clinic',
      provider: 'IRC',
      location: 'Kakuma 4, Zone 2, near DRC office',
      services: 'Outpatient care, maternal health, disease prevention',
      hours: '8:00 AM - 4:00 PM',
      type: 'Health Clinic',
      isEmergency: false
    },
  ];

  return (
    <div className="info-page">
      <Navbar />

      <main className="main-content">
        <section className="info-section">
          <div className="section-header success">
            <h1><i className="fas fa-hospital"></i> {t.hospitals_clinics}</h1>
            <p>Access quality healthcare services in Kakuma Refugee Camp</p>
          </div>
          
          <div className="section-content">
            <p className="intro-text">
              All healthcare facilities in Kakuma provide free services to refugees and the host community. 
              Below are the available medical facilities, their locations, and services offered.
            </p>

            <div className="emergency-info">
              <h3><i className="fas fa-exclamation-triangle"></i> Emergency Care</h3>
              <p>For life-threatening emergencies, go directly to Amusait General Hospital (24/7) or call for assistance.</p>
            </div>

            <div className="cards-grid">
              {hospitalsClinics.map((facility, index) => (
                <div key={index} className="info-card">
                  <h3 className="card-title">
                    <i className="fas fa-hospital-alt"></i>
                    {facility.facility}
                    {facility.isEmergency && <span className="emergency-badge">24/7</span>}
                  </h3>
                  <div className="card-type">{facility.type}</div>
                  <div className="card-info">
                    <div className="info-item">
                      <i className="fas fa-building info-icon"></i>
                      <div>
                        <div className="info-label">Provider</div>
                        <div className="info-text">{facility.provider}</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-map-marker-alt info-icon"></i>
                      <div>
                        <div className="info-label">Location</div>
                        <div className="info-text">{facility.location}</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-clock info-icon"></i>
                      <div>
                        <div className="info-label">Hours</div>
                        <div className="info-text">{facility.hours}</div>
                      </div>
                    </div>
                    <div className="info-item">
                      <i className="fas fa-stethoscope info-icon"></i>
                      <div>
                        <div className="info-label">Services</div>
                        <div className="info-text">{facility.services}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-info">
              <h3><i className="fas fa-phone"></i> Need Medical Assistance?</h3>
              <p>Contact UNHCR Helpline or visit any facility for medical care and information.</p>
              <a href="tel:1517" className="helpline">
                <i className="fas fa-phone"></i>
                Call UNHCR Helpline: 1517
              </a>
            </div>

            <div className="notes-section">
              <h3><i className="fas fa-info-circle"></i> Important Information</h3>
              <ul>
                <li>All medical services are provided free of charge to refugees and host community members</li>
                <li>Locations use camp zones and landmarks for easy navigation</li>
                <li>No ICU facilities available - severe cases are referred to Lodwar or Nairobi hospitals</li>
                <li>Bring your refugee ID or documentation when visiting any facility</li>
                <li>Maternal health services are available at all facilities</li>
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

export default HospitalsClinicsPage;