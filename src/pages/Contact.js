import React from 'react';
import './pages.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or need assistance? Reach out to us using the following details:
      </p>
      <ul>
        <li>Email: contact@ourwebsite.com</li>
        <li>Phone: +91-123-456-7890</li>
        <li>Address: 123, Main Street, Your City, Your Country</li>
      </ul>
      <p>We look forward to hearing from you!</p>
    </div>
  );
};

export default Contact;
