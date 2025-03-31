import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // // Page Titles
  // const pageTitles = {
  //   "/": "Home",
  //   "/resume": "Resume/CV",
  //   "/publications": "Publications",
  //   "/featured-projects": "Projects",
  //   "/online-samples": "Online Samples",
  //   "/work-request": "Work Request",
  //   "/contact": "Contact Me",
  // };

  // const currentPageTitle = pageTitles[location.pathname] || "Page";

  return (
    <div className="navbar-container">
      {/* Hamburger Icon */}
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Full Navbar / Hamburger Menu */}
      <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
        <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/" className={location.pathname === "/" ? "nav-button active" : "nav-button"} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/resume" className={location.pathname === "/resume" ? "nav-button active" : "nav-button"} onClick={() => setMenuOpen(false)}>Resume/CV</Link></li>
          <li><Link to="/publications" className={location.pathname === "/publications" ? "nav-button active" : "nav-button"} onClick={() => setMenuOpen(false)}>Publications</Link></li>
          <li><Link to="/featured-projects" className={location.pathname === "/featured-projects" ? "nav-button active" : "nav-button"} onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/online-samples" className={location.pathname === "/online-samples" ? "nav-button active" : "nav-button"} onClick={() => setMenuOpen(false)}>Online Samples</Link></li>
          <li><Link to="/work-request" className={location.pathname === "/work-request" ? "nav-button active" : "nav-button"} onClick={() => setMenuOpen(false)}>Work Request</Link></li> 
          <li><Link to="/contact" className={location.pathname === "/contact" ? "nav-button active" : "nav-button"} onClick={() => setMenuOpen(false)}>Contact Me</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
