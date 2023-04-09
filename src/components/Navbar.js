import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Navbar.css';
import handshakeIcon from 'path/to/handshakeIcon';
import calculatorIcon from 'path/to/calculatorIcon';
import weatherIcon from 'path/to/weatherIcon';
import gameIcon from 'path/to/gameIcon';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            <img src={handshakeIcon} alt="Contact" className="nav-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/calculator" activeClassName="active-link">
            <img src={calculatorIcon} alt="Calculator" className="nav-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/weather" activeClassName="active-link">
            <img src={weatherIcon} alt="Weather" className="nav-icon" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/game" activeClassName="active-link">
            <img src={gameIcon} alt="Game" className="nav-icon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;