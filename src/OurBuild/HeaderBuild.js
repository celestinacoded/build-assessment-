import React from 'react'
import styled from 'styled-components';
import logo from "../githubImage/2.jpg";
import img from "../githubImage/mainimg.png";


export const HeaderBuild = () => {
    return (
       
       <Container>
           <Image src={img} />
           <Wrapper>
               <NavLink clr>Home</NavLink>
               <NavLink>Release Notes</NavLink>
               <NavLink>Help</NavLink>
            </Wrapper>
       </Container>
    );
};

export default HeaderBuild;

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: black;

`;


const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
background-color: white;
object-fit: cover;
cursor: pointer;
margin-bottom: 30px;
`;

const Wrapper = styled.div`
display: flex;
width: 300px;
justify-content: space-around;

`;

const Iogo = styled.div`
width:200px:
height: 80vh;
margin: 30px;
`;
const NavLink = styled.div`
font-weight: bold;
color: powderblue;
margin: 30px


`;

