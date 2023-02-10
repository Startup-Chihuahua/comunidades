import styled from 'styled-components';

export const Container = styled.div`
    background-color: #000000; 
`; 

export const Title = styled.h1`
    margin: 0; 
    padding: 60px;
    color: #02F181; 
    font-size: 80px; 
    text-transform: uppercase; 
`;

export const SecondContainer = styled.div`
    padding: 30px; 
    display: flex;
    justify-content: space-around; 
    background-color: #000000; 
    padding-bottom: 160px; 
`;

export const FImage = styled.img`
    width: 420px;
    height: 280px; 
`;

export const SImage = styled.img`
    width: 420px;
`;

export const TImage = styled.img`
    width: 420px;
    height: 280px;
`;

export const BusinessName = styled.h3` 
    color: #02F181; 
    font-size: 23px; 
    transform: translate(0, 10px); 
`;

export const BusinessContent = styled.p`
    color: #FFFFFF; 
    font-size: 13px;  
    transform: translate(0, 10px); 
`;

export const ButtonContainer = styled.button`
    padding: 13px 36px;
    border-radius: 30px;
    font-size: 14px; 
    border: 3px solid #000000;
    background-color: #02F181;
    transform: translate(0, 10px);

    &:hover { 
        padding: 13px 36px;    
        border-radius: 30px;
        border: 3px solid #02F181;
        background-color: #000000;
        color: #FFFFFF;  
        transform: translate(0, 10px);  
    }
`;

export const BusinessNameS = styled.h3`
    color: #02F181; 
    font-size: 23px;  
    transform: translate(0, 10px);
`;

export const BusinessContentS = styled.p`
    color: #FFFFFF; 
    font-size: 13px;  
    transform: translate(0, 10px);
`;

export const BusinessNameT = styled.h3`
    color: #02F181; 
    font-size: 23px; 
    transform: translate(0, 10px);
`;

export const BusinessContentT = styled.p`
    color: #FFFFFF; 
    font-size: 13px; 
    transform: translate(0, 10px);
`;

export const ButtonContainerT = styled.button`
    padding: 13px 36px;
    border-radius: 30px;
    font-size: 14px; 
    border: 3px solid #000000;
    background-color: #02F181;
    transform: translate(0, 27px); 

    &:hover { 
        padding: 13px 36px;    
        border-radius: 30px;
        border: 3px solid #02F181;
        background-color: #000000;
        color: #FFFFFF;  
        transform: translate(0, 27px);   
    }
`;

export const EImage = styled.img`
    width: 420px;
    height: 280px;
    transform: translate(0, 60px); 
`;

export const BusinessNameE = styled.h3`
    color: #02F181; 
    font-size: 23px;
    transform: translate(0, 68px);
`;

export const BusinessContentE = styled.p`
    color: #FFFFFF; 
    font-size: 13px;
    transform: translate(0, 68px);
`;

export const ButtonContainerE = styled.button`
    padding: 13px 36px;
    border-radius: 30px;
    font-size: 14px; 
    border: 3px solid #000000;
    background-color: #02F181;
    transform: translate(0, 69px); 

    &:hover { 
        padding: 13px 36px;    
        border-radius: 30px;
        border: 3px solid #02F181;
        background-color: #000000;
        color: #FFFFFF;    
    }
`;

export const LastContainer = styled.div`
    padding: 30px;
    background-color: #000000;
    display: flex;
    justify-content: space-between;
`;

export const ButtonLeft = styled.button`
    border: none; 
    background-color: #000000; 
    color: #02F181;
    font-size: 40px;
    width: 620px;
    translate: all 0.5s;
    text-transform: uppercase;
    text-align: left;  

    &:hover span {
        padding-left: 40px; 
    }

    &:hover span:after {
        opacity: 1;
        right: 0; 
    } 
`;

export const SpanContentL = styled.span`
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

export const ButtonRight = styled.button`
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

export const SpanContentR = styled.span`
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