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
      </footer>
    </div>
  );
}

export default App;
