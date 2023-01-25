import React from 'react';

import { Container, Img, InfoContainer, Title, Text, Button, } from './MeetUp.css.js';


function MeetUp() {
    return (
        <div>
        <Container>
            <Img
                src={require("../../../assets/meetupimage.png")}
                alt="logo StartupChihuahua" />
            <InfoContainer>
                <Title>COMMUNITY MEET UP</Title><br />
                <Text>¿Sabes cuál es la diferencia entre tener una buena intención y generar un cambio real en el mundo? ¡Contar con las personas correctas! </Text>
                <Text>En Chihuahua hay más de 20 comunidades que promueven la Ciencia, Tecnología, Innovación, Emprendimiento Tecnológico, etc. Cada cierto tiempo algunos de sus líderes y miembros nos reunimos en sesiones de Community Meet up, una "Comunidad de comunidades". </Text><br />
                <Text><strong>#ELFUTUROESHOY  #IMPACTOCOLECTIVO #COMMUNITYBUILDERS #SOCIALTEC</strong></Text>
                <Button type="button" className="btn btn-dark">Conoce las comunidades</Button>
            </InfoContainer>
         </Container>       
        </div>
    );
}

export default MeetUp;
