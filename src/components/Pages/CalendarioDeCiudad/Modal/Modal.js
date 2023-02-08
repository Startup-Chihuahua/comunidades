import React from "react";
import {Container, ContainerModal, TitleModal, ButtonModal} from './Modal.css.js';     

function Modal({estado, cambiarEstado, data}) {
    console.log(data);

    return(
        <>
        {estado && 
        <Container>
            <ContainerModal>
                <TitleModal>
                    <h2>{data.event_name}</h2> 
                </TitleModal>
                <ButtonModal onClick={() => cambiarEstado(false)}> 
                    <img src={require('../../../../assets/image_close.png')} alt=''/>
                </ButtonModal>
                <p><strong>Nombre del Evento:</strong><br/>{data.event_name}</p>
                <p><strong>Nombre de la comunidad o institución que organiza:</strong><br/>{data.community_name}</p>
                <p><strong>Descripción del evento:</strong><br/>{data.description}</p>
                <p><strong>Link del formulario de registro:</strong><br/>{data.url_form}</p>
                <p><strong>Fecha y hora de inicio:</strong><br/>{data.start_date}</p>
                <p><strong>Fecha y hora de termino:</strong><br/>{data.end_date}</p>
                <p><strong>Modalidad:</strong><br/>{data.modality}</p> 
                <p><strong>Ubicacion:</strong><br/>{data.location}</p> 
                <p><strong>Costo del evento:</strong><br/>{data.cost}</p>        
            </ContainerModal>   
        </Container>  
        } 
        </> 
    );
}

export default Modal;     