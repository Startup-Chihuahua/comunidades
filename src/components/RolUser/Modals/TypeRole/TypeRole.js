import React from "react";
import { Overlay,ContenedorModal,EncabezadoModal,BotonCerrar,Icon,ContainerType,SelectContainer,SelectBox,Guardar } from "./TypeRole.css.js";

function TypeRole({ estado, cambiarEstado, resultado}) {

    return(
      <>
      {estado &&
       <Overlay>
        <ContenedorModal>
          <EncabezadoModal>
            <h2>Tipo de usuario</h2>
          </EncabezadoModal>
          <BotonCerrar onClick={() => cambiarEstado(false)}><Icon src={require("../../../../assets/icon-close.png")}/></BotonCerrar>
          
          <ContainerType>
            <h3>Asignar rol a: <p>{resultado}</p></h3>
            <SelectContainer id="typeUser">
                <SelectBox name="typeUser">
                  <option hidden>Tipo de usuario</option>
                  <option value="Mentor">Mentor</option>
                  <option value="Administrador">Administrador</option>
                </SelectBox>
              </SelectContainer>
            <Guardar onClick={() => cambiarEstado(false) } >Guardar cambios</Guardar>
            
          </ContainerType>
        </ContenedorModal>
       </Overlay>
        }
      </>
  );
}
    
export default TypeRole;