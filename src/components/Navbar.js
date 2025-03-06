import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Navigation Links */}
        <ul className="nav-list">
          <li><Link to="/" className="nav-button">Home</Link></li>
          <li><Link to="/resume" className="nav-button">Resume/CV</Link></li>
          <li><Link to="/publications" className="nav-button">Publications</Link></li>
          <li><Link to="/featured-projects" className="nav-button">Projects</Link></li>
          <li><Link to="/work-request" className="nav-button">Work Request</Link></li>
          <li><Link to="/online-samples" className="nav-button">Online Samples</Link></li>
          <li><Link to="/contact" className="nav-button">Contact Me</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
