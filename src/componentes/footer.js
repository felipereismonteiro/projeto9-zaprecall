import styled from "styled-components"
import {decks} from "../arrays/decks"

export default function Footer({resposta ,setResposta}) {

    function verificaResposta(escolha) {   
        if(resposta === "") {
            setResposta(escolha)
        } else {
            return false
        }
    }

    return (
        <DivFooter>
            <ContainerBotoes>
                <Botao onClick={() => verificaResposta("Não lembrei")}>
                    <h1>Não lembrei</h1>
                </Botao>
                <Botao onClick={() => verificaResposta("Quase lembrei")}>
                    <h1>Quase lembrei</h1>
                </Botao>
                <Botao onClick={() => verificaResposta("Zap!")}>
                    <h1>Zap!</h1>
                </Botao>
            </ContainerBotoes>
            <ContadorTexto>{`0/${decks.length} Concluídos`}</ContadorTexto>
        </DivFooter>
    )
};

const DivFooter = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`
const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
`
const Botao = styled.button`
    width: 90px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding:5px;
    &&:first-child {
        background-color: #FF3030;  
    }
    &&:nth-child(2) {
        background-color: #FF922E; 
    }
    &&:last-child {
        background-color: #2FBE34;  
    }
`
const ContadorTexto = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
`   
