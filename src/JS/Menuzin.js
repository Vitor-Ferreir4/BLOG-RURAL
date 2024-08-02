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
              <a href="/G1" onClick={closeSidebar} className="sidebar-link">Grupo 1</a>
              <a href="/G3" onClick={closeSidebar} className="sidebar-link">Grupo 3</a>
              <a href="/G5" onClick={closeSidebar} className="sidebar-link">Grupo 5</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <a href="#animations" onClick={() => toggleDropdown('animations')} className="sidebar-link">Animações</a>
          {animationsOpen && (
            <div className="dropdown-content">
              <a href="/G2" onClick={closeSidebar} className="sidebar-link">Grupo 2</a>
              <a href="/G4" onClick={closeSidebar} className="sidebar-link">Grupo 4</a>
              <a href="/G6" onClick={closeSidebar} className="sidebar-link">Grupo 6</a>
            </div>
          )}
        </div>
        <div className="dropdown">
          <a href="#podcast" onClick={() => toggleDropdown('podcast')} className="sidebar-link">Podcast</a>
          {podcastOpen && (
            <div className="dropdown-content">
              <a href="/G7" onClick={closeSidebar} className="sidebar-link">Grupo 7</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menuzin;