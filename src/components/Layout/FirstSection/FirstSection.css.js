import styled from 'styled-components'; 

export const Container = styled.div`
    @media screen and (max-width: 600px) {
        background-color: #0F6FE4;  
    }

    @media screen and (min-width: 600px) {
        background-color: #0F6FE4;     
    }  
`; 

export const Title = styled.h1`
    margin: 0;
    padding: 60px;
    font-size: 80px;
    font-family: 'Arial';
    font-weight: 900;
    letter-spacing: 0em;
    line-height: 1.0em;  
    color: #EAE6DD; 
    text-transform: uppercase;
    text-align: left;
    display: flex
    flex-wrap: wrap; 
    @media screen and (max-width: 600px) {
        font-size: 30px;
        display: flex; 
        justify-content: center;    
    }    
`;   