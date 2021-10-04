import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {AiOutlineSetting, AiOutlineFlag } from "react-icons/ai"
import {FcHome, FcAbout} from "react-icons/fc";
import Img from "../githubImage/logo.jpeg";




const HeaderNav = () => {
    return(
        <Container>
            <Wrapper>
                <Logo src={Img} />
             <NavLink>
                 <MyLink to="/">
                     <FcHome />
                </MyLink>

                <MyLink to="/about">
                    <FcAbout />
                </MyLink>
                <MyLink to="/flag">
                      <AiOutlineFlag /> 
                 </MyLink>
                <MyLink to="/setting">
                     <AiOutlineSetting />
                </MyLink>
                
            </NavLink>
            
            </Wrapper>
        </Container>
    )
}

export default HeaderNav

const NavLink = styled.div`
  display: flex;
`;

const MyLink = styled(Link)`
 margin: 0 10px;
 color: white;
 text-decoration: none;
 width: 100px;
 height: 40px;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 5px;
 transition: all 350ms;
 background-color: rgba(0, 0, o, 0.1);

 :hover {
     background-color: teal;
     color: white;
     font-size: 30px
 }
`;


const Logo = styled.img`
width: 100px;
height: 80px;
object-fit: contain;
margin: 0 10px;
`;


const Container = styled.div`
width: 100%;
height: 90px;
background-color: black;
color: darkblue;
`;

const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;

`;
