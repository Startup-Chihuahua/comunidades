import React from "react";
import "./Events.css";

const Events = () => {
  return (
    <div className="container-event">
      <div className="cols">
        <div className="event">
          <h1>Los próx. eventos del Reap Society</h1>
          <br />
          <p>
            Todo comienza con una idea. Tal vez quieras comenzar un negocio o
            convertir un pasatiempo en algo más. O bien, es posible que tengas
            un proyecto creativo para compartir con el mundo. Sea lo que sea, la
            manera en la que cuentes tu historia en línea puede marcar la
            diferencia.
          </p>
          <br />
          <button>Agrega tu evento</button>
        </div>
        <div className="col2">
          <p>No hay próximos eventos.</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
