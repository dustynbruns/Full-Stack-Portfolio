import React from 'react';
import '../styles/ContactScreen.css';
import ParticlesBg from 'particles-bg';
import Handshake from '../assets/Handshake.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


function ContactScreen() {
    return (
      <div className="ContactScreen">
        <div className="card">
          <img className="card-image" src={Handshake} alt="Your description" />
          <h2 className="card-title card-text">Let's get in touch!</h2>
          <p className="card-paragraph card-text">Click on any of the logos below to contact me. I look forward to doing business with you!</p>
          <div className="icon-container">
            <a href="mailto:your.email@example.com" className="icon-link">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="tel:+123456789" className="icon-link">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <ParticlesBg type="cobweb" color="#ffffff" num={50} bg={true} />
        </div>
      </div>
    );
  }
  
  export default ContactScreen;
