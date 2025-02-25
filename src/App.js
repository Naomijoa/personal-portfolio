<<<<<<< HEAD
import React, { useState } from 'react';
import './index.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [page, setPage] = useState('home');

  const handleSend = () => {
    const userMessage = { sender: 'user', text: input };
    const botReply = { sender: 'bot', text: `You said: ${input}` };

    setMessages([...messages, userMessage, botReply]);
    setInput('');
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <div>
            <h1>Welcome to My Portfolio</h1>
            <p>I am Naomi Joa, a Computer Science student at Kean University.</p>
          </div>
        );
      case 'about':
        return (
          <div>
            <h1>About Me</h1>
            <p>I am a proactive, organized, and responsible person with 5 years of customer service experience.</p>
          </div>
        );
      case 'resume':
        return (
          <div>
            <h1>Resume</h1>
            <h2>Education</h2>
            <p>Kean University (2022-2026), Computer Science</p>
            <h2>Job Experience</h2>
            <ul>
              <li>Community Assistant - Kean University (2022-2024)</li>
              <li>Cashier - OTG Newark Airport (2023)</li>
              <li>Customer Service Representative - Santos Bakery (2019-2021)</li>
            </ul>
          </div>
        );
      case 'contact':
        return (
          <div>
            <h1>Contact Me</h1>
            <p>Email: Naomijoa2016@gmail.com</p>
            <p>Phone: 973-432-9364</p>
            <p>Location: Newark, New Jersey</p>
          </div>
        );
      default:
        return <p>Select a page from the navigation.</p>;
    }
  };

  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li><button onClick={() => setPage('home')}>Home</button></li>
            <li><button onClick={() => setPage('about')}>About</button></li>
            <li><button onClick={() => setPage('resume')}>Resume</button></li>
            <li><button onClick={() => setPage('contact')}>Contact</button></li>
          </ul>
        </nav>
      </header>

      <main>{renderPage()}</main>

      <div className="chatbox">
        <h3>AI Chatbox</h3>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <p key={index} className={msg.sender}>{msg.text}</p>
          ))}
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>

      <footer>
        <p>&copy; 2025 Naomi Joa. All rights reserved.</p>
=======
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
>>>>>>> 0d256b2abdd32b106cfdc3f2149cafd79abb0080
      </footer>
    </div>
  );
}

export default App;
<<<<<<< HEAD
=======


>>>>>>> 0d256b2abdd32b106cfdc3f2149cafd79abb0080
