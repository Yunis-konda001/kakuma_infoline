import React from 'react';
import './NGOOfficesPage.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function NGOOfficesPage() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="ngo-offices-page">
      <Navbar />

      <main className="main-content">
        <section className="ngo-offices-section">
          <h1>{t.ngo_offices}</h1>
          <p>{t.ngo_offices_info}</p>

          <p>Below is a list of NGOs operating in Kakuma, their locations, open hours, and services provided.Contact UNHCR Helpline (1517) or visit offices for exact details.</p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{t.ngo}</th>
                  <th>{t.location}</th>
                  <th>{t.open_days_hours}</th>
                  <th>{t.services}</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>Peace Wind Japan</td>
                  <td>Kakuma town, Inside UNHCR Compund 3</td>
                  <td>Mon–Fri, ~8 AM–4 PM*</td>
                  <td>Offer Water Services</td>
                </tr>
                <tr>
                  <td>International Rescue Committee (IRC)</td>
                  <td>Kakuma town, Inside LWF compound</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Health care, nutrition, women’s centers</td>
                </tr>
                <tr>
                  <td>Lutheran World Federation (LWF)</td>
                  <td>Kakuma town, Inside LWF compound</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Primary education, child protection, livelihoods</td>
                </tr>
                <tr>
                  <td>Danish Refugee Council (DRC)</td>
                  <td>Kakuma town, Inside LWF compound</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Child protection, GBV support, livelihoods</td>
                </tr>
                <tr>
                  <td>Jesuit Refugee Services (JRS)</td>
                  <td>Kakuma town, Inside LWF compound</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Education, psychosocial support</td>
                </tr>
                <tr>
                  <td>Don Bosco</td>
                  <td>Kakuma town, Inside LWF compound</td>
                  <td>Mon–Fri, ~8 AM–5 PM; emergency night services*</td>
                  <td>Vocational training, emergency support</td>
                </tr>
                <tr>
                  <td>FilmAid Kenya</td>
                  <td>Kakuma town, Inside UNHCR Compund 3</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Communication (film, radio), protection messaging</td>
                </tr>
                <tr>
                  <td>Norwegian Refugee Council (NRC)</td>
                  <td>Kakuma town, Inside UNHCR Compund 3</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Shelter, education, youth programs</td>
                </tr>
                <tr>
                  <td>Refugee Consortium of Kenya (RCK)</td>
                  <td>Kakuma town, Inside UNHCR Compund 3</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Legal aid, resettlement support</td>
                </tr>
                <tr>
                  <td>Windle International Kenya</td>
                  <td>Kakuma town, Inside UNHCR Compund 3</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Education, disaster response</td>
                  </tr>
                <tr>
                  <td>Kenya Red Cross Society (KRCS)</td>
                  <td>Kakuma 3, near Reception Center</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Emergency aid, health, disaster response</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Kakuma InfoLine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default NGOOfficesPage;