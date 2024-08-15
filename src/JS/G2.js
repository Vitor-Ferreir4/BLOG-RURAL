import React from "react";
import '../CSS/G2.css';


function G2() {
    return (
        <div className="G2">
            <header className="g2-header">
                <br></br>
                <h1>Ciclo da Cana: Do Açúcar ao Etanol</h1>
                <br></br>
                <p>Da Preciosidade à Versatilidade: Benefícios, Expansão e Desafios da Cana-de-Açúcar</p>
            </header>
            <br></br>
            <br></br>
            <div className="g2-content">
                <div className="g2-video">
                    <video width="616" height="347" controls>
                        <source src={require('../mídia/animaçãoG2.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
            <br></br>
            <br></br>
            <br></br>
                    <div className='paragrafos' id='paragrafos'>
                        <h2 className='prod'>Produção de Etanol no Brasil: Uma Abordagem Técnica e Sustentável</h2>
            <br></br>
                        <p>
                            O Brasil ocupa uma posição de destaque no cenário global como um dos maiores produtores de etanol, sendo a cana-de-açúcar a principal matéria-prima utilizada nesse processo. A produção de etanol no país envolve uma série de etapas que englobam processos químicos, físicos e biológicos, executados com elevado grau de tecnologia e eficiência.
                        </p>

                        <p>
                            Cultivo da Cana-de-Açúcar<br />
                            A cana-de-açúcar é uma planta adaptada ao clima tropical, encontrando no Brasil as condições ideais para seu desenvolvimento. O cultivo é realizado em larga escala, utilizando tecnologias avançadas para maximizar a produtividade. Essa planta é rica em sacarose, componente essencial para a produção de etanol, o que a torna uma matéria-prima extremamente eficiente.
                        </p>
                        <p>
                            Moagem da Cana<br />
                            Após a colheita, a cana-de-açúcar é submetida ao processo de moagem, onde é extraído o caldo da planta. Esse processo é realizado em moendas, máquinas robustas que esmagam a cana entre rolos pesados, liberando um líquido rico em açúcar conhecido como caldo bruto. Este caldo ainda contém fibras vegetais e outras impurezas que precisam ser removidas nas etapas subsequentes.
                        </p>
                        <p>
                            Clarificação do Caldo<br />
                            O caldo bruto passa por um processo de clarificação para a remoção de impurezas. Esse processo pode envolver métodos como decantação, filtração ou centrifugação, todos destinados a garantir a pureza do caldo e, consequentemente, a qualidade do etanol produzido. A clarificação é uma etapa crucial, pois impurezas remanescentes podem comprometer a eficiência da fermentação e a qualidade do produto final.
                        </p>
                        <p>
                            Fermentação<br />
                            O caldo clarificado é submetido à fermentação em tanques, onde leveduras específicas são adicionadas para converter o açúcar em etanol e dióxido de carbono (CO₂). Esse processo biológico, conhecido como fermentação alcoólica, é o coração da produção de etanol. A escolha das leveduras, bem como o controle rigoroso das condições de fermentação, são essenciais para maximizar a produção de etanol e minimizar subprodutos indesejados.
                        </p>
                        <p>
                            Destilação<br />
                            Após a fermentação, o vinho resultante, contendo etanol, é destilado. A destilação é o processo de separação do etanol do restante da mistura, como água e outras impurezas, por meio da aplicação de calor. O etanol destilado passa, então, por processos adicionais de purificação, garantindo a remoção de qualquer resíduo que possa afetar a sua qualidade.
                        </p>
                        <p>
                            Secagem e Armazenamento<br />
                            O etanol purificado é submetido a um processo de secagem para remover qualquer umidade residual, garantindo a qualidade do produto final. Em seguida, o etanol é armazenado em tanques apropriados, de onde será posteriormente distribuído para o mercado consumidor.
                        </p>
                        <p>
                            Seção 2: Tipos de biocombustiveis                        </p>
                        <p>
                        Biocombustíveis de Primeira e Segunda Geração 
                        </p>
                        <p>
                        Os biocombustíveis podem ser classificados em duas gerações, dependendo de suas fontes de matéria-prima e métodos de produção:
                        </p>
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default G2;