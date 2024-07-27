<<<<<<< HEAD
import React, { useState } from 'react';
import '../CSS/Menuzin.css';

const Menuzin = ({ closeSidebar, sidebar }) => {
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [animationsOpen, setAnimationsOpen] = useState(false);
  const [podcastOpen, setPodcastOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'guides') {
      setGuidesOpen(!guidesOpen);
    } else if (dropdown === 'animations') {
      setAnimationsOpen(!animationsOpen);
    } else if (dropdown === 'podcast') {
      setPodcastOpen(!podcastOpen);
    }
  };

  return (
    <>
      <div className={`overlay ${sidebar ? 'show' : ''}`} onClick={closeSidebar}></div>
      <div className={`sidebar ${sidebar ? 'show' : ''}`}>
        <button className="close-btn" onClick={closeSidebar}>
          &times;
        </button>
        <div className="dropdown">
          <a href="#guides" onClick={() => toggleDropdown('guides')} className="sidebar-link">Guias</a>
          {guidesOpen && (
            <div className="dropdown-content">
              <a href="#group1" onClick={closeSidebar} className="sidebar-link">Grupo 1</a>
              <a href="#group2" onClick={closeSidebar} className="sidebar-link">Grupo 2</a>
              <a href="#group3" onClick={closeSidebar} className="sidebar-link">Grupo 3</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <a href="#animations" onClick={() => toggleDropdown('animations')} className="sidebar-link">Animações</a>
          {animationsOpen && (
            <div className="dropdown-content">
              <a href="#group1" onClick={closeSidebar} className="sidebar-link">Grupo 1</a>
              <a href="#group2" onClick={closeSidebar} className="sidebar-link">Grupo 2</a>
              <a href="#group3" onClick={closeSidebar} className="sidebar-link">Grupo 3</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <a href="#podcast" onClick={() => toggleDropdown('podcast')} className="sidebar-link">Podcast</a>
          {podcastOpen && (
            <div className="dropdown-content">
              <a href="#group1" onClick={closeSidebar} className="sidebar-link">Grupo 1</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menuzin;
=======
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
>>>>>>> 586731e595177bf2599dcb5ced458a1aa331bf13
