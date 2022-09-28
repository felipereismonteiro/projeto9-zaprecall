import styled from "styled-components"

import Footer from "./footer"
import Header from "./header"

export default function Layout() {
    return (
        <Container>
            <Header />
            <Footer/>
        </Container>
    )
};

const Container = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`



