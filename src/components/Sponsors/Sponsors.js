import React from "react";
import { MainContainerSponsors, ContainerTitleSponsors, ImgSponsors, ContainerImgSponsors, ColumnContainerSponsors, TitleSponsors} from "./Sponsors.css.js";
import "./Sponsors.css.js";

function Sponsors() {
  return (
    <MainContainerSponsors className="mainContainer">
      <ContainerTitleSponsors>
        <TitleSponsors className="titulo">
          {" "}
          NUESTROS SPONSORS{" "}
        </TitleSponsors>
      </ContainerTitleSponsors>
      <br />
      <br />
      <br />
      <br />
      <ContainerImgSponsors className="row align-items-start">
        <ColumnContainerSponsors className="col">
          <ImgSponsors
            className="imagen"
            src={require("../../assets/Gobchihuahua.png")}
            alt="Logo Gobierno Chihuahua"
          />
        </ColumnContainerSponsors>
        <ColumnContainerSponsors className="col">
          <ImgSponsors
            className="imagen"
            src={require("../../assets/ChihuahuaMunicipio.png")}
            alt="Logo Municipio Chihuahua"
          />
        </ColumnContainerSponsors>
        <ColumnContainerSponsors className="col">
          <ImgSponsors className="imagen" src={require("../../assets/DesecLogo.png")} alt="Logo Desec" />
        </ColumnContainerSponsors>
        <ContainerImgSponsors className="row align-items-start">
          <ColumnContainerSponsors className="col">
            <ImgSponsors
              className="imagen"
              src={require("../../assets/FicosecLogo.png")}
              alt="Logo Ficosec"
            />
          </ColumnContainerSponsors>
          <ColumnContainerSponsors className="col">
            <ImgSponsors
              className="imagen"
              src={require("../../assets/TecnologicoMonterrey.png")}
              alt="Logo Tecnologico de Monterrey"
            />
          </ColumnContainerSponsors>
          <ColumnContainerSponsors className="col">
            <ImgSponsors
              className="imagen"
              src={require("../../assets/ChihuahuaFutura.png")}
              alt="Logo ChihuahuaFutura"
            />
          </ColumnContainerSponsors>
        </ContainerImgSponsors>
      </ContainerImgSponsors>
    </MainContainerSponsors>
  );
}
export default Sponsors;
