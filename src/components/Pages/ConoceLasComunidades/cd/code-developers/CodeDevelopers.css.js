import styled from "styled-components";

export const Container = styled.div`
  background-color: #000000;
`;

export const TitleContainer = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 60px;
  color: #02f181;
  font-size: 80px;
  text-transform: uppercase;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`;

export const Content = styled.div`
  height: auto;
`;

export const ImagesBody = styled.img`
  width: 420px;
  height: 320px;
  padding-left: 25px;
  padding-right: 25px;
`;

export const CourseName = styled.h5`
  color: #02f181;
  padding-top: 20px;
  transform: translate(25px, 0);
`;

export const Description = styled.p`
  font-size: 11px;
  color: #02f181;
  width: 400px;
  height: AUTO;
  transform: translate(25px, 0);
`;

export const ButtonInfo = styled.button`
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
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;
  padding-top: 60px;
`;

export const LeftButon = styled.div`
  border: none;
  background-color: #000000;
  color: #02f181;
  font-size: 35px;
  width: 620px;
  transition: all 0.5s;
  text-transform: uppercase;
  text-align: left;
  padding-left: 50px;

  &:hover {
    padding-left: 40px;
  }
`;

export const RightButon = styled.div`
  border: none;
  background-color: #000000;
  color: #02f181;
  font-size: 35px;
  width: 620px;
  transition: all 0.8s;
  text-transform: uppercase;
  text-align: right;
  padding-right: 50px;

  &:hover {
    padding-right: 40px;
  }
`;

export const SpanContentL = styled.span`
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

export const SpanContentR = styled.span`
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
