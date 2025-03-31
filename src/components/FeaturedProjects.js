import React, { useState } from 'react';
import './FeaturedProjects.css';

// Object to store unique descriptions for each category
const projectDescriptions = { "Networking": "Projects related to network programming, socket communication, and distributed systems.",
  "Unreal Engine": "Unreal Engine projects focusing on real-time rendering and interactive simulations.",
  "Unity": "Unity-based projects, including VR, AR, and game development.",
  "C++": "C++ projects covering high-performance computing, system programming, and algorithm optimization.",
  "Python": "Python-based projects involving automation, data science, and machine learning.",
  "Other": "Miscellaneous projects that don’t fit into the above categories."
};

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

      {[
        "Networking",
        "Unreal Engine",
        "Unity",
        "C++",
        "Python",
        "Other"
      ].map((category) => (
        <div key={category} className="dropdown">
          <button className="dropdown-btn" onClick={() => toggleDropdown(category)}>
            {category} Projects {openDropdown === category ? "▲" : "▼"}
          </button>
          <div className={`dropdown-content ${openDropdown === category ? "show" : ""}`}>
            <p>{projectDescriptions[category]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProjects;
