import React from "react";
import "./Sponsors.css";

function Sponsors() {
  return (
    <div className="mainContainer">
      <div>
        <h1 className="titulo" id="TituloSponsors">
          {" "}
          NUESTROS SPONSORS{" "}
        </h1>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="row align-items-start">
        <div className="col">
          <img
            className="imagen"
            src={require("../../assets/Gobchihuahua.png")}
            alt="Logo Gobierno Chihuahua"
          />
        </div>
        <div className="col">
          <img
            className="imagen"
            src={require("../../assets/ChihuahuaMunicipio.png")}
            alt="Logo Municipio Chihuahua"
          />
        </div>
        <div className="col">
          <img className="imagen" src={require("../../assets/DesecLogo.png")} alt="Logo Desec" />
        </div>
        <div className="row align-items-start">
          <div className="col">
            <img
              className="imagen"
              src={require("../../assets/FicosecLogo.png")}
              alt="Logo Ficosec"
            />
          </div>
          <div className="col">
            <img
              className="imagen"
              src={require("../../assets/TecnologicoMonterrey.png")}
              alt="Logo Tecnologico de Monterrey"
            />
          </div>
          <div className="col">
            <img
              className="imagen"
              src={require("../../assets/ChihuahuaFutura.png")}
              alt="Logo ChihuahuaFutura"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sponsors;
