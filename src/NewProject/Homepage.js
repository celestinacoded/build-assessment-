import styled from "styled-components";
import React from 'react';
import HeaderBar from "./HeaderBar";
import ServiceButton from "./service.Button";
import VideoSection from "./VideoSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";



export const Homepage = () => {
    const check = window.scrollY
    console.log(check)
    return (
      <Container>
          <Wrapper>
         <HeaderBar />
         <ServiceButton />
         <VideoSection />
         <ContactSection />
         <FooterSection />
          </Wrapper>
      </Container>
    );
};

export default Homepage

const Container = styled.div`
width: 100%
height: 80%
display: flex;

`;

const Wrapper = styled.div``;









