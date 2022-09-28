import styled from "styled-components"

export default function Footer() {
    return (
        <DivFooter>
            <ContainerBotoes>
                <Botao>
                    <h1>Não lembrei</h1>
                </Botao>
                <Botao>
                    <h1>Quase lembrei</h1>
                </Botao>
                <Botao>
                    <h1>Zap!</h1>
                </Botao>
            </ContainerBotoes>
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
    height: 30px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
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

