import React, { useState, useEffect } from "react";
import Axios from 'axios'; 
import {Container, ContainerEvents, Heading, Row, Card, CardHeader, CardBody, ButtonContainer, TitleEvents, ContentEvents, ButtonEvents} from './Eventos.css.js'; 
import Modal from '../../Pages/CalendarioDeCiudad/Modal/Modal'; 
 

function Eventos() {
    const [estadoModal, cambiarEstadoModal] = useState(false);
    const [data, setData] = useState([]);
    const [eventoActual, setEventoActual] = useState(0); 

    useEffect(() => {
        Axios.get('https://localhost:3000/events') 
        .then(function (response) {
            setData(response.data);
            console.log(response) 
        })

        .catch(function (error) {
            console.log(error)
        })
    }, []); 

    /*const mockdata = [ 
        {
            id: 0,
            NombreEvento: 'Evento 1',
            NombreInstitucion: 'Aspen Institute',
            DescripcionEvento: 'No te pierdas esta oportunidad de conocer el avance de los ODS.', 
            LinkRegistro: 'http://bit.ly/8febCUU',
            FechaHoraInicio: '08-Feb-2023 1:30pm',
            FechaHoraTermino: '08-Feb-2023 3:00pm',
            Modalidad: 'Presencial',
            Lugar: 'Living Lab',
            Ciudad: 'Chihuahua',
            CostoEvento: 'Gratis', 
        },
        {
            id: 1,
            NombreEvento: 'Evento 2',
            NombreInstitucion: 'Aspen Institute',
            DescripcionEvento: 'No te pierdas esta oportunidad de conocer los avances de los ODS.',
            LinkRegistro: 'http://bit.ly/8febCUU',
            FechaHoraInicio: '08-Feb-2023 1:30pm',
            FechaHoraTermino: '08-Feb-2023 3:00pm', 
            Modalidad: 'Presencial',
            Lugar: 'Living Lab',
            Ciudad: 'Chihuahua', 
            CostoEvento: 'Gratis', 
        }, 
        { 
            id: 2,
            NombreEvento: 'Evento 3',
            NombreInstitucion: 'Aspen Institute',
            DescripcionEvento: 'No te pierdas esta oportunidad de conocer los avances de los ODS.',
            LinkRegistro: 'http://bit.ly/8febCUU',
            FechaHoraInicio: '08-Feb-2023 1:30pm',
            FechaHoraTermino: '08-Feb-2023 3:00pm',
            Modalidad: 'Presencial',
            Lugar: 'Living Lab',
            Ciudad: 'Chihuahua', 
            CostoEvento: 'Gratis', 
        },
        {
            id: 3,
            NombreEvento: 'Evento 4',
            NombreInstitucion: 'Aspen Institute',
            DescripcionEvento: 'No te pierdas esta oportunidad de conocer los avances de los ODS.',
            LinkRegistro: 'http://bit.ly/8febCUU',
            FechaHoraInicio: '08-Feb-2023 1:30pm',
            FechaHoraTermino: '08-Feb-2023 3:00pm',
            Modalidad: 'Presencial',
            Lugar: 'Living Lab',
            Ciudad: 'Chihuahua',
            CostoEvento: 'Gratis', 
        },
        {
            id: 4,
            NombreEvento: 'Evento 5',
            NombreInstitucion: 'Aspen Institute',
            DescripcionEvento: 'No te pierdas esta oportunidad de conocer los avances de los ODS.',
            LinkRegistro: 'http://bit.ly/8febCUU',
            FechaHoraInicio: '08-Feb-2023 1:30pm',
            FechaHoraTermino: '08-Feb-2023 3:00pm',
            Modalidad: 'Presencial',
            Lugar: 'Living Lab',
            Ciudad: 'Chihuahua', 
            CostoEvento: 'Gratis', 
        },
        {
            id: 5,
            NombreEvento: 'Evento 6', 
            NombreInstitucion: 'Aspen Institute',
            DescripcionEvento: 'No te pierdas esta oportunidad de conocer los avances de los ODS.',
            LinkRegistro: 'http://bit.ly/8febCUU',
            FechaHoraInicio: '08-Feb-2023 1:30pm',
            FechaHoraTermino: '08-Feb-2023 3:00pm',
            Modalidad: 'Presencial',
            Lugar: 'Living Lab',
            Ciudad: 'Chihuahua', 
            CostoEvento: 'Gratis', 
        },
    ];*/

    const handleShowEventDetails = (eventIndex) => {
        cambiarEstadoModal(!estadoModal);
        setEventoActual(eventIndex); 
    }

    return(
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
                <Heading>
                    <h2>Eventos</h2>  
                </Heading>
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
}

export default Eventos;           