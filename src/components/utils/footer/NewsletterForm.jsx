import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Footer.css';
import Send from '../../../assets/images/Send.png'
const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setEmail('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="newsletter-form">
      <Form.Group className="input-wrapper">
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          aria-label="Enter your email for newsletter"
          required
          className="email-input"
        />
        <button type="submit" className="submit-button" aria-label="Subscribe">
          <img
            src={Send}
            alt="Submit"
            className="submit-icon"
          />
        </button>
      </Form.Group>
    </Form>
  );
};

export default NewsletterForm;