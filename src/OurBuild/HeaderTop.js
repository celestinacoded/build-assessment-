import React from 'react'
import styled from "styled-components"
 const HeaderTop = () => {
    return (
        <Container>
            <ContainerTitle>GitHub Desktop</ContainerTitle>
            <ContainerSubTitle> Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow.

.</ContainerSubTitle>
            <Button>Download</Button>
        </Container>
    )
}
export default HeaderTop
const Container = styled.div`
width:100%;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

`
const ContainerTitle = styled.div`
width: 100%;
height: 80vh;
background-color: black:

`;

const ContainerSubTitle = styled.div`
width: 100%;;
height: 80vh;
margin: 30px;
display:flex:
background-colour: black; 
`;
const Button = styled.div`
width: 100%;;
height: 80vh;
background-color: white;
margin: 30px;
`;