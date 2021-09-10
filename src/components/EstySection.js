import { Container, Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import etsy from "../images/etsyy.gif"
const EtsySections = () => {
    return (
        <Container>
            <SectionContainer>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6} >
                        <Box>
                            <Background>
                                <Overlay data-aos="zoom-in" data-aos-delay="50"
                                    data-aos-duration="1000">
                                    <Gif src={etsy} />
                                </Overlay>
                            </Background>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box>
                            <TextBold>Etsy</TextBold>
                            <Text>purchase my coxy art from my shop!<br />stickers, art prints, digital wallpapers, and more!</Text>
                            <Button>Click me!</Button>
                        </Box>
                    </Grid>
                </Grid>
            </SectionContainer>
        </Container>

    )
}
const TextBold = styled.h1`
    font-size: 3rem;
    margin: 10px;
`;
const Text = styled.h2`
    font-size: 1.5rem;
`;
const Button = styled.div`
    cursor: pointer;
    font-size: 1.5rem;
    height: 80px;
    font-weight: bold;
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    background-color: rgb(215, 234, 248);
    border-radius: 40px;
`;
const Background = styled.div`
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;
    
`;
const Overlay = styled.div`
    position: absolute;
    height:100%;
    width: 100%;
    top:0;
    left:0;
    background-color: rgb(215, 234, 248);
    border-radius: 50%;
    z-index: 5;
`;
const Gif = styled.img`
    position: absolute;
    height:auto;
    width: 100%;
    bottom:0;
    left:0;
    z-index: 15;
`;
const Box = styled.div`
    padding: 0 5%;
    width: 90%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const SectionContainer = styled.div`
    width: 100%;
    padding: 5%;
    min-height: 80vh;
    font-family:  'Indie Flower', cursive;
    color:  #a8c6dd;
`;
export default EtsySections
