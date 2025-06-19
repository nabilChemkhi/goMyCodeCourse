import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaLinkedin } from 'react-icons/fa'
import './Home.css'

const Contact = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <span className="emoji-wave" role="img" aria-label="robot">🤖</span>
        <h1>Contact the Institute of Artificial Intelligence Research</h1>
        <p>
          We’d love to connect with you! Reach out to join our community, collaborate, or learn more about our work.
        </p>
      </header>
      <section className="cards-section">
        <div className="card">
          <FaEnvelope className="card-icon" />
          <h2>Email Us</h2>
          <p>
            info@ai-institute.org<br />
            <span style={{ fontSize: '0.9em', color: '#aaa' }}>We reply within 24 hours</span>
          </p>
        </div>
        <div className="card">
          <FaPhoneAlt className="card-icon" />
          <h2>Call Us</h2>
          <p>
            +1 (555) 123-4567<br />
            <span style={{ fontSize: '0.9em', color: '#aaa' }}>Mon-Fri, 9am-5pm</span>
          </p>
        </div>
        <div className="card">
          <FaMapMarkerAlt className="card-icon" />
          <h2>Visit Us</h2>
          <p>
            42 Innovation Drive<br />
            Tech City, AI Country
          </p>
        </div>
        <div className="card">
          <FaTwitter className="card-icon" />
          <h2>Twitter</h2>
          <p>
            <a href="https://twitter.com/ai_institute" target="_blank" rel="noopener noreferrer">@ai_institute</a>
          </p>
        </div>
        <div className="card">
          <FaLinkedin className="card-icon" />
          <h2>LinkedIn</h2>
          <p>
            <a href="https://linkedin.com/company/ai-institute" target="_blank" rel="noopener noreferrer">AI Institute</a>
          </p>
        </div>
      </section>
      <footer className="home-footer">
        <span className="emoji-rocket" role="img" aria-label="mailbox">📬</span>
        <p>
          Let’s build the future of AI together!
        </p>
      </footer>
    </div>
  )
}

export default Contact
