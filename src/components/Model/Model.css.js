import styled from 'styled-components';

export const ContainerModel = styled.div`
position: relative;
  background: #0f6cde;
  padding: 40px 200px 0 40px;
  font-family: Arial;
  color: #d4d6d4;`;
export const ColsTitle= styled.h1`
font-size: 60px;
  text-transform: uppercase;
  font-family: Arial;
  font-weight: bold;
  `;
export const ColsModel= styled.div`
display: flex;
  flex-wrap: wrap;
  padding: 0 50px 0 0;
  margin: 0;
  flex: 2;
  `;
export const ColsSubtitle= styled.h3`
text-transform: uppercase;
  font-size: 30px;
  font-weight: bold;
`;
export const ColsP= styled.p`
color: #d4d6d4;
  margin: 1em;
`;
export const Space= styled.hr`
background-color: #ffffff;
`;
export const ButtonModel= styled.button`
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  color: #000000;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #02f181;
  border-color: #02f181;
  border-width: 3px;
  border-style: solid;
  border-radius: 35px;
  &:hover{
    color: #FFFFFF; 
    border: 3px solid #000000;
    background-color: #000000; 
    border-color: #02F181;
  }
`;