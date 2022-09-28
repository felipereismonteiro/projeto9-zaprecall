import styled from "styled-components"
import logo from "../assets/img/logo.png"

export default function Header() {
    return (
        <Topo>
            <Img src={logo} alt="" />
            <H1>ZapRecall</H1>
        </Topo>
    )
};

const Topo = styled.header`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
`
const Img = styled.img`
    width: 52px;
`
const H1 = styled.h1`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
`