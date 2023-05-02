// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Header.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item" data-testid="navbar-link-home">
          Math-MAG
        </NavLink>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <NavLink
            to="/"
            className="navbar-item"
            data-testid="navbar-link-home"
          >
            Home
          </NavLink>
          <NavLink
            to="/calculator"
            className="navbar-item"
            data-testid="navbar-link-calculator"
          >
            Calculator
          </NavLink>
          <NavLink
            to="/quote"
            className="navbar-item"
            data-testid="navbar-link-quote"
          >
            Quote
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
