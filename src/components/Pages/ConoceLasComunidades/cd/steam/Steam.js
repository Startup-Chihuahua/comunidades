import React from "react";
import {Container, Title, Steams, Photos, Subtitle, Paragraph, More, More1, More2, Content, ContentLeft, ButtonLeft, SpanLeft, ContentRight, ButtonRight, SpanRight} from "./Steam.css.js";

function Steam() {

  return (
    <Container className="container-fluid">
      <Title>
        <strong>Comunidades Steam</strong>
      </Title>
      <br />
      <Steams>
          <div>
          <Photos
            src={require("../../../../../assets/liga-astronomica.png")}
            alt="Astronómica"
          /><br/><br/>
          <Subtitle>
            <strong>Liga Astronómica de Chihuahua</strong>
          </Subtitle>
          <Paragraph>Astrónomos aficionados en la ciudad de Chihuahua, cuyo fin es la difusión de la Astronomía y la ciencia.</Paragraph>
          <More1>Más info</More1>
        </div>
        <div>
        <Photos
            src={require("../../../../../assets/divulgare.png")}
            alt="Divulgare"
          /><br/><br/>
          <Subtitle>
            <strong>Divulgare</strong>
          </Subtitle>
          <Paragraph>Actividades de comunicación científica como talleres, publicaciones y conferencias. Mapeamos el status de la difusión científica en Chihuahua.</Paragraph>
          <More2>Más info</More2>
        </div>
        <div>
        <Photos
            src={require("../../../../../assets/cultura-fcq.png")}
            alt="Cultura FCQ"
          /><br/><br/>
          <Subtitle>
            <strong>Cultura del Agua FCQ</strong>
          </Subtitle>
          <Paragraph>La comunidad de cultura del agua promovida por la Facultad de Ciencias Químicas de la UACH engloba estudiantes, investigadores y emprendedores que buscan promover proyectos enfocados al vital líquido.</Paragraph>
          <More>Más info</More>
        </div>
        <div>
        <Photos
            src={require("../../../../../assets/club-fing.png")}
            alt="Club Fing"
          /><br/><br/>
          <Subtitle>
            <strong>Club de Ciencias FING</strong>
          </Subtitle>
          <Paragraph> Club de Ciencias de la Facultad de Ingeniería de la UACH.</Paragraph>
          <More >Más info</More>
        </div>
      </Steams>
      
      <Content>
        
        <ContentLeft>
          <ButtonLeft>
            <SpanLeft><strong>&#10096;   Comunidades de negocios</strong></SpanLeft>
          </ButtonLeft>
        </ContentLeft>
        
        <ContentRight>
          <ButtonRight>
            <SpanRight><strong>Comunidades de programadores</strong>   &#10097;</SpanRight>
          </ButtonRight>
        </ContentRight>

        </Content>
      </Container>
  );
}

export default Steam;