import React from 'react';
import './NGOOfficesPage.css';
import { Link } from 'react-router-dom';

function NGOOfficesPage() {
  return (
    <div className="ngo-offices-page">
      <header className="header">
        <div className="logo-container">
          <Link to="/" className="logo">
            Kakuma<span className="highlight">InfoLine</span>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <Link to="/information">Information <i className="fas fa-angle-down"></i></Link>
            </li>
            <li><a href="#">About</a></li>
            <li>
              <a href="#">English <i className="fas fa-angle-down"></i></a>
            </li>
            <li><a href="#"><i className="fas fa-search"></i></a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="ngo-offices-section">
          <h1>NGO Offices in Kakuma</h1>
          <p>Find information about various NGO offices operating in Kakuma, including their services and contact details.</p>

          <p>Below is a list of NGOs operating in Kakuma, their locations, open hours, and services provided.Contact UNHCR Helpline (1517) or visit offices for exact details.</p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>NGO</th>
                  <th>Location</th>
                  <th>Open Days/Hours</th>
                  <th>Services</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>International Rescue Committee (IRC)</td>
                  <td>Kakuma 1, near Amusait Hospital</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Health care, nutrition, women’s centers</td>
                </tr>
                <tr>
                  <td>Lutheran World Federation (LWF)</td>
                  <td>Kakuma 2, near Greenlight Secondary School</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Primary education, child protection, livelihoods</td>
                </tr>
                <tr>
                  <td>Danish Refugee Council (DRC)</td>
                  <td>Kakuma 4, Zone 2, Block 8, near UNHCR Field Post 4</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Child protection, GBV support, livelihoods</td>
                </tr>
                <tr>
                  <td>Jesuit Refugee Services (JRS)</td>
                  <td>Kakuma 3, near Reception Center</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Education, psychosocial support</td>
                </tr>
                <tr>
                  <td>Don Bosco</td>
                  <td>Kakuma 1, opp. Social Service</td>
                  <td>Mon–Fri, ~8 AM–5 PM; emergency night services*</td>
                  <td>Vocational training, emergency support</td>
                </tr>
                <tr>
                  <td>FilmAid Kenya</td>
                  <td>Kakuma 1, near UNHCR Field Post 1</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Communication (film, radio), protection messaging</td>
                </tr>
                <tr>
                  <td>Norwegian Refugee Council (NRC)</td>
                  <td>Kakuma 1, opp. UNHCR Field Post 1</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Shelter, education, youth programs</td>
                </tr>
                <tr>
                  <td>Refugee Consortium of Kenya (RCK)</td>
                  <td>Kakuma 2, near Furaha Center 2</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Legal aid, resettlement support</td>
                </tr>
                <tr>
                  <td>Terre Des Hommes (TDH)</td>
                  <td>Kalobeyei, Village 1, near main market</td>
                  <td>Mon–Fri, ~8 AM–5 PM*</td>
                  <td>Child protection, psychosocial support</td>
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