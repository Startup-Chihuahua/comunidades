import React from "react";
import { Overlay,ContenedorModal,EncabezadoModal,BotonCerrar,Icon,Salir } from "./Result.css.js";

function Result({ estado2, cambiarEstado2}) {

    return(
      <>
      {estado2 &&
       <Overlay>
        <ContenedorModal>
          <EncabezadoModal>
            <h3 >Sin resultados</h3>
          </EncabezadoModal>
          <BotonCerrar onClick={() => cambiarEstado2(false)}><Icon src={require("../../../../assets/icon-close.png")}/></BotonCerrar>
          <div>
            <h1>No hay resultados por ahora</h1>
            <Salir onClick={() => cambiarEstado2(false) }>Salir</Salir> 
          </div>
        </ContenedorModal>
       </Overlay>
        }
      </>
  );
}
    
export default Result;