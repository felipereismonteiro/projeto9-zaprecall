import styled from "styled-components"
import perguntaLogo from "../assets/img/seta_play.png"
import setaVirar from "../assets/img/seta_virar.png"

export default function Pergunta() {
    return(
        <>
            <PerguntaFechada>
                <P>Pergunta 1</P>
                <img src={perguntaLogo} />
            </PerguntaFechada>

            <PerguntaAberta>
                <h1>O que e jsx???</h1>
                <img src={setaVirar} alt="" />
            </PerguntaAberta>

            <PerguntaFechada>
                <P>Pergunta 1</P>
                <img src={perguntaLogo} />
            </PerguntaFechada>

            <PerguntaFechada>
                <P>Pergunta 1</P>
                <img src={perguntaLogo} />
            </PerguntaFechada>
        </>
    )
};

const PerguntaFechada = styled.div`
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
`

const P = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
`
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
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
`

