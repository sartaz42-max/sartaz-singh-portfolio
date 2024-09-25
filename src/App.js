// File location: src/App.js
   // Open this file in a text editor and replace all content with:

   import React from 'react';
   import './App.css';

   function App() {
     return (
       <div className="App">
         <header>
           <h1>Sartaz Singh</h1>
           <p>Product Manager | Business Analyst</p>
         </header>
         <main>
           <section>
             <h2>Profile Summary</h2>
             <p>Demonstrated over 2 years of experience in product management and business analysis within the technology industry.</p>
           </section>
           <section>
             <h2>Work Experience</h2>
             <h3>Associate Product Manager at Credera</h3>
             <p>May 2022 - April 2024</p>
             {/* Add more details about your work experience */}
           </section>
           <section>
             <h2>Education</h2>
             <ul>
               <li>MBA – Marketing from Indian Institute of Management (IIM) Sirmaur, 2022</li>
               <li>B.Tech. – Mechanical Engineering from GZSCCET, MRSPTU, 2020</li>
               <li>Diploma from Thapar Polytechnic College, Patiala, 2017</li>
             </ul>
           </section>
         </main>
         <footer>
           <p>© 2024 Sartaz Singh. All rights reserved.</p>
         </footer>
       </div>
     );
   }

   export default App;
   