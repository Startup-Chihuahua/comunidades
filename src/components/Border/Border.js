import React from "react";
import { Container, Content } from "./Border.css.js";
/**
 * @brief Esta funcion (Border) permite definir un estilo que ya esta codificado en una hoja de estilos.
 * @returns 
 */
function Border() {
  return (
    <Container className="container-fluid">
      <Content>
        El futuro es hoy • El futuro es hoy • El futuro es hoy • El futuro es
        hoy • El futuro es hoy • El futuro es hoy • El futuro es hoy • El futuro
        es hoy • El futuro es hoy • El futuro es hoy • El futuro es hoy • El
        futuro es hoy • El futuro es hoy • El futuro es hoy • El futuro es hoy
      </Content>
    </Container>
  );
}

export default Border;
