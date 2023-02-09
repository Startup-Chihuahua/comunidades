import styled from "styled-components";

export const Overlay = styled.div`
width: 100%;
height: 80vh;
position: relative;
top: 0;
left: 0;
background: #0F6FE4;
padding: 40px;
display: flex;
align-items: center;
justify-content:center;
`;

export const ContenedorModal = styled.div`
width: 500px;
min-height: 200px;
position: relative;
background: #fff;
border-radius:5px;
box-shadow: rgba(100,100,111, 0.2) 0px 7px 20px 0px;
padding: 20px;
`;

export const EncabezadoModal = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
padding-bottom: 20px;
border-bottom: 1px solid yelow;
h1{
  font-weight: 500;
  font-size: 16px;
  color: black;
}
`;

export const BotonCerrar = styled.button`
position: absolute;
top: 15px;
right: 15px;
width: 30px;
height: 30px;
border: none;
background: none;
cursor: pointer;
transition: .3s ease all;
color: #1766DC;
&:hover{
  background: #F2F2F2;
}
`;

export const Icon = styled.img`
width: 100%;
height: 100%;
`;

export const Salir = styled.button`
    background-color: gray;
    border: #02F181;
    border-radius: 60px;  
    color: black;
    font-size: 12px;
    width: 100px;
    height: 40px;
    margin-top: 15px;
    margin-bottom: 50px;
    &:hover{
        color: #fff; 
        border: 2px solid #000000;
        background-color: #000000; 
        
    }
`;