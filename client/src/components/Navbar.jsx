import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo">
          Kakuma<span className="highlight">InfoLine</span>
        </Link>
      </div>
      <nav className={`nav${isMenuOpen ? ' open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li className="dropdown">
            <Link to="/information" onClick={closeMenu}>Information <i className="fas fa-angle-down"></i></Link>
          </li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li>
            <a href="#" onClick={closeMenu}>English <i className="fas fa-angle-down"></i></a>
          </li>
          <li><a href="#" onClick={closeMenu}><i className="fas fa-search"></i></a></li>
        </ul>
      </nav>
      <button className="hamburger" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close-icon">&#10005;</span> // X icon
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </button>
    </header>
  );
}

export default Navbar; 