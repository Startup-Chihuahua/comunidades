import React from "react";
import "./Footer.css";
import {Container, Title, Text, Img, Button} from "./Footer.css.js";
/**
 * @brief Esta funcion (Footer) es para agregar el pie de pagina.
 * @returns 
 */
export default function Footer() {
  return (
    <Container className="container-fluid">
      <div className="row align-items-start">
        <div className="col">
          <Title>SE PARTE DE NUESTRO FUTURO</Title>
          <Button type="button" className="btn btn-dark">
            Unete
          </Button>
        </div>
        <div className="col">
          <Title>STARUP CHIHUAHUA</Title>
          <Text>
            Av. Colegio Militar 4709, Nombre de Dios, 31150 Chihuahua, Chih.
          </Text>
          <Text>hola@startupchihuahua.com</Text>
          <Text>(614) 182-2983 WPP*</Text>
        </div>
        <br />
        <div className="col">
          <br />
          <Img
            src={require("../../assets/StartupLogo.png")}
            alt="logo StartupChihuahua"
          />
        </div>
      </div>
    </Container>
  );
}


