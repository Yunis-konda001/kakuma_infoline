import React from 'react';
import { Link } from 'react-router-dom';
import './InformationPage.css';
import './FieldPostOffices.css';

function InformationPage() {
  return (
    <div className="information-page">
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

      <section className="info-section">
        <h1>Information</h1>
        <p>Information for asylum-seekers, refugees, and migrants in Kakuma about procedures, rights and services</p>
        <div className="info-grid">
          <Link to="/arrival-in-kakuma" className="info-card">
            <i className="fas fa-person-walking"></i>
            <span>Arrival In Kakuma</span>
          </Link>
          <Link to="/hospitals-clinics" className="info-card">
            <i className="fas fa-hospital"></i>
            <span>Hospitals & clinics</span>
          </Link>
          <Link to="/schools" className="info-card">
            <i className="fas fa-school"></i>
            <span>Schools</span>
          </Link>

          <Link to="/unhcr-services" className="info-card">
            <i className="fas fa-hands-helping"></i>
            <span>UNHCR services</span>
          </Link>
          <Link to="/field-post-offices" className="info-card">
            <i className="fas fa-mail-bulk"></i>
            <span>Field Post offices</span>
          </Link>

          <Link to="/ngo-offices" className="info-card">
            <i className="fas fa-building"></i>
            <span>NGO Offices</span>
          </Link>
        </div>


      </section>


      <footer className="footer">
        <p>&copy; 2023 Kakuma InfoLine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default InformationPage;