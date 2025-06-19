import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBrain, FaHome, FaEnvelope, FaInfoCircle, FaRocket } from 'react-icons/fa'
import './NavBar.css'

const NavBar = () => {
  const location = useLocation()
  return (
    <nav className="ai-navbar">
      <div className="ai-navbar-logo">
        <FaBrain className="ai-navbar-logo-icon" />
        <span className="ai-navbar-title">AI Institute</span>
        <FaRocket className="ai-navbar-rocket" />
      </div>
      <ul className="ai-navbar-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/"><FaHome /> Home</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about"><FaInfoCircle /> About</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact"><FaEnvelope /> Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
