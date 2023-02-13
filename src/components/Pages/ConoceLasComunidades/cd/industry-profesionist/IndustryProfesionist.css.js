import styled from "styled-components";

export const Container = styled.div`
  background-color: #000000;
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  padding: 40px;
`;
export const Content = styled.div`
  width: 200px;
`;
export const Imagee = styled.img`
  width: 420px;
  height: 320px;
  padding-left: 25px;
  padding-right: 25px;
`;
export const CourseName = styled.h5`
  color: #02f181;
  padding: 20px;
`;

export const Description = styled.div`
  color: #02f181;
  width: 400px;
  height: AUTO;
  transform: translate(25px, 0);
  margin-bottom: 30px;
  font-size: 11px;
`;
export const InfoButton = styled.button`
  padding: 14px;
  font-size: 13px;
  border-radius: 60px;
  width: 120px;
  height: 50px;
  background-color: #02f181;
  border: 3px solid #000000;
  transform: translate(25px, 0);

  &:hover {
    padding: 14px;
    font-size: 13px;
    border-radius: 60px;
    color: #02f181;
    background-color: #000000;
    border: 3px solid #02f181;
  }
`;
export const BotomContainer = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 30px;
`;
export const BLeftButton = styled.button`
  border: none;
  background-color: #000000;
  color: #02f181;
  font-size: 41px;
  width: 620px;
  transition: all 0.8s;
  text-transform: uppercase;
  text-align: left;
  padding-left: 50px;

  &:hover {
    padding-left: 40px;
  }
`;

export const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
  color: #02f181;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 40px;
`;

export const ButtonText = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &:after {
    content: "";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
`;
