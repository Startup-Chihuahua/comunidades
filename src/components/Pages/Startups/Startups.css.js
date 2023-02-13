import styled from "styled-components";

export const Container = styled.div`
    font-family: Arial;
    color: #d4d6d4;
    background: #0f6cde;
    position: relative;
    padding: 60px 50px 100px 50px; 
    text-align: center;
`;

export const Title = styled.h1`
    font-family: Arial;
    color: #d4d6d4;
    font-size: 60px;
    font-weight: bold;
`;

export const Subtitle = styled.h3`
    font-family: Arial;
    color: #d4d6d4;
    font-size: 45px;
    font-weight: bold;
`;

export const Button = styled.button`
    background-color: #02F181;
    border: #02F181;
    border-radius: 35px;  
    color: black;
    font-size: 14px;
    font-weight: bold;
    width: 200px;
    height: 60px;
    margin-bottom:110px;
    }
    &:hover{
    color: #FFFFFF; 
    border: 3px solid #000000;
    background-color: #000000; 
    border-color: #02F181;
`;

export const Startup = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background: #fff;
    color: #000000;
    border: 1px solid white;
    padding: 20px 20px 700px 20px;
`;

export const Content = styled.div`
    background: #0f6cde;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 20px 20px 0 20px;
`;

export const Number = styled.p`
    font-family: Arial;
    color: #fff;
    font-size: 35px;
`;

export const Text = styled.p`
    font-family: Arial;
    color: #fff;
    font-size: 20px;
`;

