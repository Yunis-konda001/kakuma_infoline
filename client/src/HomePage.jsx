import React from 'react';

import { Link } from 'react-router-dom';
import './HomePage.css'; // We'll create this CSS file next

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo-container">
          <div className="logo">
            Kakuma<span className="highlight">InfoLine</span>
          </div>
          {/* <div className="logo-country">KENYA</div> */}
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

      <section className="hero-section">
        <h1>Information for asylum-seekers,<br />refugees, and migrants in Kakuma Camp.</h1>
      </section>

      <section className="ask-question-section">
        <h2>Ask us a question</h2>
        <p>We offer support and information on the following platforms:</p>
        <div className="platform-buttons">
          <a href="#" className="platform-button facebook">
            <i className="fab fa-facebook"></i> Facebook <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
          <a href="#" className="platform-button whatsapp">
            <i className="fab fa-whatsapp"></i> WhatsApp <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
          <a href="#" className="platform-button facebook-messenger">
            <i className="fab fa-facebook-messenger"></i> Faceboo... <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
          <a href="#" className="platform-button telegram">
            <i className="fab fa-telegram"></i> Telegram <i className="fas fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2023 Kakuma InfoLine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;