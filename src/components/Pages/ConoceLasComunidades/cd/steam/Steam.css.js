import styled from "styled-components";

export const Container = styled.div`
  background: #000000;
  overflow: hidden;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 60px;
  color: #02f181;
  font-size: 80px;
  text-transform: uppercase;
`;

export const Steams = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 0;
  margin-right: 50px;
  padding: 20px 0 20px 60px;
`;

export const Photos = styled.img`
  width: 390px;
  height: 320px;
  float: center;
`;

export const Subtitle = styled.h3`
  font-family: Arial;
  color: #02f181;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 30px;
`;

export const Paragraph = styled.h3`
  font-family: Arial;
  color: #fff;
  font-weight: bold;
  font-size: 11px;
  margin-right: 30px;
  margin-top: 15px;
`;

export const More = styled.button`
  background-color: #02f181;
  border: #02f181;
  border-radius: 60px;
  color: black;
  font-size: 13px;
  width: 120px;
  height: 50px;
  margin-top: 15px;
  margin-bottom: 50px;
  &:hover {
    color: #02f181;
    border: 3px solid #000000;
    background-color: #000000;
    border-color: #02f181;
  }
`;

export const More1 = styled.button`
  background-color: #02f181;
  border: #02f181;
  border-radius: 60px;
  color: black;
  font-size: 13px;
  width: 120px;
  height: 50px;
  margin-top: 15px;
  margin-bottom: 50px;
  &:hover {
    color: #02f181;
    border: 3px solid #000000;
    background-color: #000000;
    border-color: #02f181;
  }
`;

export const More2 = styled.button`
  background-color: #02f181;
  border: #02f181;
  border-radius: 60px;
  color: black;
  font-size: 13px;
  width: 120px;
  height: 50px;
  margin-top: 15px;
  margin-bottom: 50px;
  &:hover {
    color: #02f181;
    border: 3px solid #000000;
    background-color: #000000;
    border-color: #02f181;
  }
`;

export const Content = styled.div`
  padding: 30px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
`;

export const ContentLeft = styled.div`
  transform: translate(30px, 0);
`;

export const ButtonLeft = styled.button`
  border: none;
  background-color: #000000;
  color: #02f181;
  font-size: 40px;
  width: 620px;
  translate: all 0.5s;
  text-transform: uppercase;
  text-align: left;

  &:hover span {
    padding-left: 40px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`;

export const SpanLeft = styled.span`
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

export const ContentRight = styled.div`
  transform: translate(-10px, 0);
`;

export const ButtonRight = styled.button`
  border: none;
  background-color: #000000;
  color: #02f181;
  font-size: 40px;
  width: 620px;
  translate: all 0.5s;
  text-transform: uppercase;
  text-align: right;

  &:hover span {
    padding-right: 40px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`;

export const SpanRight = styled.span`
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
