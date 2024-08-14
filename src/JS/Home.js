import React from 'react';
import '../CSS/Home.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <main className="main-content">
        <section className="section3">
          <img src={require('../mídia/banner4.jpg')} className='banner' alt='banner' height={429.19}/>
        </section>
        <section className="section2">
          <Carousel
            className="carousel"
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            dynamicHeight
          >
            <div>
              <img src={require('../mídia/cacau.avif')} alt="Carousel-1" />
            </div>
            <div>
              <img src={require('../mídia/CANA.png')} alt="Carousel 2" />
            </div>
            <div>
              <img src={require('../mídia/SOJA.webp')} alt="Carousel 3" />
            </div>
          </Carousel>
        </section>
        <section className="section4">
            <div className="g1">
            <a href="g1-guia.pdf" target="_blank" rel="noopener noreferrer" className="linkzin">
              <img src={require('../mídia/g1-card.jpg')} alt="Game 1" className="game-image" />
              <h3 className="game-title">GRUPO 1</h3>
            </a>
            </div>
        </section>
        <section className="section">
          <div className="games">
              <div className="game-card">
              <Link to='/G2' className='linkzin'>
                  <img src={require('../mídia/POST CANA- GP2.png')} alt="Game 1" className="game-image" />
                  <h3 className="game-title">GRUPO 2</h3>
              </Link>
              </div>
              <div className="game-card">
              <a href="g3-guia.pdf" target="_blank" rel="noopener noreferrer" className="linkzin">
                <img src={require('../mídia/G4.png')} alt="Game 2" className="game-image" />
                <h3 className="game-title">GRUPO 3</h3>
              </a>
              </div>
              <div className="game-card">
            <Link to='/G4' className='linkzin'>
                <img src={require('../mídia/g4-card.jpg')} alt="Game 3" className="game-image" />
                <h3 className="game-title">GRUPO 4</h3>
            </Link>
              </div>
          </div>
        </section>
        <section className="section">
          <div className="recommendations">
                <div className="recommendation-item">
                <a href="g5-guia.pdf" target="_blank" rel="noopener noreferrer" className="linkzin">
                  <img src={require('../mídia/G5.png')} alt="Rec 1" className="game-image" />
                  <h3 className="rec-title">GRUPO 5</h3>
                </a>
                </div>
              <div className="recommendation-item">
            <Link to='/G6' className='linkzin'>
                <img src={require('../mídia/g6-card.png')} alt="Rec 2" className="game-image" />
                <h3 className="rec-title">GRUPO 6</h3>
            </Link>
              </div>
              <div className="recommendation-item">
            <Link to='/G7' className='linkzin'>
                <img src={require('../mídia/G7.png')} alt="Rec 3" className="game-image" />
                <h3 className="rec-title">GRUPO 7</h3>
            </Link>
              </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
