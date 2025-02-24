import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Naomi Joa's Portfolio</h1>
      </header>

      {/* About Me Section */}
      <div className="card">
        <h2>About Me</h2>
        <p>
          I am a proactive, organized, and responsible student at Kean University, majoring in Computer Science.
          I have 5 years of customer service experience and strong teamwork, decision-making, and management skills.
        </p>
      </div>

      {/* Education Section */}
      <div className="card">
        <h2>Education</h2>
        <p><strong>Kean University (2022-2026)</strong> - Computer Science</p>
      </div>

      {/* Job Experience Section */}
      <div className="card">
        <h2>Job Experience</h2>
        <ul>
          <li><strong>Community Assistant</strong> - Kean University (2022-2024)</li>
          <li><strong>Cashier</strong> - Newark Airport (May-Jul 2023)</li>
          <li><strong>Customer Service</strong> - Santos Bakery (Nov 2019 - Aug 2021)</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Naomi Joa. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


