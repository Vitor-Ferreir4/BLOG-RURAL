import '../CSS/Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footera(){
    return(
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-title">Sobre o Verde</h3> 
            <p className="footer-description">O Verde é seu portal definitivo para todas as novidades e jogos populares. Fique atualizado com os lançamentos e eventos mais recentes no mundo dos games.</p>
          </div>
          <div className="footer-contact">
            <h3 className="footer-title">Contato</h3>
            <p className="footer-description">Email: contatoVerde@gmail .com</p>
            <p className="footer-description">Telefone: (71) 1234-5678</p>
            <div className="footer-social">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-iconInsta"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <p className="footer-copy">&copy; 2024 Verde. Todos os direitos reservados.</p>
      </footer>
    )
}

export default Footera;