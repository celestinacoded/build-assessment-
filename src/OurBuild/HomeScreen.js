import React from 'react'
import styled from "styled-components";
import HeaderBuild from "./HeaderBuild";
import HeaderTop  from "./HeaderTop";
import Image from "../githubImage/mainimg.png"


const HomeScreen = () => {
    return(
        <Container>
            <Wrapper>
                <HeaderBuild />
                <Image />
                <HeaderTop />
            </Wrapper>
        </Container>
    );
};

export default HomeScreen;


const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
color: ;#F7F7F7;
background-image:url("img1.svg");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
padding-top: 50px
`;

const Wrapper = styled.div`
width: 100%;
height:80vh;
background-color:white;
margin: 30px;
display: flex:
`;

const image = styled.img`
width: 100%;
display: flex;
flex-direction: column;

`;