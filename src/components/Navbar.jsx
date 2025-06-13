import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src="/3R.svg" alt="3R Partners" className="logo-img" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
