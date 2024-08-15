import React, { useState } from 'react';
import '../CSS/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import Menuzin from './Menuzin';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const handleSearchFocus = () => {
    setShowSuggestions(searchTerm.length > 0);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
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

  const groupRoutes = {
    "grupo 1": "/g1-guia.pdf",
    "grupo 2": "/G2",
    "grupo 3": "/g3-guia.pdf",
    "grupo 4": "/G4",
    "grupo 5": "/g5-guia.pdf",
    "grupo 6": "/G6",
    "grupo 7": "/G7",
    "g1": "/g1-guia.pdf",
    "g2": "/G2",
    "g3": "/g3-guia.pdf",
    "g4": "/G4",
    "g5": "/g5-guia.pdf",
    "g6": "/G6",
    "g7": "/G7"
  };

  const extractGroupNumber = (term) => {
    const regex = /(g[rp][auo][p]?o?)\s*(\d+)/i;
    const match = term.match(regex);
    
    if (match) {
      const groupNumber = match[2];
      return `grupo ${groupNumber}`;
    }
    
    return term.trim().toLowerCase();
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    navigateToRoute(suggestion);
  };

  const navigateToRoute = (term) => {
    const normalizedTerm = extractGroupNumber(term);
    const matchedRoute = Object.keys(groupRoutes).find(key => 
      normalizedTerm.includes(key)
    );

    if (matchedRoute) {
      const route = groupRoutes[matchedRoute];
      if (route) {
        if (route.endsWith('.pdf')) {
          window.open(route, '_blank');
        } else {
          navigate(route);
        }
      }
    } else {
      console.log('Página não encontrada para o termo:', term);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigateToRoute(searchTerm);
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
          <Link to='/' className='logo'>
            <img className="logo" src={require('../mídia/logo2.png')} alt='' height={90} width={90}/>
          </Link>
        </div>
        <div className="navbar-center">
          <form className="search-container" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Pesquisar..."
              className="search-bar"
              value={searchTerm}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              onChange={handleInputChange}
            />
            <button type="submit" className="search-icon">
              <FaSearch />
            </button>
            {showSuggestions && (
              <div className={`suggestions ${showSuggestions ? 'show' : ''}`}>
                {suggestions
                  .filter((suggestion) =>
                    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((suggestion, index) => (
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
          </form>
        </div>
      </div>
      {sidebar && <Menuzin closeSidebar={toggleSidebar} />}
    </>
  );
};

export default Navbar;
