import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  background-color: #0e68d6;
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const animloader = keyframes`
 0% { top:0; color:white; }
 50% { top:30px; color:#ffffff33; }
 100% { top:0; color:white; }
`
export const Load = styled.div`
  width: 16px;
  height: 16px;
  box-shadow: 0 30px, 0 -30px;
  border-radius: 4px;
  background: currentColor;
  display: block;
  margin: -50px auto 0;
  position: relative;
  color: #fff;
  transform: translateY(30px);
  box-sizing: border-box;
  animation: ${animloader} 2s ease infinite;
  &::after,:before {
    content: "";
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    box-shadow: 0 30px, 0 -30px;
    border-radius: 4px;
    background: currentColor;
    color: #fff;
    position: absolute;
    left: 30px;
    top: 0;
    animation: ${animloader} 2s 0.2s ease infinite;
  } ;
  &::before {
    animation-delay: 0.4s;
    left: 60px;
  };
`;



    


