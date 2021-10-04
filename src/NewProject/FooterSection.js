import { green } from '@mui/material/colors';
import React from 'react'
import styled from "styled-components";

const FooterSection = () => {
    return (
        <cContainer>
            <Wrapper>
            Footer
            </Wrapper>
        </cContainer>
    )
}

export default FooterSection


const container = styled.div`
width: 80px;
height: 80vh;
min-height: 80vh;
background -color: #F7F7F7;
`;
const Wrapper = styled.div`
width: 100%;
background-color: #EE3425;
`;

