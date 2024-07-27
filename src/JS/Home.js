import React from 'react';
import '../CSS/Home.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
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
              <img src={require('../mídia/teste do carrosel.jpg')} alt="Carousel 1" />
            </div>
            <div>
              <img src={require('../mídia/TESTE DO CAROUSEL.jpg')} alt="Carousel 2" />
            </div>
            <div>
              <img src={require('../mídia/pikachu.png')} alt="Carousel 3" />
            </div>
          </Carousel>
        </section>
        <section className="section4">
          <div className="g1">
            <img src={require('../mídia/game1.png')} alt="Game 1" className="game-image" />
            <h3 className="game-title">GRUPO 1</h3>
          </div>
        </section>
        <section className="section">
          <div className="games">
            <div className="game-card">
              <img src={require('../mídia/POST CANA- GP2.png')} alt="Game 1" className="game-image" />
              <h3 className="game-title">GRUPO 2</h3>
            </div>
            <div className="game-card">
              <img src={require('../mídia/game2.png')} alt="Game 2" className="game-image" />
              <h3 className="game-title">GRUPO 3</h3>
            </div>
            <div className="game-card">
              <img src={require('../mídia/game3.png')} alt="Game 3" className="game-image" />
              <h3 className="game-title">GRUPO 4</h3>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="recommendations">
            <div className="recommendation-item">
              <img src={require('../mídia/G5.png')} alt="Rec 1" className="rec-image" />
              <h3 className="rec-title">GRUPO 5</h3>
            </div>
            <div className="recommendation-item">
              <img src={require('../mídia/G6.png')} alt="Rec 2" className="rec-image" />
              <h3 className="rec-title">GRUPO 6</h3>
            </div>
            <div className="recommendation-item">
              <img src={require('../mídia/G7.png')} alt="Rec 3" className="rec-image" />
              <h3 className="rec-title">GRUPO 7</h3>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-title">Sobre o Verde</h3>
            <p className="footer-description">O Verde é seu portal definitivo para todas as novidades e jogos populares. Fique atualizado com os lançamentos e eventos mais recentes no mundo dos games.</p>
          </div>
          <div className="footer-contact">
            <h3 className="footer-title">Contato</h3>
            <p className="footer-description">Email: contato@gamehub.com</p>
            <p className="footer-description">Telefone: (71) 1234-5678</p>
            <div className="footer-social">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-iconInsta"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <p className="footer-copy">&copy; 2024 GameHub. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;
