import styled from "styled-components"
import { useState } from "react"

import perguntaLogo from "../assets/img/seta_play.png"
import setaVirar from "../assets/img/seta_virar.png"
import iconeErro from "../assets/img/icone_erro.png"
import iconeCerto from "../assets/img/icone_certo.png"
import iconeQuase from "../assets/img/icone_quase.png"

import { decks } from "../arrays/decks"

export default function Perguntas() {

    return (
        <>
            {decks.map((e, i) => <Pergunta index={i} />)}
        </>
    )

    function Pergunta({ index }) {
        return (
            <>
                <TagPergunta className="PerguntaFechada">
                    <p>Pergunta {index + 1}</p>
                    <img src={perguntaLogo}/>
                </TagPergunta>
            </>
        )
    }

    function PerguntaAbertaComponente() {
        return (
            <PerguntaAberta>
                <h1>O que e jsx???</h1>
                <img src={setaVirar} />
            </PerguntaAberta>
        )
    }

    function PerguntaFinalizadaErroComponente() {
        return (
            <PerguntaFinalizadaErro>
                <p>Pergunta 1</p>
                <img src={iconeErro} />
            </PerguntaFinalizadaErro>
        )
    }

    function PerguntaFinalizadaAcertoComponente() {
        return (
            <PerguntaFinalizadaAcerto>
                <p>Pergunta 1</p>
                <img src={iconeCerto} />
            </PerguntaFinalizadaAcerto>
        )
    }

    function PerguntaFinalizadaQuaseComponente() {
        return (
            <PerguntaFinalizadaQuase>
                <p>Pergunta 1</p>
                <img src={iconeQuase} />
            </PerguntaFinalizadaQuase>
        )
    }
};

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
    &&.PerguntaAberta {
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