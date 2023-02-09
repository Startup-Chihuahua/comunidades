import React from "react";
import { Container, Title, SecondContiner, FirstImg, CommunityName, CommunityContent, SecondImg, CommunityNameEdit, CommunityContentEdit, LastContainer, ButtonNext, ButtonControl, ButtonControlEdit, SpanContent } from './CultureEducation.css.js';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../../routes/routes';

function CultureEducation() {
    const handleClick = () => {
        window.location.replace('https://facebook.com/HFChih/');
    }; 

    return (
        <>
            <Container>
                <Title>Comunidades que promueven la<br />cultura del futuro</Title>
            </Container>
            <SecondContiner>
                <div>
                    <FirstImg src={require('../../../../../assets/image_hackers_and_founders.png')} alt='Hackers and Founders' />
                    <CommunityName>Hackers and Founders</CommunityName>
                    <CommunityContent>Hackers/Founders empodera a los emprendedores en tecnología a través<br />de acceso a la comunidad,educación y servicios globales.</CommunityContent>
                    <ButtonControl type='button'>
                        <span onClick={handleClick}>Más info</span>
                    </ButtonControl>
                </div>
                <div>
                    <SecondImg src={require('../../../../../assets/image_startup_grind.jpg')} alt='Startup Grind' />
                    <CommunityNameEdit>Startup Grind</CommunityNameEdit>
                    <CommunityContentEdit>StartUp Grind es una comunidad mundial diseñada para formar, inspirar y<br />conectar emprendedores en Chihuahua enfocados a las  StartUps<br />(empresas de alto rendimiento o emergentes).</CommunityContentEdit>
                    <ButtonControlEdit type='button'>
                        <span>Más info</span>
                    </ButtonControlEdit>
                </div>
            </SecondContiner>
            <LastContainer>
                <Link to={ROUTES.BUSSINES_NETWORKING}>
                    <ButtonNext type='buton'>
                        <SpanContent>Comunidades de<br />negocios&nbsp;&nbsp;&nbsp;&#10097;</SpanContent>
                    </ButtonNext>
                </Link>
            </LastContainer>
        </>
    );
}
export default CultureEducation;