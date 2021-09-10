import React from 'react'
import styled from 'styled-components'
import logo from "../images/bye-logo.png"
const Footer = () => {
    return (
        <FooterContainer data-aos="fade-up">
            <Text>Come Again</Text>
            <Logo src={logo} />
        </FooterContainer>
    )
}
const Text = styled.h1`
    font-family:  'Indie Flower', cursive;
    color: rgb(174, 134, 100);
`;
const Logo = styled.img`
    width: 200px;
    height: auto;
`;
const FooterContainer = styled.div`
    background: linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 243, 203) 100%);
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export default Footer
