import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000000;
`; 

export const Title = styled.h1`
    margin: 0;
    padding: 60px;
    color: #02F181;
    font-size: 68px; 
    text-transform: uppercase;
`;

export const SecondContiner = styled.div`
    display: flex;
    justify-content: flex-start;  
    background-color: #000000; 
`;

export const FirstImg = styled.img`
    width: 430px;
    height: 230px;
    transform: translate(69px, 0);
`;

export const CommunityName = styled.h3`
    color: #02F181;  
    transform: translate(69px, 20px); 
`;

export const CommunityContent = styled.p`
    font-size: 13px; 
    color: #FFFFFF; 
    transform: translate(69px, 20px); 
`;

export const ButtonControl = styled.button`  
    padding: 13px 36px;
    border-radius: 30px;
    font-size: 14px; 
    border: 3px solid #000000;
    background-color: #02F181;
    transform: translate(69px, 42px);

    &:hover { 
        padding: 13px 36px;    
        border-radius: 30px;
        border: 3px solid #02F181;
        background-color: #000000;
        color: #FFFFFF;  
        transform: translate(69px, 42px);  
    }   
`;

export const SecondImg = styled.img` 
    width: 420px;
    height: 230px;
    transform: translate(120px, 0);
`;

export const CommunityNameEdit = styled.h3`
    color: #02F181;
    transform: translate(120px, 20px);
`;

export const CommunityContentEdit = styled.p`
    font-size: 13px; 
    color: #FFFFFF; 
    transform: translate(120px, 20px);
`;

export const ButtonControlEdit = styled.button` 
    padding: 13px 36px;
    font-size: 14px; 
    border-radius: 30px;  
    border: 3px solid #000000;
    background-color: #02F181;
    transform: translate(120px, 20px); 

    &:hover {
        padding: 13px 36px;  
        border-radius: 30px;
        border: 3px solid #02F181;
        background-color: #000000;
        color: #FFFFFF; 
        transform: translate(120px, 20px);   
    } 
`;

export const LastContainer = styled.div`
    padding: 30px;
    background-color: #000000;
    display: flex;
    justify-content: flex-end; 
`;

export const ButtonNext = styled.button`
    border: none;
    background-color: #000000; 
    color: #02F181;
    font-size: 40px;
    width: 620px;
    translate: all 0.5s;
    text-transform: uppercase;
    text-align: right; 

    &:hover span {
        padding-right: 40px;
    }

    &:hover span:after {
        opacity: 1;
        right: 0; 
    } 
`;

export const SpanContent = styled.span`
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;

    &:after {
        content: '';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;  
    }
`;