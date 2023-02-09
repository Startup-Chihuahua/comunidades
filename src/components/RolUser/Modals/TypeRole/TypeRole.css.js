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
h3{
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

export const ContainerType = styled.div`
    display: block;
    justify-content: center;
`;

export const Guardar = styled.button`
    background-color: #02F181;
    border: #02F181;
    border-radius: 60px;  
    color: black;
    font-size: 12px;
    width: 120px;
    height: 40px;
    margin-top: 15px;
    margin-bottom: 50px;
    &:hover{
        color: #02F181; 
        border: 2px solid #000000;
        background-color: #000000; 
        border-color: #02F181;
    }`;

export const SelectBox = styled.select`
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    color: #707070;
    font-size: 15px;
`;
export const SelectContainer = styled.div`
    position: relative;
    height: 50px;
    width: 50%;
    outline: none;
    font-size: 1rem;
    color: #707070;
    margin-top: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 0 15px;
`;