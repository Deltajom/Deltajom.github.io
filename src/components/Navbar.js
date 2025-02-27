import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  // Page titles based on route
  const pageTitles = {
    '/': 'Home',
    '/work-experience': 'Work Experience',
    '/publications': 'Publications',
    '/featured-projects': 'Featured Projects',
    '/work-request': 'Work Request',
    '/online-samples': 'Online Samples',
    '/contact': 'Contact Me',
  };

  const currentPageTitle = pageTitles[location.pathname] || 'Page';

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {/* Page Title Container */}
        <div className="nav-title-container">
          <div className="nav-title">{currentPageTitle}</div>
        </div>

        {/* Navigation Links */}
        <ul className="nav-list">
          <li><Link to="/" className="nav-button">Home</Link></li>
          <li><Link to="/work-experience" className="nav-button">Work Experience</Link></li>
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
