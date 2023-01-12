import React from "react";
import "./Contact.css";
import {MainContainerContact, ContainerInformationContact, ContainerContact, TitleContact, TextContact, ButtonContact} from "./Contact.css.js"

export default function Sponsors() {  
  return (
    <MainContainerContact className="container-contact">
      <ContainerInformationContact className="cols">
        <ContainerContact className="contact">
          <TitleContact>CONTÁCTANOS</TitleContact><br />
          <TextContact>
            Somos creadores de experiencias tales como: Programas | Eventos |
            Actividades e Iniciativas para todos los emprendedores para
            ayudarlos a trazar una ruta dentro de nuestro ecosistema.
          </TextContact>
          <TextContact>Contáctanos</TextContact><br />
          <TextContact>
            Av. H. Colegio Militar 4709, Nombre de Dios, 31150 Chihuahua, Chih.
          </TextContact>
          <TextContact>hola@startupchihuahua.com</TextContact>
          <TextContact>(614) 182-2983 WPP*</TextContact> <br /> <br /><br />
          <ButtonContact>Contáctanos</ButtonContact>
        </ContainerContact>
      </ContainerInformationContact>
    </MainContainerContact>
  );
}

