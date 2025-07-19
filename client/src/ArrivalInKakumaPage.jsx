import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ArrivalInKakumaPage.css';

function ArrivalInKakumaPage() {
  const [flippedCard, setFlippedCard] = useState(null);

  const arrivalInfo = [
    {
      service: 'Reception Center',
      location: 'Kakuma 3, near main market',
      description: 'First stop for registration, health checks, and basic rations (rice, pulses); child-friendly space for kids',
      contact: 'UNHCR Helpline: 1517',
    },
    {
      service: 'Registration',
      location: 'Kakuma 3, Reception Center',
      description: 'UNHCR/DRS registers new arrivals, issues proof of registration, and assigns shelter (plastic sheet provided)',
      contact: 'UNHCR Field Post 1, Kakuma 1, opp. NRC',
    },
    {
      service: 'Health Screening',
      location: 'Kakuma 3, Reception Center',
      description: 'Initial medical checks by IRC, vaccinations, malaria testing; referrals to Amusait Hospital if needed',
      contact: 'IRC Clinic, Kakuma 3, near Reception Center',
    },
    {
      service: 'Food Assistance',
      location: 'Kakuma 3, near Reception Center',
      description: 'WFP provides bi-monthly rations or cash (KSh 820/month); register at Reception Center',
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
      <header className="header">
        <div className="logo-container">
          <div className="logo">
            Kakuma<span className="highlight">InfoLine</span>
          </div>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <Link to="/information">Information <i className="fas fa-angle-down"></i></Link>
            </li>
            <li><Link to="/about">About</Link></li>
            <li>
              <a href="#">English <i className="fas fa-angle-down"></i></a>
            </li>
            <li><a href="#"><i className="fas fa-search"></i></a></li>
          </ul>
        </nav>
      </header>

      <section className="arrival-section">
        <h1>Arrival in Kakuma</h1>
        <p>Click on the cards to reveal detailed information about services for new arrivals.</p>

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
                  <p><strong>Location:</strong> {item.location}</p>
                </div>
                <div className="flashcard-back">
                  <h3>{item.service}</h3>
                  <p><strong>Description:</strong> {item.description}</p>
                  <p><strong>Contact:</strong> {item.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="notes-section">
          <h3>Notes:</h3>
          <ul>
            <li>Locations use camp zones/landmarks for easy navigation.</li>
            <li>Services are free; hours typically Mon–Fri, ~8 AM–5 PM, but sometimes vary.</li>
            <li>Carry registration documents at all times to access services.</li>
            <li>For emergencies, call UNHCR Helpline (1517) or visit nearest UNHCR/IRC office.</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Kakuma InfoLine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ArrivalInKakumaPage;