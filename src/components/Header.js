import React from 'react'
import video from '../images/video.mp4'
import styled from 'styled-components'
import logo from "../images/logo.png"
import dribble from "../images/dribble.png"
import etsy from "../images/etsy.png"
import instagram from "../images/instagram.png"
import youtube from "../images/youtube.png"
import { Container } from '@material-ui/core'

const Header = () => {
    return (
        <div data-aos="fade-up">
            <Nav>
                <Container>
                    <NavLeft>
                        <Logo src={logo} />

                    </NavLeft>
                    <NavLink>
                        <Image src={dribble} />
                        <Image src={etsy} />
                        <Image src={instagram} />
                        <Image src={youtube} />
                    </NavLink>
                </Container>
            </Nav>
            <Video src={video} autoPlay loop preload />
            <Gradient></Gradient>
        </div>
    )
}
const Gradient = styled.div`
    padding: 0;
    margin: 0;
    background: linear-gradient(rgb(253, 238, 206) 0%, rgba(255, 255, 255, 0) 100%);
    height: 205px;
    width: 100%;
    margin-top: -5px;
`;
const Video = styled.video`
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
`;
const Logo = styled.img`
    height: 100px;
    width: auto;
    margin-top: 50px;
    
`;
const Image = styled.img`
    height: 50px;
    width: auto;
    margin: 0 4px;
    cursor: pointer;
`;
const Nav = styled.div`
    position: fixed;
    height: 300px;
    width: 100%;
    z-index:888;
`;
const Welcometext = styled.div`
    height:100px ;
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: bold;
    color: white;
    font-family:  'Indie Flower', cursive;
`;
const NavLeft = styled.div`
    height:100px ;
    float: left;
    display: flex;
    align-items: center;
`;
const NavLink = styled.div`
    float: right; 
    height   :100px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export default Header
