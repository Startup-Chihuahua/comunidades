import styled from 'styled-components';


export const TitleContainer = styled.div`
text-align: center;
padding: 40px;`


export const ContainerLeft = styled.div`
    position: relative;
    transform: translate(-30px, 10px);
    
    `

export const ContainerRight = styled.div`
    position:relative;
    transform: translate(30px, 10px);
    
`

export const Image = styled.img`
display: block;
    width: 100%;
    height: 80% ;`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #156DD8;
    &:hover {
      opacity: .85;
    }
  `

export const Content = styled.div`
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  `
export const ImagesContainer = styled.div`
    display: flex;
justify-content: center;`

export const Container = styled.div`
    background-color: #0F6FE4 ;`

export const ImagesContainerb = styled.div`
    display: flex;
justify-content: center;
transform: translate(-250px, 0);`

export const ContainerLeft1 = styled.div`
    position: relative;
    transform: translate(-30px, 10px);`

export const Title = styled.h1`color: #FFFFFF;`

export const Description = styled.p`color: #FFFFFF;
font-size: 20px;`

export const ButtonNavigator = styled.button`
background-color: #0F6FE4;
border: none;
position: relative;
`

export const BText = styled.p`
color: #FFFFFF;
font-weight:bolder;
font-size:24px`