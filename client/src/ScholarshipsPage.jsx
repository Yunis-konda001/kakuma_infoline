import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ScholarshipsPage.css';
import Navbar from './components/Navbar';

function ScholarshipsPage() {
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scholarshipsData = [
    {
      id: 1,
      program: 'IAFR Refugee Scholarships',
      provider: 'International Association for Refugees (IAFR) & Windle International Kenya (WIK)',
      educationLevel: 'Secondary (High School)',
      eligibility: 'Refugee girls from Kakuma and Turkana West IDP Camp; focus on financial need',
      application: 'Apply through Windle International Kenya; contact IAFR for details',
      details: 'Cost: $12,100 for 4 years (covers tuition, travel, medical, books, uniforms); started in 2018 with National Presbyterian Church',
      source: 'IAFR',
    },
    {
      id: 2,
      program: 'DAFI Scholarship Programme',
      provider: 'UNHCR & Windle International Kenya',
      educationLevel: 'Tertiary (University)',
      eligibility: 'Recognized refugees with strong KCSE grades; priority for those unable to afford university',
      application: 'Apply annually (April/May) via Windle International Kenya’s website or UNHCR Field Posts',
      details: 'Covers university fees; highly competitive; less than 1% of eligible youth benefit',
      source: 'UNHCR',
    },
    {
      id: 3,
      program: 'WUSC Scholarships',
      provider: 'World University Service of Canada (WUSC)',
      educationLevel: 'Tertiary (University)',
      eligibility: 'Recognized refugees; specific academic and language requirements',
      application: 'Announced annually via UNHCR, schools, or community channels (flyers, radio, SIKIKA)',
      details: 'Offers international study opportunities; eligibility varies',
      source: 'WUSC',
    },
    {
      id: 4,
      program: 'Mastercard Scholarships',
      provider: 'Mastercard Foundation',
      educationLevel: 'Tertiary (University)',
      eligibility: 'Recognized refugees with academic qualifications; focus on financial need',
      application: 'Announced annually through UNHCR, schools, or notice boards',
      details: 'Supports higher education abroad; competitive selection process',
      source: 'Mastercard Foundation',
    },
    {
      id: 5,
      program: 'UNICORE Scholarships',
      provider: 'UNHCR & Partners',
      educationLevel: 'Tertiary (University)',
      eligibility: 'Recognized refugees; specific academic and language proficiency requirements',
      application: 'Annual calls via UNHCR, schools, or community channels',
      details: 'Focuses on international university placements',
      source: 'UNHCR',
    },
    {
      id: 6,
      program: 'Habesha/DIME Scholarships',
      provider: 'UNHCR & Partners',
      educationLevel: 'Tertiary (University)',
      eligibility: 'Recognized refugees; academic and language criteria apply',
      application: 'Announced via UNHCR, schools, or local media (radio, WhatsApp)',
      details: 'Supports higher education abroad; limited slots',
      source: 'UNHCR',
    },
    {
      id: 7,
      program: 'JKF Scholarship Programme',
      provider: 'Jomo Kenyatta Foundation (JKF)',
      educationLevel: 'Secondary (High School)',
      eligibility: 'Refugee learners with 240 (girls) or 250 (boys) marks in 2023 KCPE; from camp-based or public schools',
      application: 'Apply by Dec 28 via Equity Bank branches, DRS Camp Manager, or online at scholarship.jkf.co.ke',
      details: 'Targets vulnerable learners; forms available at Kakuma’s Equity Bank or DRS office',
      source: 'JKF',
    },
    {
      id: 8,
      program: 'Elimisha Kakuma',
      provider: 'Elimisha Kakuma',
      educationLevel: 'Tertiary (University Prep)',
      eligibility: 'High school graduates from Kakuma; focus on university readiness',
      application: 'Apply through Elimisha Kakuma’s program; includes 15-month prep course',
      details: 'Prepares students for scholarships to universities like Dartmouth, UC Berkeley; refugee-led',
      source: 'Elimisha Kakuma',
    },
    {
      id: 9,
      program: 'UWC Refugee Initiative',
      provider: 'United World Colleges (UWC) & Rise',
      educationLevel: 'Secondary & Tertiary',
      eligibility: 'Refugees aged 15-18; apply through UWC National Committee',
      application: 'Apply via UWC’s standard process; no separate refugee process',
      details: 'Includes 20-week UWC-Amala Changemaker Programme in Kakuma; global opportunities',
      source: 'UWC',
    },
    {
      id: 10,
      program: 'Kakuma Empowerment Program (KEP)',
      provider: 'KEP & Global Refugee Youth Network',
      educationLevel: 'Secondary (High School)',
      eligibility: 'Refugees in Kakuma; focus on girls, expanded to boys',
      application: 'Apply through KEP; contact via kakumaempowermentprogram.com',
      details: 'Offers biyearly scholarships, tutoring, and mentorship; supports over 100 students',
      source: 'KEP',
    },
  ];

  const handleScholarshipClick = (scholarship) => {
    setSelectedScholarship(scholarship);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedScholarship(null);
  };

  const ScholarshipItem = ({ scholarship, onClick }) => (
    <div className="scholarship-item" onClick={() => onClick(scholarship)}>
      <h2>{scholarship.program}</h2>
      <p><strong>Provider:</strong> {scholarship.provider}</p>
      <p><strong>Education Level:</strong> {scholarship.educationLevel}</p>
    </div>
  );

  const ScholarshipModal = ({ scholarship, onClose }) => {
    if (!scholarship) return null;

    return (
      <div className="scholarship-modal-overlay">
        <div className="scholarship-modal-content">
          <button className="scholarship-modal-close" onClick={onClose}>&times;</button>
          <h2>{scholarship.program}</h2>
          <p><strong>Provider:</strong> {scholarship.provider}</p>
          <p><strong>Education Level:</strong> {scholarship.educationLevel}</p>
          <p><strong>Eligibility Criteria:</strong> {scholarship.eligibility}</p>
          <p><strong>Application Process:</strong> {scholarship.application}</p>
          <p><strong>Key Details:</strong> {scholarship.details}</p>
          <p><strong>Source:</strong> {scholarship.source}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="scholarships-page">
      <Navbar />

      <main className="main-content">
        <section className="scholarships-section">
          <h1>Scholarships</h1>
          <p>Information about scholarship opportunities for refugees in Kakuma.</p>
          <div className="scholarship-list">
            {scholarshipsData.map((scholarship) => (
              <ScholarshipItem
                key={scholarship.id}
                scholarship={scholarship}
                onClick={handleScholarshipClick}
              />
            ))}
          </div>
          {isModalOpen && (
            <ScholarshipModal
              scholarship={selectedScholarship}
              onClose={handleCloseModal}
            />
          )}
          <p className="note"><strong>Notes:</strong></p>
          <ul className="notes-list">
            <li><strong>Application Channels:</strong> Most scholarships are announced via UNHCR, schools, local radio, WhatsApp trees, SIKIKA, or notice boards in Kakuma and Kalobeyei. Check with UNHCR Field Posts or DRS Camp Manager for updates.</li>
            <li><strong>Challenges:</strong> Scholarship opportunities are limited, with high competition. Less than 1% of eligible youth access tertiary education due to funding constraints.</li>
            <li><strong>Contact:</strong> For inquiries, reach out to UNHCR’s Kakuma helpline at 1517, email kenyakak@unhcr.org, or visit kakumayouth.com for youth opportunities.</li>
            <li><strong>Updates:</strong> Scholarship details (e.g., costs, eligibility) may change due to exchange rates or program updates. Verify with providers like Windle International Kenya (www.windle.org) or UNHCR.</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Kakuma InfoLine. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ScholarshipsPage;