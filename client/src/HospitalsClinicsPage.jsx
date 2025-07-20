import React from 'react';
import { Link } from 'react-router-dom';
import './HospitalsClinicsPage.css';

function HospitalsClinicsPage() {
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

      <section className="hospitals-clinics-section">
        <h1>Hospitals & Clinics</h1>
        <p>Detailed information about hospitals and clinics in Kakuma and Kalobeyei.</p>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Facility</th>
                <th>Provider</th>
                <th>Location</th>
                <th>Services</th>
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
          <h3>Notes:</h3>
          <ul>
            <li>Locations use camp zones/landmarks for easy refugee navigation.</li>
            <li>All facilities offer free services to refugees and host community.</li>
            <li>No ICU available; severe cases referred to Lodwar or Nairobi.</li>
            <li>Contact UNHCR Helpline (1517) or visit facilities for exact details.</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Kakuma InfoLine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HospitalsClinicsPage;