import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useLanguage } from './LanguageContext';
import translations from './translations';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const location = useLocation();
  const { language, switchLanguage } = useLanguage();
  const t = translations[language];

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
    setLangDropdown(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLangDropdown = (e) => {
    e.preventDefault();
    setLangDropdown((open) => !open);
  };

  const handleSwitchLanguage = (lang) => {
    switchLanguage(lang);
    setLangDropdown(false);
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
          <li><Link to="/" onClick={closeMenu}>{t.home}</Link></li>
          <li className="dropdown">
            <Link to="/information" onClick={closeMenu}>{t.information} <i className="fas fa-angle-down"></i></Link>
          </li>
          <li><Link to="/about" onClick={closeMenu}>{t.about}</Link></li>
          <li className="lang-dropdown-parent">
            <button
              className="lang-switch"
              type="button"
              onClick={handleLangDropdown}
              aria-haspopup="true"
              aria-expanded={langDropdown}
            >
              {language === 'en' ? t.english : t.kiswahili} <i className="fas fa-angle-down"></i>
            </button>
            <div className={`lang-dropdown${langDropdown ? ' show' : ''}`}>
              {language !== 'en' && (
                <button className="lang-option" onClick={() => handleSwitchLanguage('en')}>{translations.en.english}</button>
              )}
              {language !== 'sw' && (
                <button className="lang-option" onClick={() => handleSwitchLanguage('sw')}>{translations.sw.kiswahili}</button>
              )}
            </div>
          </li>
          <li><a href="#" onClick={closeMenu}><i className="fas fa-search"></i></a></li>
        </ul>
      </nav>
      <button className="hamburger" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} onClick={toggleMenu}>
        {isMenuOpen ? (
          <span className="close-icon">&#10005;</span>
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