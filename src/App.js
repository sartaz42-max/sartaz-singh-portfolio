import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sartaz Singh</h1>
        <p>Product Manager | Business Analyst</p>
        <p>
          <a href="mailto:singhsartaz84@gmail.com">singhsartaz84@gmail.com</a> | +91-8288076026 |{' '}
          <a href="https://www.linkedin.com/in/sartaz-singh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </header>
      
      <main>
        <section id="profile-summary">
          <h2>Profile Summary</h2>
          <ul>
            <li>Over 2 years of experience in product management and business analysis in the technology industry.</li>
            <li>Expertise in defining Product Roadmap & Strategy, driving Product Lifecycle Management.</li>
            <li>Staunch Agile Practitioner with skills in breaking down product roadmaps and prioritizing features.</li>
            <li>Performance-driven professional with a proven track record in delivering complex programs.</li>
            <li>Rich techno-functional experience in end-to-end technical design and architecture.</li>
            <li>Innovative, Empathetic & Analytical People Leader skilled in building high-performing multi-cultural teams.</li>
          </ul>
        </section>

        <section id="work-experience">
          <h2>Work Experience</h2>
          <h3>Associate Product Manager at Credera</h3>
          <p>May 2022 - April 2024</p>
          <p><strong>Key Projects:</strong> AEM, SiteStudio</p>
          <h4>Key Result Areas:</h4>
          <ul>
            <li>Requirements Gathering and Client Engagement</li>
            <li>Mobile App User Interface Design</li>
            <li>Scalable E-commerce Solutions</li>
            <li>Systems Design for Enhanced Market Readiness</li>
            <li>Educational Demos and Best Practices</li>
            <li>High-Profile Automobile Client Project</li>
          </ul>
          <h4>Key Achievements:</h4>
          <ul>
            <li>Successfully launched 8 major websites on schedule</li>
            <li>Received multiple Spotlight Awards for outstanding collaboration and delivery excellence</li>
            <li>Reduced client customization needs by 40% and accelerated deployment timelines by 25%</li>
          </ul>
        </section>

        <section id="internships">
          <h2>Internships</h2>
          <div>
            <h3>Product Intern at Healthray (BigScal Tech Pvt. Ltd.)</h3>
            <p>May 2021 - June 2021</p>
            <ul>
              <li>Developed Go-to-Market strategies and pricing models for healthcare products</li>
              <li>Conducted market research with user interviews and benchmarking for startups</li>
            </ul>
          </div>
          <div>
            <h3>Consulting Intern at BMGI</h3>
            <p>February 2021 - March 2021</p>
            <ul>
              <li>Conducted market sizing and needs assessments across 9 education segments</li>
            </ul>
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>MBA – Marketing</strong>
              <p>Indian Institute of Management (IIM) Sirmaur, 2022</p>
              <p>CGPA: 6.45/10</p>
            </li>
            <li>
              <strong>B.Tech. – Mechanical Engineering</strong>
              <p>GZSCCET, MRSPTU, 2020</p>
              <p>Percentage: 78.6%</p>
            </li>
            <li>
              <strong>Diploma</strong>
              <p>Thapar Polytechnic College, Patiala, 2017</p>
              <p>Percentage: 68.84%</p>
            </li>
          </ul>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div>
            <h3>Core Competencies</h3>
            <ul>
              <li>Product Management</li>
              <li>Business Analysis</li>
              <li>Mobile App Design</li>
              <li>Scrum Methodology</li>
              <li>Market Research</li>
              <li>Gap Analysis</li>
              <li>Market Sizing</li>
              <li>Needs Assessments</li>
              <li>Performance Tuning</li>
              <li>Wireframe Development</li>
              <li>Team Leadership & Development</li>
              <li>Cross-functional Coordination</li>
              <li>Client & Stakeholder Engagement</li>
            </ul>
          </div>
          <div>
            <h3>Technical Skills</h3>
            <p>Excel, PowerPoint, Canva, HTML, CSS, Content writing, SQL, JIRA, Confluence, Figma, AEM, SiteStudio</p>
          </div>
          <div>
            <h3>Soft Skills</h3>
            <p>Communicator, Planner, Change Agent, Collaborator</p>
          </div>
        </section>

        <section id="certifications">
          <h2>Certifications</h2>
          <ul>
            <li>Certified SAFe® Product Owner/Product Manager by Scaled Agile, Inc, 2023</li>
          </ul>
        </section>

        <section id="publications">
          <h2>Publications</h2>
          <ul>
            <li>Published a research paper in Elsevier International Handbook funded by IEI (Kolkata) up to INR 40,000, 2019</li>
          </ul>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          <p>View my portfolio: <a href="https://drive.google.com/drive/folders/1pGb0M4YFXo679XobCJkE0qbUrOFQElrp?usp=sharing" target="_blank" rel="noopener noreferrer">Google Drive Portfolio</a></p>
        </section>
      </main>

      <footer>
        <p>© 2024 Sartaz Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
