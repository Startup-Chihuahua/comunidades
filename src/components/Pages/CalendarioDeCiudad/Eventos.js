import React, { useState, useEffect } from "react";
import { GetEvents } from "../../../api/events";
import {Container, ContainerEvents, Heading, Row, Card, CardHeader, CardBody, ButtonContainer, TitleEvents, ContentEvents, ButtonEvents} from './Eventos.css.js'; 
import Modal from '../../Pages/CalendarioDeCiudad/Modal/Modal'; 
import { Loader } from "../../Loader/Loader";
 

function Eventos() {
    const [estadoModal, cambiarEstadoModal] = useState(false);
    const [data, setData] = useState([]);
    const [eventoActual, setEventoActual] = useState(0); 
    const [load, setLoad] = useState(false);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlhdCI6MTY3NTg3MjI0NiwiZXhwIjoxNjc1ODc5NDQ2fQ.WceBSoo0MdsamaSrhBiUUO3if-lGAatxa-7bRMi90Fg'

    useEffect(() => {
       getEvents(token);
    }, []); 

    const getEvents = async (token) => {
        setLoad(true);
    
        try {
          const {
            data: { data }
          } = await GetEvents(token);
          setLoad(false);
         setData(data);
        } catch (e) {
          console.log(e);
          setLoad(false);
        }
      };


    const handleShowEventDetails = (eventIndex) => {
        cambiarEstadoModal(!estadoModal);
        setEventoActual(eventIndex); 
    }
    const modal = (
        <>
        <Container>
            <TitleEvents>
                <h1>Eventos del ecosistema</h1> 
            </TitleEvents>
            <ContentEvents>
                <p>Todos los eventos de emprendimiento, ciencia y tecnologia de chihuahua.</p>
            </ContentEvents>
            <ButtonEvents>
                <button>Sube tu evento ahora</button> 
            </ButtonEvents> 
            <ContainerEvents>
                <br/>
                <Row>
                    {data.map((data, index) => {
                        return(
                            <Card key={data.id}> 
                                <CardHeader> 
                                    <h2>{data.event_name}</h2> 
                                </CardHeader>
                                <CardBody>
                                    <h4><strong>{data.location}</strong></h4> 
                                    <p>{data.start_date}<p>{data.modality}</p></p>
                                    <p>{data.community_name}</p>
                                    <p>{data.description}</p> 
                                    <p><strong>{data.url_form}</strong></p>  
                                    <ButtonContainer onClick={() => handleShowEventDetails(index)}>
                                        Leer mas
                                    </ButtonContainer>
                                </CardBody>
                            </Card>
                        );
                    })}
                </Row>
            </ContainerEvents>
        </Container>
        <Modal estado={estadoModal} cambiarEstado={cambiarEstadoModal} data={data[eventoActual]}/> 
        </>

    );

    return load  ?  <Loader /> : modal;
}

export default Eventos;           