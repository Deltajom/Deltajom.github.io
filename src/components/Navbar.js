import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); // Get current page

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <Link to="/" className={`nav-button ${location.pathname === "/" ? "active" : ""}`}>Home</Link>
          </li>
          <li>
            <Link to="/resume" className={`nav-button ${location.pathname === "/resume" ? "active" : ""}`}>Resume/CV</Link>
          </li>
          <li>
            <Link to="/publications" className={`nav-button ${location.pathname === "/publications" ? "active" : ""}`}>Publications</Link>
          </li>
          <li>
            <Link to="/featured-projects" className={`nav-button ${location.pathname === "/featured-projects" ? "active" : ""}`}>Projects</Link>
          </li>
          <li>
            <Link to="/work-request" className={`nav-button ${location.pathname === "/work-request" ? "active" : ""}`}>Work Request</Link>
          </li>
          <li>
            <Link to="/online-samples" className={`nav-button ${location.pathname === "/online-samples" ? "active" : ""}`}>Online Samples</Link>
          </li>
          <li>
            <Link to="/contact" className={`nav-button ${location.pathname === "/contact" ? "active" : ""}`}>Contact Me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
