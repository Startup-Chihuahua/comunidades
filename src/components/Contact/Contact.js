import React from "react";
import "./Contact.css";
import {ContactContainer, ContactInformationContainer, Title, Text, Button} from "./Contact.css.js"

export default function Sponsors() {  
  return (
    <ContactContainer className="container-contact">
      <ContactInformationContainer className="cols">
        <div className="contact">
          <Title>CONTÁCTANOS</Title><br />
          <Text>
            Somos creadores de experiencias tales como: Programas | Eventos |
            Actividades e Iniciativas para todos los emprendedores para
            ayudarlos a trazar una ruta dentro de nuestro ecosistema.
          </Text>
          <Text>Contáctanos</Text><br />
          <Text>
            Av. H. Colegio Militar 4709, Nombre de Dios, 31150 Chihuahua, Chih.
          </Text>
          <Text>hola@startupchihuahua.com</Text>
          <Text>(614) 182-2983 WPP*</Text> <br /> <br /><br />
          <Button>Contáctanos</Button>
        </div>
      </ContactInformationContainer>
    </ContactContainer>
  );
}

