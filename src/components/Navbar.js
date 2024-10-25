import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-name">JEFFREY GUO</div>
      <ul className="navbar-links">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;