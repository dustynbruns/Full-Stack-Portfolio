import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles/ContactButton.css';

const ContactButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/contact');
  };

  return (
    <button className="contact-button" onClick={handleClick}>
      Contact Me
    </button>
  );
};

export default ContactButton;