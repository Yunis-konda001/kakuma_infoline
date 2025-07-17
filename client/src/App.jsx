import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './HomePage';
import InformationPage from './InformationPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <div className="logo">
              Kakuma<span className="highlight">InfoLine</span>
            </div>
            <p className="info-text">
              Welcome to Kakuma InfoLine - your comprehensive information resource. 
              Please select your location to find relevant information and services.
            </p>
            <div className="location-buttons">
              <Link to="/kakuma" className="location-button">Kakuma Camp</Link>
              <a href="#" className="location-button" onClick={() => alert('Kalobeyei Settlement is not available yet.')}>Kalobeyei Settlement</a>
            </div>
          </div>
        } />
        <Route path="/kakuma" element={<HomePage />} />
        <Route path="/information" element={<InformationPage />} />
      </Routes>
    </Router>
  )
}

export default App