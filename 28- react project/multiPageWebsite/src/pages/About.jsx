import React from 'react'
import { FaLightbulb, FaGlobe, FaHandshake, FaAward } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import './Home.css'

const About = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <span className="emoji-wave" role="img" aria-label="brain">🧠</span>
        <h1>About the Institute of Artificial Intelligence Research</h1>
        <p>
          Empowering the next generation of thinkers, creators, and innovators in Artificial Intelligence.
        </p>
      </header>
      <section className="cards-section">
        <div className="card">
          <GiArtificialIntelligence className="card-icon" />
          <h2>Our Mission</h2>
          <p>
            To advance the field of AI through pioneering research, ethical innovation, and global collaboration.
          </p>
        </div>
        <div className="card">
          <FaLightbulb className="card-icon" />
          <h2>What We Do</h2>
          <p>
            We conduct interdisciplinary research, develop intelligent systems, and foster creativity to solve real-world challenges.
          </p>
        </div>
        <div className="card">
          <FaGlobe className="card-icon" />
          <h2>Global Impact</h2>
          <p>
            Our projects span healthcare, environment, education, and industry, making a positive impact worldwide.
          </p>
        </div>
        <div className="card">
          <FaHandshake className="card-icon" />
          <h2>Collaboration</h2>
          <p>
            We partner with universities, industry leaders, and communities to drive responsible AI development.
          </p>
        </div>
        <div className="card">
          <FaAward className="card-icon" />
          <h2>Excellence</h2>
          <p>
            Our institute is recognized for groundbreaking research, innovation, and commitment to ethical AI.
          </p>
        </div>
      </section>
      <footer className="home-footer">
        <span className="emoji-rocket" role="img" aria-label="sparkles">✨</span>
        <p>
          Shaping the future, one breakthrough at a time.
        </p>
      </footer>
    </div>
  )
}

export default About
