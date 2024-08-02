import React from 'react';
import '../CSS/G6.css';

function G6() {
  return (
    <div className="G6">
      <header className="g6-header">
        <h1>Seguro rural: ministério anuncia recurso adicional exclusivo para o Rio Grande do Sul</h1>
        <p>13,29 milhões serão aplicados exclusivamente no estado, para apoio e contratação de cerca de 31 mil produtores</p>
      </header>
      <div className="g6-content">
        <div className="g6-video">
          <iframe 
            width="560" 
            height="315" 
            src={require('../mídia/Hakari.mp4')}
            title="YouTube video" 
            allowFullScreen
          ></iframe>
        </div>
        <p>
          O Ministério da Agricultura e Pecuária (Mapa) publicou, nesta segunda-feira (29), uma resolução que libera a distribuição do orçamento de R$ 13,29 milhões para contratação exclusiva de subvenção ao prêmio do seguro rural para os produtores do Rio Grande do Sul, que utilizarem a política pública nas operações de inverno de 2024.
          Deste total, R$ 5,5 milhões serão destinados para subvenção ao seguro rural em pecuária, R$ 4,29 milhões para a contratação de aproximadamente 31 mil produtores, abrangendo 250 mil hectares, e os restantes R$ 3,5 milhões serão destinados para o seguro de grãos de inverno. 
          <br /><br />
          Confira as principais informações sobre as medidas:
        </p>
        <ul>
          <li>Apoio específico para agricultura, pecuária, com um previsto de apoio no seguro.</li>
          <li>Foco em operações de inverno 2024.</li>
        </ul>
        <h2>Contratação do seguro rural</h2>
        <p>
          O produtor que tiver interesse em contratar o seguro rural deve procurar um corretor ou uma seguradora que opere o seguro rural. 
          O seguro rural cobre prejuízos causados por fenômenos naturais. A subvenção ao prêmio do seguro rural é um subsídio financeiro pago diretamente ao produtor. 
          <br /><br />
          O seguro rural pode ser contratado por produtores, pessoa física ou jurídica, com cadastro regularizado, que cultivem ou criem espécies contempladas pelas subvenções. 
        </p>
        <a href="#readmore" className="g6-readmore">Leia mais</a>
      </div>
      <footer className="g6-footer">
        <div className="footer-item">
          <img src={require('../mídia/TESTE DO CAROUSEL.jpg')} />
          <p>Produção Rural: A força que movimenta o campo e impulsiona o país</p>
        </div>
        <div className="footer-item">
          <img src={require('../mídia/TESTE DO CAROUSEL.jpg')} />
          <p>Produção Rural: A força que movimenta o campo e impulsiona o país</p>
        </div>
      </footer>
    </div>
  );
}

export default G6;
