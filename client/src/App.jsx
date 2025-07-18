import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SettlementSelectionPage from './SettlementSelectionPage';
import InformationPage from './InformationPage';
import FieldPostOfficesPage from './FieldPostOfficesPage';
import NGOOfficesPage from './NGOOfficesPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>

          <Route path="/" element={<SettlementSelectionPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/field-post-offices" element={<FieldPostOfficesPage />} />
          <Route path="/ngo-offices" element={<NGOOfficesPage />} />
      </Routes>
    </Router>
  )
}

export default App