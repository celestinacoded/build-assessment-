import React from "react";
import styled from "styled-components";
import logo from "../../githubImage/comlog.jpeg";

const Newproj = () => {
    return (

<Container>
    <Wrapper>
      <Logo src={logo} />
    </Wrapper>
</Container>
    )
}

export default Newproj

const Container = styled.div`
width :100%;
height: 80px;
background-color: #011834;
colour: white;

`;
  const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;z
  
  `;

  const Logo = styled.div`
  width: 100%;
  height: 80px;
  object-fit: contain;
  margin: 0 30px;

 
  `;
