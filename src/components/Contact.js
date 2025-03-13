import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p>
        If you have any questions, collaboration requests, or just want to connect, 
        feel free to reach out via email.
      </p>
      <div className="contact-divider"></div>
      <p>
        Email: <a href="mailto:murray.john.o216@gmail.com">murray.john.o216@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
