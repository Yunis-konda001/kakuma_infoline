import React from 'react';
import { Link } from 'react-router-dom';
import './FieldPostOffices.css';
import './InformationPage.css'; // Import the CSS for the header
import Navbar from './components/Navbar';

function FieldPostOfficesPage() {
  return (
    <>
      <div className="information-page">
        <Navbar />
        <div className="field-post-offices-section">
          <h2>Field Post Offices</h2>
          <p>Here is detailed information about Field Post Offices in Kakuma Camp:</p>
          <table>
            <thead>
              <tr>
                <th>Field Post</th>
                <th>Location</th>
                <th>Open Days/Hours</th>
                <th>Roles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UNHCR Field Post 1</td>
                <td>Kakuma 1, Zones 1 & 2, opp. NRC</td>
                <td>Mon–Fri, ~8 AM–5 PM*</td>
                <td>Registration, protection, coordination</td>
              </tr>
              <tr>
                <td>UNHCR Field Post 4</td>
                <td>Kakuma 4, Zone 2, Block 8, near DRC</td>
                <td>Mon–Fri, ~8 AM–5 PM*</td>
                <td>Registration, protection, coordination</td>
              </tr>
              <tr>
                <td>DRS Field Post 2</td>
                <td>Kakuma 1</td>
                <td>Mon–Fri, ~8 AM–5 PM*</td>
                <td>Data updates, ID cards, resettlement</td>
              </tr>
              <tr>
                <td>Child Protection (DRC)</td>
                <td>Kakuma 1, 2, 3, 4; various sites</td>
                <td>Mon–Fri, ~8 AM–5 PM*</td>
                <td>Child protection, case management</td>
              </tr>
              <tr>
                <td>Reception Center</td>
                <td>Kakuma 3</td>
                <td>Daily, ~8 AM–5 PM*</td>
                <td>New arrival registration, support</td>
              </tr>
              <tr>
                <td>Kalobeyei Offices</td>
                <td>Kalobeyei Villages 1–3</td>
                <td>Mon–Fri, ~8 AM–5 PM*</td>
                <td>Registration, protection, livelihoods</td>
              </tr>
            </tbody>
          </table>
          <p className="note">*Note: Hours sometimes vary.</p>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2023 Kakuma InfoLine. All rights reserved.</p>
      </footer>
    </>
  );
}

export default FieldPostOfficesPage;