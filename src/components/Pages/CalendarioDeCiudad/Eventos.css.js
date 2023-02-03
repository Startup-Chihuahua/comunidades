import styled from 'styled-components';  

export const Container = styled.div`
    padding: 30px;
    background-color: #0F6FE4;
`;

export const ContainerContent = styled.div`
    padding-top: 20px;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 70px;
    text-transform: uppercase;
    color: #DDDDDD;
    display: flex;
    justify-content: center;
`;

export const Content = styled.p`
    padding: 26px;
    color: #FFFFFF;
    font-size: 38px;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    text-align: center;
`; 

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center; 
`;

export const ButtonCreate = styled.button`
    padding: 14px 20px; 
    margin: 20px 10px;
    font-weight: bold;
    border: 3px solid #02F181;
    background-color: #02F181;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        color: #02F181;
        font-weight: bold;
        border: 3px solid #02F181;
        background-color: #000000;
    } 
`;

export const ContainerCards = styled.div`
    width: 90%; 
    margin: 60px auto;
    background-color: #FFFFFF; 
    padding-top: 3px;
`; 

export const Heading = styled.div`
    text-align: center;
    font-size: 28px; 
    color: #000000; 
    margin-bottom: 30px;
    padding: 20px;
    text-transform: uppercase; 
`; 

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-flow: wrap;
`; 

export const Card = styled.div`
    width: 30%;
    background: #fff;
    border: 1px solid #ccc;
    margin-bottom: 50px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
    } 
`; 

export const CardHeader = styled.div`
    text-align: center;
    padding: 50px 10px;
    background: linear-gradient(to right, #0037FF, #006EFF); 
    color: #fff;
`; 

export const CardBody = styled.div`
    padding: 30px 20px;
    text-align: center;
    font-size: 18px;
`; 

export const ButtonControl = styled.div`
    color: #FFFFFF;
    text-align: center;
    background: linear-gradient(to right, #0037FF, #006EFF);
    margin-top: 30px; 
    text-decoration: none;
    padding: 14px 60px;
    border: none; 
    border-radius: 30px; 
    cursor: pointer;
`;    