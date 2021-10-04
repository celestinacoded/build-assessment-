import React from 'react'
import styled from "styled-components";

const serviceButton = () => {
    return (
       <Container>
           <Wrapper>
               <Card>
                   <Image />
                   <Content>
                       <Title>Title</Title>
                    <Desc>
                     service
                    </Desc>
                   </Content>
               </Card>
           </Wrapper>
       </Container>
    );
};

export default serviceButton


const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-color: #A71E4A;
`;


const Wrapper = styled.div``;


const Card = styled.div`
width: 300px;
background-color: white;
height: 500px;
border: 1px solid gray;
border-radius: 5px;
margin: 10px;
transition: all 350ms;
transform: scale(1);


:hover {

}

`;
const Image = styled.img``;

const Content = styled.div``;

const Title = styled.div``;



const Desc = styled.div``;




