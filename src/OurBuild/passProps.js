import { color } from '@mui/system';
import React from 'react'
import styled from 'styled-components';
import image from "../githubImage/mainimg.png"

export const passProps = ({img,title,sub, subText}) => {
    return (
        <Holder>
<Container>
    <Image src={img} />
    <Content>
        <HeaderContent>{title}</HeaderContent>
        <SubContent>{sub}
        <span>{SubText}</span>
        </SubContent>
    </Content>
</Container>
        </Holder>
        
    );
};
export default  passProps;


const Holder = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
background-color: black;
`;

const Image = styled.img`
width: 400px;
height: 300px;
border-radius: 10px;
object-fit: contain;

`;

const Content = styled.div`
width: 500px;
`;

const SubContent = styled.div`
line-height:1.5;
color :blue;

span {
    color: blue;
    margin-left: 5px;

    :hover {

        cursor: pointer;
        font-size: 30px;
    };
};
`;
const HeaderContent= styled.div`
width: 100%;
height: 80vh;
font-size: 30px;
margin-bottom: 20px;
background-color: red;
`;


