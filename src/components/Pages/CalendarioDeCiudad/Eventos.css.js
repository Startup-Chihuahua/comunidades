import styled from "styled-components";

export const TitleEvents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  h1 {
    font-size: 70px;
    color: #e7e3da;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const ContentEvents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 50px;
    color: #eae6dd;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const ButtonEvents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  button {
    padding: 14px 30px;
    border-radius: 30px;
    background-color: #02f181;
    border: 3px solid #02f181;
  }
  button:hover {
    padding: 14px 30px;
    border-radius: 30px;
    background-color: #000000;
    color: #02f181;
    border: 3px solid #02f181;
  }
`;

export const Container = styled.div`
  background-color: #0f6de0;
  padding: 20px;
`;

export const ContainerEvents = styled.div`
  width: 90%;
  margin: 50px auto;
  background-color: #ffffff;
`;

export const Heading = styled.div`
  text-align: center;
  font-size: 28px;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-flow: wrap;
`;

export const Card = styled.div`
  width: 40%;
  background: #ffffff;
  border: 1px solid #ccc;
  margin-bottom: 50px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
  }
`;

export const CardHeader = styled.div`
  text-align: center;
  padding: 50px 10px;
  background-color: #0f6de0;
  color: #ffffff;
`;

export const CardBody = styled.div`
  padding: 30px 20px;
  text-align: center;
  font-size: 18px;
  p {
    font-size: 13px;
  }
  strong {
    color: blue;
  }
`;

export const ButtonContainer = styled.button`
  border: none;
  color: #ffffff;
  text-align: center;
  background-color: #0f6de0;
  margin-top: 30px;
  text-decoration: none;
  padding: 14px 80px;
  border-radius: 30px;
  cursor: pointer;
`;
