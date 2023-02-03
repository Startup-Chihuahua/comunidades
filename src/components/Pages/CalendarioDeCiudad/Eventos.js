import React, {useState} from 'react';
import Modal from './Modal/Modal';   
import { Container, ContainerContent, Title, Content, ButtonContainer, ButtonCreate, ContainerCards, Heading, Row, Card, CardHeader, CardBody, ButtonControl } from './Eventos.css'; 

const Cards = () => { 
    const [estadoModal, cambiarEstadoModal] = useState(false);     

    return (
        <>
            <Container>
                <ContainerContent> 
                    <Title>Agenda de Ciudad</Title> 
                    <Content>Todos los eventos de emprendimiento, ciencia y<br />tecnologia de Chihuahua</Content>
                    <ButtonContainer>
                        <ButtonCreate>Sube tu evento ahora</ButtonCreate>
                    </ButtonContainer>
                </ContainerContent> 
                <ContainerCards>
                    <Heading> 
                        <h2>Eventos</h2>   
                    </Heading>
                    <Row> 
                        <Card>
                            <CardHeader>
                                <h3>Evento</h3>
                            </CardHeader>
                            <CardBody> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <ButtonControl onClick={() => cambiarEstadoModal(!estadoModal)}>Leer mas</ButtonControl> 
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h3>Evento</h3>
                            </CardHeader>
                            <CardBody> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <ButtonControl onClick={() => cambiarEstadoModal(!estadoModal)}>Leer mas</ButtonControl> 
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <h3>Evento</h3>
                            </CardHeader>
                            <CardBody> 
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <ButtonControl onClick={() => cambiarEstadoModal(!estadoModal)}>Leer mas</ButtonControl> 
                            </CardBody>
                        </Card>
                    </Row>
                </ContainerCards>
            </Container>
            <Modal estado = {estadoModal} cambiarEstado = {cambiarEstadoModal}>  
            </Modal> 
        </>
    );
}

export default Cards;     