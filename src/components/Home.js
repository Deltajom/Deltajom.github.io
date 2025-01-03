import React from 'react';
import './Home.css'; // Add styling in a separate CSS file if desired

const Home = () => {
  return (
    <div className="home">
      <img src="/mewcat2.png" alt="John Murray" className="profile-pic" />
      <h1>John Murray</h1>
      <h2>Graduate Research Assistant</h2>
      <p>
        Ph.D. Student at UMass Amherst<br />
        M.S. in Computer Engineering, UMass Amherst<br />
        B.S. in Computer Engineering, UMass Amherst
      </p>
      <p>
        I'm interested in Extended Reality technology, video streaming, computer networking,
        machine learning, cryptocurrencies, and accelerated computing.
      </p>
      <p>
        Hobbies: Weight lifting, fixing cars/electronics, gaming, Star Wars, and traveling.
      </p>
    </div>
  );
};

export default Home;
