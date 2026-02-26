import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './WorkRequest.css'; // Import the CSS for styling

const WorkRequest = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      reply_to: email,
      message: message,
    };

    emailjs
      .send('service_optb6mr', 'template_m9e0x8t', templateParams, 'AVomg9AynDsnqSLmh')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Email sent successfully!');
        },
        (error) => {
          console.error('FAILED...', error);
          setStatus('Failed to send email.');
        }
      );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="work-request-container">
      <h2>Submit a Work Request</h2>
      <p className="work-description">
        Have an idea for an open-source project or need a custom solution? Feel free to submit a request. 
        Due to time constraints, responses may take a while.
      </p>

      <form onSubmit={handleSubmit} className="work-request-form">
        <label>Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Your Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">Send</button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default WorkRequest;
