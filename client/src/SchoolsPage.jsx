import React from 'react';
import './SchoolsPage.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function SchoolsPage() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <div className="schools-page">
      <Navbar />

      <main className="main-content">
        <section className="schools-section">
          <h1>{t.schools}</h1>
          <p>{t.schools_info}</p>

          <p>Below is a list of schools operating in Kakuma, their locations, and services provided. Contact UNHCR Helpline (1517) or school offices for exact details.</p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>{t.school}</th>
                  <th>{t.location}</th>
                  <th>{t.services}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vision Secondary School</td>
                  <td>Kakuma 2, opp IOM</td>
                  <td>Mixed day school, KCSE prep</td>
                </tr>
                <tr>
                  <td>Somali Bantu Secondary School</td>
                  <td>Kakuma 2</td>
                  <td>Mixed day school, KCSE prep</td>
                </tr>
                <tr>
                  <td>Greenlight Secondary School</td>
                  <td>Kakuma 2, near Furaha Center 2</td>
                  <td>Mixed day school, KCSE prep</td>
                </tr>
                <tr>
                  <td>Kakuma Refugee Secondary School (KRSS)</td>
                  <td>Kakuma 1, opp Don Bosco</td>
                  <td>Mixed day school, KCSE prep</td>
                </tr>
                <tr>
                  <td>Blue State Secondary School</td>
                  <td>Kakuma 2, opp clicnic 5</td>
                  <td>Mixed day school, KCSE prep</td>
                </tr>
                <tr>
                  <td>Lifeworks Tumaini Girls Secondary School</td>
                  <td> Kalimchuch opp Ato Rite</td>
                  <td>Girls Boarding school, KCSE prep</td>
                </tr>
                <tr>
                  <td>Star Light Secondary School</td>
                  <td>Kakuma 1, opp Arrupe Center</td>
                  <td>Mixed day school, KCSE prep</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="note">*Note: Locations use camp zones/landmarks for refugee navigation.</p>
          {/* <p className="note">*Note: Blue State and Moneurshapell have limited or no verified data; Moneurshapell may be a misspelling or non-existent.</p> */}
          <p className="note">*Note: Contact UNHCR Helpline (1517) or school offices for exact details.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Kakuma InfoLine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SchoolsPage;