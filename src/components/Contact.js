import React from 'react';
import './Contact.css'; // Import the new CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">
        If you have any questions, collaboration requests, or just want to connect, feel free to reach out via email.
      </p>

      <hr className="contact-divider" />

      <p className="contact-email">
        Email: <a href="mailto:murray.john.o216@gmail.com">murray.john.o216@gmail.com</a>
      </p>
    </div>
  );
};

export default Contact;
