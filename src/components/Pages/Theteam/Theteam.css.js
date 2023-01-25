import styled from "styled-components";

export const Container = styled.div`
    background-color: #0F6CDE;
`;

export const Title = styled.h1`
    margin: 0;
    padding: 20px;
    font-size: 80px;
    line-height: 1.1;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    color: #E8E8E8;
`;

export const Content = styled.p`
    margin: 0;
    padding: 20px;
    font-size: 20.6px;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
`;

export const BorderContainer = styled.div`
    background-color: #0F6CDE;
    overflow: hidden;
`;

export const BorderContent = styled.h2`
    margin: 0;
    padding: 10px;
    font-size: 60px;
    font-weight: bold;
    text-transform: uppercase;
    color: #E8E8E8;
    transform: translate(186px, 0);
`;

export const OurchampionContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    background-color: #0F6CDE; 
`;

export const ImageOne = styled.img`
    width: 480px;
    transform: translate(60px, 0);
`;

export const ContainerRight = styled.div`
    transform: translate(-120px, 0);
`;

export const OurchampionName = styled.h3`
    font-size: 50px;
    font-weight: bold;
    color: #E8E8E8;
    text-transform: uppercase;
`;

export const OurchampionContent = styled.p`
    color: #FFFFFF;
`;

export const OurchampionSubtitle = styled.h4`
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    text-transform: uppercase;
`;

export const OurchampionContentBold = styled.p`
    font-size: 18px;
    color: #FFFFFF;
`;

export const ThereapteamContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    background-color: #0F6CDE;
`;

export const ImageLeft = styled.img`
    width: 360px;
    transform: translate(118px, 0);
`;

export const ImageMiddle = styled.img`
    width: 380px;
    transform: translate(20px, 0);
`;

export const ImageRight = styled.img`
    width: 380px;
    transform: translate(-80px, 0);
`;

export const TeamNameLeft = styled.h3`
    font-size: 23px;
    font-weight: bold;
    transform: translate(117px, 0);
    color: #E8E8E8;
    text-transform: uppercase;
`;

export const TeamNameMiddle= styled.h3`
    font-size: 23px;
    font-weight: bold;
    transform: translate(20px, 0);
    color: #E8E8E8;
    text-transform: uppercase;
`;

export const TeamNameRight = styled.h3`
    font-size: 23px;
    font-weight: bold;
    transform: translate(-79px, 0);
    color: #E8E8E8;
    text-transform: uppercase;
`; 

export const TeamContentLeft = styled.p`
    transform: translate(117px, 0);
    color: #FFFFFF;
`;

export const TeamContentMiddle = styled.p`
    transform: translate(20px, 0);
    color: #FFFFFF;
`;

export const TeamContentRight = styled.p`
    transform: translate(-79px, 0);
    color: #FFFFFF;
`; 

export const QuoteContainer = styled.div`
    background-color: #0F6CDE;
    display: flex;
    justify-content: center;
    padding: 30px;
`;

export const LeftContainer = styled.div`
    background-color: #EAE6DD;
    height: 460px;
    width: 390px;
    transform: translate(120px, 90px);
    z-index: 1;
`; 

export const QuoteContent = styled.h3`
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
`; 

export const QuoteName = styled.p`
    padding: 20px;
`; 

export const ImageQuote = styled.img`
    width: 900px;
    transform: translate(-70px, 0);
`;

export const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: #EAE6DD;
`;

export const SliderContent = styled.h3`
    margin: 0;
    padding: 18px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    white-space: nowrap;
    color: #0053B9;
    animation: move-lt 10s linear infinite;

    @keyframes move-lt {
        0% {
            transform: translate(0%);
        }
        100% {
            transform: translate(-100%);
        }
    } 
`;