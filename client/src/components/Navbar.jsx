import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useLanguage } from './LanguageContext';
import translations from './translations';

const SEARCH_INDEX = [
  // English and Kiswahili titles for each page/section
  { key: 'home', en: 'Home', sw: 'Nyumbani', path: '/home' },
  { key: 'information', en: 'Information', sw: 'Taarifa', path: '/information' },
  { key: 'about', en: 'About', sw: 'Kuhusu', path: '/about' },
  { key: 'scholarships', en: 'Scholarships', sw: 'Ufadhili wa Masomo', path: '/scholarships' },
  { key: 'arrival_in_kakuma', en: 'Arrival in Kakuma', sw: 'Kuwasili Kakuma', path: '/arrival-in-kakuma' },
  { key: 'hospitals_clinics', en: 'Hospitals & Clinics', sw: 'Hospitali & Kliniki', path: '/hospitals-clinics' },
  { key: 'schools', en: 'Schools', sw: 'Shule', path: '/schools' },
  { key: 'ngo_offices', en: 'NGO Offices', sw: 'Ofisi za NGO', path: '/ngo-offices' },
  { key: 'field_post_offices', en: 'Field Post Offices', sw: 'Ofisi za Posta', path: '/field-post-offices' },
  { key: 'unhcr_services', en: 'UNHCR Services', sw: 'Huduma za UNHCR', path: '/unhcr-services' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, switchLanguage } = useLanguage();
  const t = translations[language];

  // Search logic
  const filteredResults = search.trim()
    ? SEARCH_INDEX.filter(item =>
        item[language].toLowerCase().includes(search.trim().toLowerCase())
      )
    : [];

  // Close menu and dropdowns on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
    setLangDropdown(false);
    setShowResults(false);
    setSearch('');
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

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setShowResults(!!e.target.value);
  };

  const handleResultClick = (path) => {
    setShowResults(false);
    setSearch('');
    navigate(path);
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
          <li className="search-parent">
            <input
              className="search-input"
              type="text"
              placeholder={t.search}
              value={search}
              onChange={handleSearchChange}
              onFocus={() => setShowResults(!!search)}
              aria-label={t.search}
            />
            {showResults && (
              <div className="search-results">
                {filteredResults.length === 0 ? (
                  <div className="search-no-results">No results</div>
                ) : (
                  filteredResults.map(item => (
                    <button
                      key={item.key}
                      className="search-result-item"
                      onClick={() => handleResultClick(item.path)}
                    >
                      {item[language]}
                    </button>
                  ))
                )}
              </div>
            )}
          </li>
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