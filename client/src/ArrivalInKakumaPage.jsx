import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArrivalInKakumaPage.css';
import Navbar from './components/Navbar';
import { useLanguage } from './components/LanguageContext';
import translations from './components/translations';

function ArrivalInKakumaPage() {
  const [flippedCard, setFlippedCard] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  const arrivalInfo = [
    {
      service: 'Report to camp manager',
      location: 'Kakuma town, opposite KKM Airstrip',
      description: 'New arrivals must report to the Camp Manager’s Office, which then refers them to the Reception Centre (either in Kakuma or Kalobeyei Settlement).',
      contact: 'UNHCR Helpline: 1517',
    },
    {
      service: 'Reception Center',
      location: 'Kakuma 3, near main market',
      description: 'Stay 10-15 days, Get food,shelter, hygiene kits, and undergo screening & orientation',
      contact: 'UNHCR Helpline: 1517',
    },
    {
      service: 'Registration',
      location: 'Kakuma 3, Filed Post 2',
      description: 'Biometric data & photo taken, Interview on why you fled, issues proof of registration)',
      contact: 'UNHCR Helpline: 1517',
    },
    {
      service: 'Return & Community Placement',
      location: 'Kakuma 3, Reception Center',
      description: 'Assigned shelter in camp community',
      contact: 'UNHCR Helpline: 1517',
    },
    {
      service: 'Food Assistance',
      location: 'Food distribution center 3 - Near DonBosco 2, Food distribution center 1 - Near Arrupe Center, & Food distribution center 4 - Opp NRC',
      description: 'WFP provides bi-monthly rations',
      contact: 'WFP Office, Kakuma 3',
    },
    {
      service: 'Child Protection',
      location: 'Kakuma 3, Reception Center',
      description: 'DRC/UNICEF supports unaccompanied minors, identifies foster families, offers psychosocial support',
      contact: 'DRC Office, Kakuma 4, Zone 2, Block 8',
    },
    {
      service: 'Shelter Allocation',
      location: 'Kakuma 3, Reception Center',
      description: 'UNHCR provides 4x5m plastic sheet for temporary shelter; assigned to Kakuma 1–4 or Kalobeyei',
      contact: 'UNHCR Field Post 4, Kakuma 4, Zone 2',
    },
    {
      service: 'Water Access',
      location: 'Kakuma 1–4, various wells',
      description: 'Solar-powered wells for drinking water; check with EDP for nearest pump',
      contact: 'EDP Office, Kakuma 1, near IRC office',
    },
    {
      service: 'Orientation',
      location: 'Kakuma 3, Reception Center',
      description: 'FilmAid Kenya provides info via radio, film, and community sessions on camp rules, safety, services',
      contact: 'FilmAid Office, Kakuma 1, near UNHCR Field Post 1',
    },
  ];

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <div className="arrival-in-kakuma-page">
      <Navbar />

      <section className="arrival-section">
        <h1>{t.arrival_in_kakuma}</h1>
        <p>{t.click_cards}</p>

        <div className="flashcard-grid">
          {arrivalInfo.map((item, index) => (
            <div
              key={index}
              className={`flashcard ${flippedCard === index ? 'flipped' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="flashcard-inner">
                <div className="flashcard-front">
                  <h3>{item.service}</h3>
                  <p><strong>{t.location}:</strong> {item.location}</p>
                </div>
                <div className="flashcard-back">
                  <h3>{item.service}</h3>
                  <p><strong>{t.description}:</strong> {item.description}</p>
                  <p><strong>{t.contact}:</strong> {item.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="notes-section">
          <h3>{t.notes}</h3>
          <ul>
            <li>Locations use camp zones/landmarks for easy navigation.</li>
            <li>Services are free; hours typically Mon–Fri, ~8 AM–5 PM, but sometimes vary.</li>
            <li>Carry registration documents at all times to access services.</li>
            <li>For emergencies, call UNHCR Helpline (1517) or visit nearest UNHCR/IRC office.</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>{t.copyright}</p>
      </footer>
    </div>
  );
}

export default ArrivalInKakumaPage;