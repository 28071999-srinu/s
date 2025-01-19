import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ensure you have styles for your Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          WikiClone
        </Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="navbar-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
          {/* Add Articles link */}
          <li>
            <Link to="/articles" className="navbar-link">
              Articles
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
