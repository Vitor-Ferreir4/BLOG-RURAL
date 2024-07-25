import React from 'react';
import '../CSS/Menuzin.css';

const Sidebar = ({ closeSidebar }) => {
  return (
    <div className="sidebar">
      <button className="close-btn" onClick={closeSidebar}>
        &times;
      </button>
      <a href="#home" onClick={closeSidebar} className="sidebar-link">Início</a>
      <a href="#contact" onClick={closeSidebar} className="sidebar-link">Contato</a>
    </div>
  );
};

export default Sidebar;