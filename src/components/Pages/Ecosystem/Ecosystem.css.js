import styled from 'styled-components';

export const Container = styled.div`
background: #0f6cde;
position: relative;
padding: 50px; 
`;

export const EcosystemTitle = styled.h1`
font-family: Arial;
color: #d4d6d4;
font-size: 60px;
`;

export const EcosystemParagraph = styled.p`
font-family: Arial;
color: #d4d6d4;
font-size: 20px;
`;

export const Startups = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
background: #fff;
color: #000000;
border: 1px solid white;
padding: 50px 300px 500px 0;
`;

export const StartupsTitle = styled.h2`
padding: 20px;
font-family: Times New Roman;
color: #000000;
font-size: 20px;
`; 

export const StartupsSubtitle  = styled.p`
padding: 20px;
margin: 0;
font-family: Times New Roman;
color: #000000;
font-size: 20px;
text-align: left;
`;

export const BorderJoin = styled.div`
background-color: #E8E8E8;
position: relative;
padding: 2px; 
`;

export const BorderSubtitle = styled.h3`
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

export const MapContainer = styled.div`
background: #0f6cde;
position: relative;
padding: 40px ;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
color: #000000;
`;

export const Content = styled.div`
background: #0f6cde;
`;

export const MapTitle = styled.h1`
font-family: Arial;
color: #d4d6d4;
font-size: 65px;
padding: 20px;
`;

export const MapParagraph = styled.p`
font-family: Arial;
color: #d4d6d4;
font-size: 20px;
padding: 20px;
text-align: left;
`;

export const MapIframe = styled.div`
background: #0f6cde;
`;