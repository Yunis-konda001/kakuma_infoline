import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import HomePage from './HomePage';
import SettlementSelectionPage from './SettlementSelectionPage';
import InformationPage from './InformationPage';
import FieldPostOfficesPage from './FieldPostOfficesPage';
import NGOOfficesPage from './NGOOfficesPage';
import UNHCRServicesPage from './UNHCRServicesPage';
import './App.css'
import SchoolsPage from './SchoolsPage';
import HospitalsClinicsPage from './HospitalsClinicsPage';
import ArrivalInKakumaPage from './ArrivalInKakumaPage';
import AboutPage from './AboutPage';
import ScholarshipsPage from './ScholarshipsPage';
import { LanguageProvider } from './components/LanguageContext';
import React from 'react';

function LandingRoute({ children }) {
  const location = useLocation();
  const seenLanding = sessionStorage.getItem('seenLanding');
  if (seenLanding && location.pathname === '/') {
    return <Navigate to="/home" replace />;
  }
  return children;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <LandingRoute>
              <SettlementSelectionPage />
            </LandingRoute>
          } />
          <Route path="/home" element={<HomePage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/field-post-offices" element={<FieldPostOfficesPage />} />
          <Route path="/ngo-offices" element={<NGOOfficesPage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/unhcr-services" element={<UNHCRServicesPage />} />
          <Route path="/hospitals-clinics" element={<HospitalsClinicsPage />} />
          <Route path="/arrival-in-kakuma" element={<ArrivalInKakumaPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/scholarships" element={<ScholarshipsPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App