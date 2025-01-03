import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/work-experience">Work Experience</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/featured-projects">Projects</Link></li>
        <li><Link to="/work-request">Work Request</Link></li>
        <li><Link to="/online-samples">Online Samples</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
