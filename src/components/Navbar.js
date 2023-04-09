import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandshake, FaCalculator, FaCloudSun, FaGamepad, FaHome } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">
            <FaHandshake />
            <span>Contact</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/calculator" className="navbar-link">
            <FaCalculator />
            <span>Calculator</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/weather" className="navbar-link">
            <FaCloudSun />
            <span>Weather</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/game" className="navbar-link">
            <FaGamepad />
            <span>Game</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;