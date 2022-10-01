import styled from "styled-components"
import { useState } from "react"

import Footer from "./footer"

import perguntaLogo from "../assets/img/seta_play.png"
import setaVirar from "../assets/img/seta_virar.png"
import iconeErro from "../assets/img/icone_erro.png"
import iconeCerto from "../assets/img/icone_certo.png"
import iconeQuase from "../assets/img/icone_quase.png"


export default function Pergunta({ index, pergunta, resposta, escolhaResposta, setEscolhaResposta, perguntasConcluidas, setPerguntasConcluidas }) {
    const [variavelPergunta, setVariavelPergunta] = useState("PerguntaFechada")

    function verificarImagem() {
        switch(variavelPergunta) {
            case "PerguntaFechada":
                return perguntaLogo;
            case "PerguntaAbertaPergunta":
                return setaVirar
            case "PerguntaAbertaResposta":
                return setaVirar
            case "PerguntaFinalizadaErro":
                return iconeErro
            case "PerguntaFinalizadaAcerto":
                return iconeCerto
            default:
                return iconeQuase
        }
    }

    function verificaCard(card, index) { 

        if(card === "PerguntaAbertaResposta" && escolhaResposta === "") {
            return false
        }

        switch(card) {
            case "PerguntaFechada":
                return setVariavelPergunta("PerguntaAbertaPergunta");
            case "PerguntaAbertaPergunta":
                return setVariavelPergunta("PerguntaAbertaResposta")
            case "PerguntaAbertaResposta":
                setVariavelPergunta(`PerguntaFinalizada${escolhaResposta}`)
                setEscolhaResposta("")
                setPerguntasConcluidas(perguntasConcluidas += 1)
                break;
            default:
                return `Pergunta ${index + 1}`
        }   
    }

    function verificaTexto() {
        switch(variavelPergunta) {
            case "PerguntaFechada":
                return `Pergunta ${index + 1}`;
            case "PerguntaAbertaPergunta":
                return pergunta;
            case "PerguntaAbertaResposta":
                return resposta;
            case "PerguntaFinalizadaErro":
                return `Pergunta ${index + 1}`;
            case "PerguntaFinalizadaAcerto":
                return `Pergunta ${index + 1}`;
            default:
                return `Pergunta ${index + 1}`;
        }
    }
    
    return (
        <>
            <TagPergunta className={variavelPergunta}>
                <p>{verificaTexto()}</p>
                <img src={verificarImagem()} alt={index} onClick={() => verificaCard(variavelPergunta, index)}/>
            </TagPergunta>

            <Footer escolhaResposta={escolhaResposta} 
                    setEscolhaResposta={setEscolhaResposta} 
                    perguntasConcluidas={perguntasConcluidas}
                    />
        </>
    )
}

const TagPergunta = styled.div`
&&.PerguntaFechada {
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    && p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 19px;
        color: #333333;
    }
}
&&.PerguntaAbertaPergunta {
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0yellow, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    && img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    && h1 {
        font-size: 25px;
        font-weight: bold;
    }
}

&&.PerguntaAbertaResposta {
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0yellow, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    && img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    && h1 {
        font-size: 25px;
        font-weight: bold;
    }
}
&&.PerguntaFinalizadaErro {
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    && p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 19px;
        color: red;
        text-decoration: line-through;
    }
}
&&.PerguntaFinalizadaAcerto {
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
        && p {
            font-family: 'Recursive';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 19px;
            color: green;
            text-decoration: line-through;
        }
}
&&.PerguntaFinalizadaQuase {
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    && p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 19px;
        color: orange;
        text-decoration: line-through;
    }
}

`