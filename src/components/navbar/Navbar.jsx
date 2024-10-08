import React, { useState } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ background: '#000', color: '#fff' }}>
      <div className="container">
        {/* Left: Logo */}
        <div className="left-section me-auto">
          <a className="navbar-brand text-white" href="/">
            <h2 className="mb-0">Yeshara</h2>
          </a>
        </div>

        {/* Toggle Button for Mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center: Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <div className="center-section">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">Home</Link>           
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/faqs">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Right: Contact Us */}
          <div className="right-section ms-auto"> 
            <Link className="nav-link contact-btn btn btn-sm btn-light text-dark bg-light px-3 py-2" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
