import styled from 'styled-components'; 

export const ContainerEvent = styled.div`
    position: relative;
    background: #0F6CDE;
    margin: 0;
    font-family: Arial;
    color: #d4d6d4;
`;

export const ColsEvent = styled.div`
    background: #0f6cde;
    position: relative;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    color: #000000;
`;

export const TitleEvent = styled.h1`
    font-size: 60px;
    text-transform: uppercase;
    color: #d4d6d4;
    font-weight: bold;
    text-align: left;
    padding: 20px;
`;

export const Content = styled.div`
    background: #0F6CDE;
`;

export const Content2 = styled.div`
    background: #0F6CDE;
`;

export const Paragraph = styled.p`
    font-size: 20px;
    color: #d4d6d4;
    text-align: left;
    font-family: Arial;
    padding: 20px;
`;

export const Paragraph2 = styled.p`
    font-size: 15px;
    max-width: 700px;
    color: #d4d6d4;
    margin: 30px;
    background-color: #34659b;
    padding: 10px 10px 40px 0;
`;

export const ButtonEvent = styled.button`
    position: relative;
    width: 200px; 
    padding: 15px 0;
    margin: 10px 10px; 
    font-weight: 600; 
    border: 3px solid #02F181;
    background-color: #02F181;
    border-radius: 35px;  
    color: black;  
    border-width: 3px;
    font-size: 15px;
    margin: 0 300px 10px 20px;
    &:hover{
    color: #FFFFFF; 
    border: 3px solid #000000;
    background-color: #000000; 
    border-color: #02F181;
    }
`;