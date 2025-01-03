import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

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
          setStatus('Failed to send email. Please try again.');
        }
      );

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Work Request</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Your Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default WorkRequest;