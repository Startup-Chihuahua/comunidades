import styled from "styled-components";

export const Container = styled.div`
  background-color: #0f6cde;
`;
export const InfoContainer = styled.div`
  background: #eae7dd;
  position: absolute;
  width: 600px;
  height: 700px;
  left: 96px;
  top: 160px;
  padding: 40px;
`;
export const Img = styled.img`
  width: 970px;
  height: 720px;
`;
export const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;
export const Text = styled.p`
  font-size: 20px;
`;
export const Button = styled.button`
  position: relative;
  width: 200px;
  padding: 15px 0;
  font-weight: 600;
  border: 2px solid #000000;
  background-color: #000000;
  border-radius: 30px;
  color: #ffffff;
  border-width: 3px;

  &:hover {
    color: #000000;
    border: 3px solid #ffffff;
    background-color: #ffffff;
    border-color: #000000;
  }
`;
export const Image = styled.div`
  position: relative;
  padding: 90px;
  padding-left: 480px;
  padding-bottom: 150px;
`;