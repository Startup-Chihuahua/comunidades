import styled from 'styled-components';

export const Container = styled.div`
    background-color: #E8E8E8; 
`; 

export const BorderContent = styled.h2` 
    margin: 0;
    padding: 20px;
    font-size: 20px; 
    font-family: 'Arial';
    font-weight: bold;
    color: #0F6CDE;
    text-transform: uppercase;
    text-align: center; 
    transform: translate(100%);
    animation: move-rtl 30s linear infinite;

    @keyframes move-rtl {
        0% {
            transform: translate(100%);
        }
        100% {
            transform: translate(-100%);
        }
    }
`; 