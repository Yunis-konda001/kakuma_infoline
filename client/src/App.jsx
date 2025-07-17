import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import InformationPage from './InformationPage';
import FieldPostOfficesPage from './FieldPostOfficesPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/field-post-offices" element={<FieldPostOfficesPage />} />
      </Routes>
    </Router>
  )
}

export default App