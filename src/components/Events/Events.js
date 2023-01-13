import React from "react";
import './Events.css.js';
import { ColsEvent, ContainerEvent, H1Event, EventsP, Pevent, Pevent2, ButtonEvent } from "./Events.css.js";

function Events() {
  return (
    <ContainerEvent>
      <ColsEvent className="cols-event">
        <div className="event">
          <H1Event className="h1-event">Los próx. eventos del Reap Society</H1Event><br />
          <EventsP className="events-p">
          <Pevent className="p-event">
            Todo comienza con una idea. Tal vez quieras comenzar un negocio o
            convertir un pasatiempo en algo más. O bien, es posible que tengas
            un proyecto creativo para compartir con el mundo. Sea lo que sea, la
            manera en la que cuentes tu historia en línea puede marcar la
            diferencia.
          </Pevent>
          </EventsP>
          <ButtonEvent className="button-event">Agrega tu evento</ButtonEvent>
        </div>
        <div className="col2">
          <Pevent2>No hay próximos eventos.</Pevent2>
        </div>
      </ColsEvent>
    </ContainerEvent>
  );
};

export default Events;

/*
<ContainerEvent>
      <div className="cols-event">
        <div className="event">
          <h1 className="h1-event">Los próx. eventos del Reap Society</h1><br />
          <div className="events-p">
          <p className="p-event">
            Todo comienza con una idea. Tal vez quieras comenzar un negocio o
            convertir un pasatiempo en algo más. O bien, es posible que tengas
            un proyecto creativo para compartir con el mundo. Sea lo que sea, la
            manera en la que cuentes tu historia en línea puede marcar la
            diferencia.
          </p><br/>
          </div>
          <button className="button-event">Agrega tu evento</button>
        </div>
        <div className="col2">
          <p className="p-event2">No hay próximos eventos.</p>
        </div>
      </div>
    </ContainerEvent>

*/