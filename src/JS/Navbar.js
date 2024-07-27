import React, { useState } from 'react';
import '../CSS/Navbar.css';
import Menuzin from './Menuzin';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="#home" className="nav-link">Início</a>
        <a href="#contact" className="nav-link">Contato</a>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <input type="text" placeholder="Pesquisar..." className="search-bar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
