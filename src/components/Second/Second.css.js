import styled from 'styled-components';

export const SecondContainer = styled.div`
    background-color: #0F6CDE;
`;  

export const Title = styled.h2`
    padding: 30px;
    font-size: 50px;
    font-weight: bold;
    font-family: 'Arial';
    color: #FFFFFF;
    text-transform: uppercase;
`;   

export const Text = styled.p`
    padding: 30px;
    font-family: 'Arial';
    color: #FFFFFF;
`; 

export const ButtonContent = styled.button`
    position: relative;
    width: 150px;   
    padding: 15px 0;
    margin: 20px 10px; 
    font-weight: 600; 
    border: 2px solid #02F181;
    background-color: #02F181;  
    border-radius: 30px;  
    color: black;  
    border-width: 3px;

    &:hover {
        color: white; 
        font-weight: 600; 
        border: 3px solid #000000; 
        background-color: #000000; 
        border-color: #02F181;
    }
`;   
