import React from "react";
import './Events.css.js';
import { ColsEvent, ContainerEvent, TitleEvent, Content, Content2, Paragraph, Paragraph2, ButtonEvent } from "./Events.css.js";
/**
 * @brief Esta funcion (Events) es para agregar funciones al apartado de eventos de la pagina.
 * @returns 
 */
function Events() {
  return (
    <ContainerEvent>
      <ColsEvent>
      <Content>
        <TitleEvent>Los próx. eventos del Reap Society</TitleEvent><br />
          <div>
          <Paragraph>
            Todo comienza con una idea. Tal vez quieras comenzar un negocio o
            convertir un pasatiempo en algo más. O bien, es posible que tengas
            un proyecto creativo para compartir con el mundo. Sea lo que sea, la
            manera en la que cuentes tu historia en línea puede marcar la
            diferencia.
          </Paragraph>
          </div>
          <ButtonEvent>Agrega tu evento</ButtonEvent>
        </Content>
        <Content2>
          <Paragraph2>No hay próximos eventos.</Paragraph2>
        </Content2>
      </ColsEvent>
    </ContainerEvent>
  );
};

export default Events;