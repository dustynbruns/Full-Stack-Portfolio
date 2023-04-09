import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <img
          src="path/to/your/photo"
          alt="Your name"
          className="header-photo"
        />
        <div className="header-description">
          <h1>Your Name</h1>
          <p>Your brief description</p>
        </div>
      </div>
    </div>
  );
};

export default Header;