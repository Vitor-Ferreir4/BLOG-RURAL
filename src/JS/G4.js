import React from 'react';
import '../CSS/G6.css';
import { Link } from 'react-router-dom';

function G4() {
  return (
    <div className="G6">
      <header className="g6-header">
        <h1>Cacau no Brasil: De Fruto Sagrado a Joia do Agronegócio - Uma Jornada de Riqueza e Desafios</h1>
        <p>A Expansão do Cacau: Benefícios Econômicos e Desafios Ambientais no Cenário Nacional</p>
      </header>
      <div className="g6-content">
        <div className="g4-video">
          <video width="616" height="347" controls>
            <source src={require('../mídia/video g4.mp4')} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='paragrafos' id='paragrafos'>
          <h2 className='ctxt2'>Contexto 1</h2>
          <p>
            Originário da América Central e das florestas tropicais da Amazônia, o cacau era utilizado como moeda de troca e alimento sagrado pelos povos pré-colombianos. Através dos exploradores europeus, ele foi levado para outras regiões, incluindo o Brasil.
          </p>

          <p>
            O cacau chegou ao Brasil por volta do século XVII, trazido pelos colonizadores portugueses. A cultura do cacau se estabeleceu principalmente na Bahia, onde encontrou condições climáticas favoráveis para seu cultivo.
          </p>

          <p>
            No século XIX, a produção de cacau ganhou impulso no Brasil, e o grão se tornou uma importante mercadoria de exportação, especialmente para a Europa, onde o chocolate começava a se popularizar.
          </p>

          <p>
            Com o aumento da demanda internacional por cacau, os plantios no Brasil se expandiram rapidamente. O cacau se tornou uma cultura de grande importância econômica, sustentando milhares de famílias e comunidades.
          </p>

          <p>
            Além do valor econômico, o cacau também passou a ser reconhecido por sua versatilidade, sendo utilizado na fabricação de chocolate, cosméticos e outros produtos.
          </p>

          <p>
            Nas décadas seguintes, o cultivo de cacau se expandiu para outras regiões do Brasil, incluindo o Pará e o Espírito Santo, graças à pesquisa e ao desenvolvimento de novas técnicas de cultivo.
          </p>

          <strong>
            <p>
              Por que essas regiões foram escolhidas?
            </p>
          </strong>

          <p>
            Basicamente, por dois fatores:
          </p>
          <ul className='liss'>
            <li>As regiões apresentavam condições climáticas ideais para o cultivo do cacau, com chuvas regulares e temperaturas amenas.</li>
            <li>Incentivos governamentais e a criação de centros de pesquisa dedicados ao desenvolvimento do cacau, como a CEPLAC (Comissão Executiva do Plano da Lavoura Cacaueira).</li>
          </ul>
          <p>
            A CEPLAC foi fundamental para a modernização e expansão do cultivo de cacau no Brasil, promovendo técnicas de manejo sustentável e o desenvolvimento de novas variedades de cacau.
          </p>

          <p>
            Devido ao alto retorno econômico e à crescente demanda por produtos de cacau, o setor continua a ser uma importante fonte de emprego e renda para milhares de brasileiros.
          </p>

          <p>
            Atualmente, estima-se que a cadeia produtiva do cacau no Brasil empregue milhares de pessoas, desde o plantio até a produção de chocolate e outros produtos derivados.
          </p>

          <p>
            A produção de cacau tem impacto significativo no PIB do país, contribuindo para o crescimento do setor agroindustrial.
          </p>

        </div>
        <h2 className='ctxt2'>Contexto 2</h2>
        <p>
          A produção de cacau no Brasil enfrenta desafios significativos, incluindo doenças como a vassoura-de-bruxa, que dizimou plantações inteiras nas décadas de 1980 e 1990.
        </p>

        <p>
          O cacau é uma cultura sensível às condições ambientais, e o manejo inadequado pode levar a problemas como erosão do solo, desmatamento e perda de biodiversidade.
        </p>

        <p>
          A produção sustentável de cacau é essencial para garantir a preservação das florestas tropicais e a proteção dos ecossistemas onde o cacau é cultivado.
        </p>

        <p>
          Embora o cacau seja uma importante fonte de renda, a distribuição dessa riqueza ainda é desigual, com pequenos agricultores enfrentando dificuldades para competir com grandes produtores.
        </p>

        <p>
          A produção de cacau deve ser equilibrada com a proteção ambiental para garantir a sustentabilidade a longo prazo da cultura e dos meios de subsistência dos agricultores.
        </p>

        <a href="g3-guia.pdf" target="_blank" rel="noopener noreferrer" className="g6-readmore">Leia mais</a>
      </div>
      <footer className="g6-footer">
        <div className="footer-item">
          <Link to='/G5' className='linkzin'>
            <img src={require('../mídia/G5.png')} alt="Rec 1" className="rec-image" />  
          </Link>
          <p className='sub-sub'>G5: Guia definitivo para o cultivo do cacau</p>
        </div>
        <div className="footer-item">
          <Link to='/G7' className='linkzin'>
            <img src={require('../mídia/G7.png')} alt="Rec 3" className="rec-image" /> 
          </Link> 
          <p className='sub-sub'>G7: Agrocast</p>
        </div>
      </footer>
    </div>
  );
}

export default G4;
