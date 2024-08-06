import React from 'react';
import '../CSS/G6.css';
import { Link } from 'react-router-dom';


function G6() {
  return (
    <div className="G6">
      <header className="g6-header">
        <h1>Soja no Brasil: De Grão Sagrado a Pilar do Agronegócio - Uma Jornada de Riqueza e Impactos</h1>
        <p>A Expansão da Soja: Benefícios Econômicos e Desafios Ambientais no Cenário Nacional</p>
      </header>
      <div className="g6-content">
        <div className="g6-video">
          <iframe
            width="616"
            height="347"
            src={require('../mídia/Hakari.mp4')}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
        <div className='paragrafos' id='paragrafos'>
          <h2 className='ctxt2'>Contexto 1</h2>
          <p>
            Originária de uma região conhecida como Manchúria, no Nordeste da China, a soja, inicialmente, era utilizada como moeda de troca entre comerciantes no século XVII. Ela migrou do Oriente para o Ocidente através das grandes navegações.
          </p>

          <p>
          Nos primórdios, era considerado um grão sagrado, e foi resultado do cruzamento natural entre duas espécies de soja selvagem. 
A soja chegou ao Brasil por volta do ano de 1882, na Bahia. O grão tornou-se ainda mais popular com a intensificação da migração japonesa, em meados do ano de 1908, que trouxe conhecimento e experiência prática acerca das melhores maneiras de cultivo.
          </p>

          <p>
          Em 1914, a cultura foi introduzida no estado do Rio Grande do Sul, mais precisamente na região de Santa Rosa. Os primeiros plantios em larga escala começaram a partir de 1924, dez anos depois.
Na década de 70, o grão já era a principal cultura do agronegócio brasileiro!
          </p>

          <p>
          Nessa época, houve também um aumento da demanda internacional pelo grão, o que favoreceu o início do trabalho comercial em larga escala.
          </p>

          <p>
          O Brasil tratou de ampliar os plantios de soja. Além disso, começou rapidamente a desenvolver novas tecnologias de cultivo, inclusive de novas  variedades da planta.
          </p>

          <p>
          Nas décadas seguintes, em 80 e 90, o cultivo sofreu forte expansão para a região conhecida como Polígono dos Solos Ácidos, que engloba os estados Mato Grosso do Sul, Goiás, Tocantins e Oeste da Bahia.
          </p>
          
          <strong>
            <p>
          Mas por que nesta região?
          </p>
            </strong>

          <p>
          Basicamente, foram dois fatores:
          </p>
          <ul className='liss'>
            <li>Na região, predomina o bioma cerrado, que apresenta topografia muito plana e favorável à mecanização (máquinas para realizar a colheita).</li>
            <li>Estudos profundos acerca da fertilização dos solos do cerrado, propiciando tecnologias e ferramentas para aumentar a produção.</li>
          </ul>  
          <p>
          É impossível não falar da Empresa Brasileira de Pesquisa Agropecuária (Embrapa) se o assunto é sobre quando a soja chegou no Brasil. Trata-se da empresa que mais investiu para a adaptação da soja no cerrado.
          </p>
          
          <p>
          Com pesquisas voltadas também para o desenvolvimento de novas sementes, a Embrapa, até os dias atuais, atua em pesquisas para desenvolver plantas mais resistentes a pragas, mais adaptadas ao clima e híbridos mais produtivos.
          </p>

          <p>
          Devido principalmente ao retorno econômico e à versatilidade do grão (uso em diversos setores). Além disso, ela contribui para a questão social, empregando milhares de pessoas ligadas direta ou indiretamente ao seu cultivo.
          </p>

          <p>
          Atualmente, estima-se que a cadeia produtiva da soja, segundo a APROsoja Brasil, reúna mais de 243 mil produtores, gerando um mercado de 1,4 milhão de empregos.
          </p>

          <p>
          Esses e outros fatos impulsionam o PIB do país, em conjunto com as demais cadeias do agronegócio.

          </p>

        </div>
        <h2 className='ctxt2'>Contexto 2</h2>
        <p>
        A produção de soja no Brasil não é tradicionalmente de interesse interno, mas uma imposição determinada por grupos externos que ditam o que nós devemos ou não produzir.
        </p>

        <p>
        O cerrado, antes visto como um solo pobre, ganhou então um novo olhar, pois surgiram insumos que corrigiam as alterações ou as deficiências de substâncias, tornando o solo apto à prática da agricultura. Outro motivo favorável para a expansão da soja foi o relevo mais plano.
        </p>

        <p>
        O Centro-Oeste atualmente é o segundo maior produtor de soja do país, ocupando uma condição geopolítica que favorece à produção. 
        </p>

        <p>
        É inegável que a soja seja geradora de riqueza, mas tais riquezas encontram-se concentradas nas mãos de poucos.
        </p>

        <p>
        Deve-se levar em consideração que esse tipo de produção provoca sérios problemas ambientais como: perda de solos, retirada da vegetação original, poluição dos solos e das águas, extinção das nascentes, morte de animais silvestres que consomem cereais com substâncias químicas, entre outros.
        </p>

        <a href="#readmore" className="g6-readmore">Leia mais</a>
      </div>
      <footer className="g6-footer">
        <div className="footer-item">
          <Link to='/G5' className='linkzin'>
             <img src={require('../mídia/G5.png')} alt="Rec 1" className="rec-image" />  
          </Link>
          <p className='sub-sub'>G5: Guia definitivo para o cultivo da soja</p>
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

export default G6;
