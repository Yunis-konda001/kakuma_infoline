import { BrowserRouter as Router, Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
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
          <Link to="/kalobeyei" className="location-button">Kalobeyei Settlement</Link>
        </div>
      </div>
    </Router>
  )
}

export default App