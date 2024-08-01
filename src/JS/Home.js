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
          <img src={require('../mídia/banner.webp')} className='banner' alt='banner' />
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
              <img src={require('../mídia/CACAU.png')} alt="Carousel 1" />
            </div>
            <div>
              <img src={require('../mídia/CANA.png')} alt="Carousel 2" />
            </div>
            <div>
              <img src={require('../mídia/SOJA.png')} alt="Carousel 3" />
            </div>
          </Carousel>
        </section>
        <section className="section4">
          <Link to='/G1'>
            <div className="g1">
              <img src={require('../mídia/game1.png')} alt="Game 1" className="game-image" />
              <h3 className="game-title">GRUPO 1</h3>
            </div>
          </Link>
        </section>
        <section className="section">
          <div className="games">
            <Link to='/G2'>
              <div className="game-card">
                <img src={require('../mídia/POST CANA- GP2.png')} alt="Game 1" className="game-image" />
                <h3 className="game-title">GRUPO 2</h3>
              </div>
            </Link>
            <Link to='/G3'>
              <div className="game-card">
                <img src={require('../mídia/game2.png')} alt="Game 2" className="game-image" />
                <h3 className="game-title">GRUPO 3</h3>
              </div>
            </Link>
            <Link to='/G4'>
            <div className="game-card">
              <img src={require('../mídia/game3.png')} alt="Game 3" className="game-image" />
              <h3 className="game-title">GRUPO 4</h3>
            </div>
            </Link
          </div>
        </section>
        <section className="section">
          <div className="recommendations">
            <Link to='/G5'>
            <div className="recommendation-item">
              <img src={require('../mídia/G5.png')} alt="Rec 1" className="rec-image" />
              <h3 className="rec-title">GRUPO 5</h3>
            </div>
              </Link>
            <Link to='/G6'>
            <div className="recommendation-item">
              <img src={require('../mídia/G6.png')} alt="Rec 2" className="rec-image" />
              <h3 className="rec-title">GRUPO 6</h3>
            </div>
              </Link>
            <Link to='/G7'
            <div className="recommendation-item">
              <img src={require('../mídia/G7.png')} alt="Rec 3" className="rec-image" />
              <h3 className="rec-title">GRUPO 7</h3>
            </div>
              </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
