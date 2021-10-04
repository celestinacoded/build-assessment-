import React from 'react'
import styled from "styled-components";
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import Logo from "../githubImage/logo.jpeg";

const HeaderBar = () => {
    return (
        <Container>
            <Wrapper> 
           <Icon src="../githubImage/logo.jpeg"></Icon>
            <Navigation>

                <Nav>
                     <HomeIcon />
                    <span>Home</span>
                </Nav>

                <Nav>
                     <PersonIcon />
            
                </Nav>
                <Nav>
                     <SettingsIcon />
                    
                </Nav>
            </Navigation >
           
           </Wrapper>
       </Container>
    );
       
};

export default HeaderBar

const Nav = styled.div`
width: 100%;
margin: 0 30px;
display: flex;
align-items: center;

span {
    font-weight: bold;
    text-transform: uppercase;
    position: relative;

:after {
content: "";
height: 3px;
width: 100%
background-color: white;
position: absolute;
left: 0;
bottom: -2px;
opacity: 0;
transition: all 400ms;
transform: scale(0);
transform-origin: center;
};
};

:hover {
    cursor: painter;
    span {
        :after {
            opacity: 1;
            transform: scale(1);
        }
    }
}
`;

const Navigation = styled.div`
display: flex;
color: white;
`;
const Container = styled.div`
width: 100%;
height: 100%;
background-color: #252A2F;
min-height:100vh
background-image: url("mainimg.jpng");
background-size: cover;
background-position: center;
background-repeat: no-repeat;

`;



const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
/* flex-wrap: wrap; */

`;

const Icon = styled.img`
width: 100%
`;
