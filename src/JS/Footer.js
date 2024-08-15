import '../CSS/Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footera(){
    return(
        <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-title">Sobre o AgroBlog</h3> 
            <p className="footer-description">O AgroBlog é seu portal definitivo para todas as novidades sobre agricultura, com foco em cana de açúcar, cacau e soja. Fique atualizado com as últimas notícias, técnicas e eventos no mundo rural.</p>
          </div>
          <div className="footer-contact">
            <h3 className="footer-title">Contato</h3>
            <p className="footer-description">Email: contatoAgroBlog@gmail.com</p>
            <p className="footer-description">Telefone: (71) 1234-5678</p>
            <div className="footer-social">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-iconInsta"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <p className="footer-copy">&copy; 2024 AgroBlog. Todos os direitos reservados.</p>
      </footer>
    )
}

export default Footera;
