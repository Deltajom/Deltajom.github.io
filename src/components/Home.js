import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src="/mewcat2.png" alt="John Murray" className="profile-pic" />
        <h1>John Murray</h1>
        <h2>Graduate Research Assistant</h2>
        <p className="bio-text">
          Ph.D. Student at UMass Amherst<br />
          M.S. in Computer Engineering, UMass Amherst<br />
          B.S. in Computer Engineering, UMass Amherst
        </p>
        <p className="interests">
          I'm interested in Extended Reality technology, video streaming, computer networking,
          machine learning, cryptocurrencies, and accelerated computing.
        </p>
        <p className="hobbies">
          Hobbies: Weight lifting, fixing cars/electronics, gaming, Star Wars, saxophone and traveling
        </p>
      </div>
    </div>
  );
};

export default Home;
