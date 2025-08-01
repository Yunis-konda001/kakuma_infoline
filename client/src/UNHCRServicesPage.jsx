import React from 'react';
import './UNHCRServicesPage.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function UNHCRServicesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="unhcr-services-page">
      <Navbar />

      <main className="main-content">
        <section className="unhcr-services-section">
          <h1>{t.unhcr_services}</h1>
          <p>{t.unhcr_services_info}</p>

          <p>Below is a list of UNHCR services operating in Kakuma, their providers, locations, open hours, and descriptions. Call UNHCR Helpline (1517) or visit offices for exact details.</p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{t.service}</th>
                  <th>{t.provider}</th>
                  <th>{t.location}</th>
                  <th>{t.open_days_hours}</th>
                  <th>{t.description}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Food Distribution Center</td>
                  <td>WFP</td>
                  <td>Kakuma 3, near GreenLight Secondary School</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Distributes food ration to refugees on monthly basis</td>
                </tr>
                <tr>
                  <td>Child-Friendly Space</td>
                  <td>UNICEF</td>
                  <td>Kakuma 3, at Reception Center</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Recreational activities, psychosocial support for kids</td>
                </tr>
                <tr>
                  <td>Protection Services</td>
                  <td>UNHCR/DRC</td>
                  <td>Kakuma 1, opp. NRC; Kakuma 4, Zone 2, Block 8</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Child protection, GBV support, case management</td>
                </tr>
                <tr>
                  <td>Legal Aid</td>
                  <td>RCK</td>
                  <td>Kakuma 2, near Furaha Center 2</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Resettlement help, legal advice, rights advocacy</td>
                </tr>
                <tr>
                  <td>Vocational Training</td>
                  <td>Don Bosco</td>
                  <td>Kakuma 1, opp. Social Service</td>
                  <td>Mon–Fri, ~8 AM–5 PM; emergencies 24/7*</td>
                  <td>Skills training, job programs</td>
                </tr>
                <tr>
                  <td>Women’s Center</td>
                  <td>IRC</td>
                  <td>Kakuma 1, near Amusait Hospital</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Safe space, GBV support, empowerment programs</td>
                </tr>
                <tr>
                  <td>Water Supply</td>
                  <td>EDP</td>
                  <td>Kakuma 1–4, various wells</td>
                  <td>Daily, ~8 AM and 5PM*</td>
                  <td>Solar-powered wells for drinking, irrigation</td>
                </tr>
                <tr>
                  <td>Communication Services</td>
                  <td>FilmAid Kenya</td>
                  <td>Kakuma 1, near UNHCR Field Post 1</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Radio, film for protection, health messages</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note">*Note: Hours are not fixed and vary depending on standard humanitarian practices; confirm with providers.</p>
          <p className="note">*Note: Locations follow mentioned landmarks for easy navigation.</p>
          <p className="note">*Note: Call UNHCR Helpline (1517) or visit offices for exact details.</p>
        </section>
      </main>

      <footer className="footer">
        <p>{t.copyright}</p>
      </footer>
    </div>
  );
}

export default UNHCRServicesPage;