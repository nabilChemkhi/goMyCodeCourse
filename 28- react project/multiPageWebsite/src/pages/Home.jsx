import React from 'react'
import { FaRobot, FaBrain, FaMicroscope, FaUsers } from 'react-icons/fa'
import { SiOpenai } from 'react-icons/si'
import './Home.css' // Create this file for custom styles and animations

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <span className="emoji-wave" role="img" aria-label="wave">👋</span>
        <h1>Welcome to the Institute of Artificial Intelligence Research</h1>
        <p>
          Pioneering the future of AI through innovation, collaboration, and excellence.
        </p>
      </header>
      <section className="cards-section">
        <div className="card ai-research">
          <FaBrain className="card-icon" />
          <h2>AI Research</h2>
          <p>
            Cutting-edge research in machine learning, deep learning, and neural networks to solve real-world problems.
          </p>
        </div>
        <div className="card robotics">
          <FaRobot className="card-icon" />
          <h2>Robotics</h2>
          <p>
            Integrating AI with robotics to build intelligent, autonomous systems for industry and society.
          </p>
        </div>
        <div className="card innovation">
          <SiOpenai className="card-icon" />
          <h2>Innovation Lab</h2>
          <p>
            A collaborative space for creative minds to develop next-generation AI solutions and prototypes.
          </p>
        </div>
        <div className="card community">
          <FaUsers className="card-icon" />
          <h2>Community</h2>
          <p>
            Join our vibrant community of researchers, students, and industry leaders advancing AI together.
          </p>
        </div>
        <div className="card science">
          <FaMicroscope className="card-icon" />
          <h2>Scientific Discovery</h2>
          <p>
            Applying AI to accelerate scientific discovery in healthcare, environment, and beyond.
          </p>
        </div>
      </section>
      <footer className="home-footer">
        <span className="emoji-rocket" role="img" aria-label="rocket">🚀</span>
        <p>
          Explore. Innovate. Inspire.
        </p>
      </footer>
    </div>
  )
}

export default Home

