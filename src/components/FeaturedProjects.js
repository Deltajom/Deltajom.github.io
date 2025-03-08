import React, { useState } from 'react';
import './FeaturedProjects.css';

const FeaturedProjects = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">Featured Projects</h2>

      <ul className="projects-list">
        <li>
          <strong>TODO</strong><br />
          TODO<br />
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </li>
        <li>
          <strong>TODO</strong><br />
          TODO<br />
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">Project Details</a>
        </li>
        <li>
          <strong>TODO</strong><br />
          TODO<br />
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </li>
      </ul>

      {/* Featured Project Groups */}
      <h3 className="dropdown-title">All Projects</h3>
      {[1, 2, 3, 4, 5].map((num) => (
        <div key={num} className="dropdown">
          <button className="dropdown-btn" onClick={() => toggleDropdown(num)}>
            Group {num} {openDropdown === num ? "▲" : "▼"}
          </button>
          <div className={`dropdown-content ${openDropdown === num ? "show" : ""}`}>
            <p>Details about Group {num} go here.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
