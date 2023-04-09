import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ContactButton.css';

const ContactButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="contact-button">
      <button onClick={handleClick}>Contact Me</button>
    </div>
  );
};

export default ContactButton;