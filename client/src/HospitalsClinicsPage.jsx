import React from 'react';
import { Link } from 'react-router-dom';
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
      services: 'Inpatient care, surgery, ultrasound, X-ray, malnutrition treatment, 24/7 emergencies',
    },
    {
      facility: 'Kaapoka Health Centre, kakuma 1',
      provider: 'IRC',
      location: 'Kakuma 1, near UNHCR Field Post 1',
      services: 'Outpatient care, vaccinations, maternal health, malaria treatment, 8:00am-4:00pm',
    },
    {
      facility: 'Nalemsekon (Clinic 5)',
      provider: 'IRC',
      location: 'Kakuma 2, opp Blue State',
      services: 'Outpatient care, maternal health, child health, disease prevention, 8:00am-4:00pm',
    },
    {
      facility: 'Nationakor (Clinic 6)',
      provider: 'IRC',
      location: 'Kakuma 3, near Al-Nurr Primary',
      services: 'Outpatient care, new arrival health checks, vaccinations, 8:00am-4:00pm',
    },
    {
      facility: 'Kakuma 4 Health Clinic',
      provider: 'IRC',
      location: 'Kakuma 4, Zone 2, near DRC office',
      services: 'Outpatient care, maternal health, disease prevention, 8:00am-4:00pm',
    },
  ];

  return (
    <div className="hospitals-clinics-page">
      <Navbar />

      <section className="hospitals-clinics-section">
        <h1>{t.hospitals_clinics}</h1>
        <p>{t.hospitals_clinics_info}</p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>{t.facility}</th>
                <th>{t.provider}</th>
                <th>{t.location}</th>
                <th>{t.services}</th>
              </tr>
            </thead>
            <tbody>
              {hospitalsClinics.map((item, index) => (
                <tr key={index}>
                  <td>{item.facility}</td>
                  <td>{item.provider}</td>
                  <td>{item.location}</td>
                  <td>{item.services}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="notes-section">
          <h3>{t.notes}</h3>
          <ul>
            <li>Locations use camp zones/landmarks for easy refugee navigation.</li>
            <li>All facilities offer free services to refugees and host community.</li>
            <li>No ICU available; severe cases referred to Lodwar or Nairobi.</li>
            <li>Contact UNHCR Helpline (1517) or visit facilities for exact details.</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>{t.copyright}</p>
      </footer>
    </div>
  );
}

export default HospitalsClinicsPage;