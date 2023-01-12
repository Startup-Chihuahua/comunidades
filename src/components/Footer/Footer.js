import React from "react";
import "./Footer.css";
import {MainContainerfooter, TitleFooter, TextFooter, ImgFooter, ButtonFooter, ColumnFooter} from "./Footer.css.js";

export default function Footer() {
  return (
    <MainContainerfooter className="container-fluid">
      <div className="row align-items-start">
        <ColumnFooter className="col">
          <TitleFooter>SE PARTE DE NUESTRO FUTURO</TitleFooter>
          <ButtonFooter type="button" className="btn btn-dark">
            Unete
          </ButtonFooter>
        </ColumnFooter>
        <ColumnFooter className="col">
          <TitleFooter>STARUP CHIHUAHUA</TitleFooter>
          <TextFooter>
            Av. Colegio Militar 4709, Nombre de Dios, 31150 Chihuahua, Chih.
          </TextFooter>
          <TextFooter>hola@startupchihuahua.com</TextFooter>
          <TextFooter>(614) 182-2983 WPP*</TextFooter>
        </ColumnFooter>
        <br />
        <div className="col">
          <br />
          <ImgFooter
            src={require("../../assets/StartupLogo.png")}
            alt="logo StartupChihuahua"
          />
        </div>
      </div>
    </MainContainerfooter>
  );
}


