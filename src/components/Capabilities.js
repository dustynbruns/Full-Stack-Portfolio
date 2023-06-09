import React from 'react';
import '../styles/Capabilities.css';
import { Link } from 'react-router-dom';

const Capabilities = () => {
  return (
    <div className="capabilities-container">
      <h2>Capabilities</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        condimentum, mi at interdum aliquam, augue massa blandit odio, ac
        lacinia ligula sem at sapien. Praesent at maximus mi, at varius neque.
        Curabitur lacinia euismod dolor, vel fermentum libero consequat id.
        Nullam interdum enim vel metus sagittis, vitae aliquet odio gravida.
      </p>
      <Link to="/contact">
        <button className="contact-button">Contact Me</button>
      </Link>
    </div>
  );
};

export default Capabilities;