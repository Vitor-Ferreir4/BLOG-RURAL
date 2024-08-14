import React, { useState } from 'react';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';
import Menuzin from './Menuzin';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleSearchFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setShowSuggestions(false), 100);
  };

  const suggestions = [
    "Grupo 1",
    "Grupo 2",
    "Grupo 3",
    "Grupo 4",
    "Grupo 5",
    "Grupo 6",
    "Grupo 7"
  ];

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <button className="hamburger" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          <Link to='/' onClick={handleSuggestionClick} className='logo'>
            <img className="logo" src={require('../mídia/logo2.png')} alt='' height={90} width={90}/>
          </Link>
        </div>
        <div className="navbar-center">
          <div className="search-container">
            <input
              type="text"
              placeholder="Pesquisar..."
              className="search-bar"
              value={searchTerm}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {showSuggestions && (
              <div className="suggestions">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {sidebar && <Menuzin closeSidebar={toggleSidebar} />}
    </>
  );
};

export default Navbar;
