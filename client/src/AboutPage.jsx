import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';
import Navbar from './components/Navbar';

function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />

      <main className="main-content">
        <section className="about-section">
          <h1>About Kakuma InfoLine</h1>
          <p>Kakuma InfoLine is a vital information hub designed to empower refugees and asylum seekers in the Kakuma Refugee Camp, Kenya. Our mission is to provide accessible, accurate, and up-to-date information on essential services, resources, and opportunities available within the camp and surrounding areas.</p>
          
          <h2>Our Vision</h2>
          <p>To foster a well-informed and self-reliant refugee community by bridging information gaps and promoting access to critical services, ultimately enhancing their well-being and integration.</p>

          <h2>What We Offer</h2>
          <ul>
            <li><strong>Service Directory:</strong> Comprehensive details on humanitarian aid, health services, education, legal assistance, and more.</li>
            <li><strong>Location Guides:</strong> Easy-to-understand maps and directions to key facilities and organizations within Kakuma and Kalobeyei.</li>
            <li><strong>Updates & Alerts:</strong> Timely notifications on new programs, changes in service delivery, and important community announcements.</li>
            <li><strong>Contact Information:</strong> Direct contacts for various organizations and service providers.</li>
          </ul>

          <h2>Our Commitment</h2>
          <p>We are committed to maintaining the highest standards of accuracy, relevance, and user-friendliness. Kakuma InfoLine is developed with the community in mind, ensuring that information is presented clearly and is easily navigable for all users, regardless of their technical proficiency.</p>

          <h2>Contact Us</h2>
          <p>For inquiries or feedback, please reach out to us through the available channels within the camp or visit our partner organizations for assistance.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Kakuma InfoLine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;