import styled from "styled-components";

export const Container = styled.div`
  background: #0f6cde;
  position: relative;
  padding: 50px;
`;

export const EcosystemTitle = styled.h1`
  font-family: Arial;
  color: #d4d6d4;
  font-size: 60px;
`;

export const EcosystemParagraph = styled.p`
  font-family: Arial;
  color: #d4d6d4;
  font-size: 20px;
`;

export const Startups = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: #fff;
  color: #000000;
  border: 1px solid white;
  padding: 50px 300px 500px 0;
`;

export const StartupsTitle = styled.h2`
  padding: 20px;
  font-family: Times New Roman;
  color: #000000;
  font-size: 20px;
`;

export const StartupsSubtitle = styled.p`
  padding: 20px;
  margin: 0;
  font-family: Times New Roman;
  color: #000000;
  font-size: 20px;
  text-align: left;
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  background-color: #eae6dd;
`;

export const SliderContent = styled.h3`
  margin: 0;
  padding: 18px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
  color: #0053b9;
  animation: move-lt 10s linear infinite;

  @keyframes move-lt {
    0% {
      transform: translate(0%);
    }
    100% {
      transform: translate(-100%);
    }
  }
`;

export const MapContainer = styled.div`
  background: #0f6cde;
  position: relative;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  color: #000000;
`;

export const Content = styled.div`
  background: #0f6cde;
`;

export const MapTitle = styled.h1`
  font-family: Arial;
  color: #d4d6d4;
  font-size: 65px;
  padding: 20px;
`;

export const MapParagraph = styled.p`
  font-family: Arial;
  color: #d4d6d4;
  font-size: 20px;
  padding: 20px;
  text-align: left;
`;

export const MapIframe = styled.div`
  background: #0f6cde;
`;
