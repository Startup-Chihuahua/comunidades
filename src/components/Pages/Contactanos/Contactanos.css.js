import styled from "styled-components";

export const Container = styled.div`
    background-color: #0F6CDE; 
    padding: 60px;  
`;

export const Title = styled.h1` 
    font-size: 80px;
    text-transform: uppercase;
    font-weight: bold;
    color: #E9E6DE; 
`;

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const ContainerLeft = styled.div`
    padding: 30px;
    background-color: #E9E6DE;   
`;

export const Text = styled.p`
    color: #0F6CDE; 
    padding: 30px;
    text-align: justify; 
`;

export const SocialMediaContainer = styled.div`
    padding: 30px; 
`;

export const ButtonLinkedin = styled.button`
    height: 30px;
    width: 40px;
    background-color: #FFFFFF;
    border: none;
    outline: none;
    border-radius: 5px;
    overflow: hidden;
    font-family: 'Arial';
    font-size: 12px;
    cursor: pointer;
    color: #000000;   

&:hover {
    color: #FFFFFF;
    background-color: #0F6CDE; 
}
`;

export const ButtonInstagram = styled.button`
    height: 30px;
    width: 40px;
    background-color: #FFFFFF;
    border: none;
    outline: none;
    border-radius: 5px;
    overflow: hidden;
    font-family: 'Arial';
    font-size: 12px;
    cursor: pointer;
    color: #000000;

&:hover {
    color: #FFFFFF;
    background-color: #0F6CDE; 
}
`;

export const ContainerRight = styled.div`
    padding: 30px;
    background-color: #E9E6DE; 
`;

export const SubTitle = styled.h3`
    font-size: 20px;
    color: #000000; 
`;

export const ButtonSend = styled.button`
    height: 30px;
    width: 90px;
    background-color: #FFFFFF;
    border: none;
    outline: none;
    border-radius: 5px;
    overflow: hidden;
    font-family: 'Arial';
    font-size: 12px;
    cursor: pointer;
    color: #000000;

&:hover {
    color: #FFFFFF;
    background-color: #0F6CDE; 
}
`;

export const ButtonRestore = styled.button`
    height: 30px;
    width: 90px;
    background-color: #FFFFFF;
    border: none;
    outline: none;
    border-radius: 5px;
    overflow: hidden;
    font-family: 'Arial';
    font-size: 12px;
    cursor: pointer;
    color: #000000;

&:hover {
    color: #FFFFFF;
    background-color: #0F6CDE; 
}
`;

export const SliderContainer = styled.div`
    background-color: #E9E6DE;
    overflow: hidden;
`;

export const Content = styled.h3`
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