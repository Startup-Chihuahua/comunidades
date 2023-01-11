import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid" id="footer">
      <div className="row align-items-start">
        <div className="col">
          <h5>SE PARTE DE NUESTRO FUTURO</h5>
          <button type="button" className="btn btn-dark">
            Unete
          </button>
        </div>
        <div className="col">
          <h5>STARUP CHIHUAHUA</h5>
          <p>
            Av. Colegio Militar 4709, Nombre de Dios, 31150 Chihuahua, Chih.
          </p>
          <p>hola@startupchihuahua.com</p>
          <p>(614) 182-2983 WPP*</p>
        </div>
        <br />
        <div className="col">
          <br />
          <img
            src={require("../../assets/StartupLogo.png")}
            alt="logo StartupChihuahua"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
