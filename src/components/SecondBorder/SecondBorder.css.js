import styled from 'styled-components';

export const Container = styled.div`
    background-color: #E8E8E8; 
    overflow: hidden;
`; 

export const BorderContent = styled.h2` 
    margin: 0;
    padding: 18px;
    font-size: 20px;
    font-weight: bold;
    color: #0053B9;
    text-transform: uppercase;
    white-space: nowrap;
    animation: move-rtl 20s linear infinite;

    @keyframes move-rtl { 
        0% {
            transform: translate(0%);
        }
        100% {
            transform: translate(-100%);
        }
    }
`; 