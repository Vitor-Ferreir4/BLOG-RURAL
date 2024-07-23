import React, { useState } from 'react';
import '../CSS/Navbar.css';
import Menuzin from './Menuzin';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="hamburger" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <a href="#home" className="nav-link">Início</a>
        <a href="#contact" className="nav-link">Contato</a>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <input type="text" placeholder="Pesquisar..." className="search-bar" />
        </div>
      </div>
      {sidebar && <Menuzin closeSidebar={toggleSidebar} />}
    </div>
  );
};

export default Navbar;
