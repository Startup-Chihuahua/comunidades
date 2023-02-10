import React from "react";
import "./CodeDevelopers.css.js"
import { ButtonInfo, Container, TitleContainer, Title, ImageContainer,  Content, CourseName, Description, BotomContainer, LeftButon, RightButon, ImagesBody} from "./CodeDevelopers.css.js";
import { Link} from "react-router-dom"
import { ROUTES } from "../../../../../routes/routes.js"

function codeDevelopers() {

    const handleClick =() =>{
        window.location.replace("https://www.superhappydevhouse.mx/")
    };

    return (
        <Container>
            <TitleContainer>
            <Title>Comunidades de programadores</Title>
            </TitleContainer>
            <ImageContainer>
                <Content>
                    <ImagesBody src={require("../../../../../assets/superhappydevhouse.jpg")} alt="Super Happy Dev House" />
                    <CourseName><strong>SUPER HAPPY DEV HOUSE</strong></CourseName>
                    <Description>Super Happy Dev House es una comunidad para desarrolladores, creativos y curiosos de la tecnología.</Description><br/><br/>
                    <ButtonInfo onCLick={handleClick}>Más info</ButtonInfo>
                </Content>
                <Content>
                    <ImagesBody src={require("../../../../../assets/codersclub.jpg")} alt="Coders Club" />
                    <CourseName><strong>CODERS CLUB</strong></CourseName>
                    <Description>La comunidad tecnológica Chihuahua, mejor conocida como “coders club” es una comunidad de devs para devs.</Description><br/><br/>
                    <ButtonInfo>Más info</ButtonInfo>
                </Content>
                <Content>
                    <ImagesBody src={require("../../../../../assets/grupolinuxchihuahua.jpg")} alt="Grupo Linux Chihuahua" />
                    <CourseName><strong>GRUPO LINUX CHIHUAHUA</strong></CourseName>
                    <Description>El grupo bLINUX Chihuahua, también conocido como GLUCH es una organización sin fines de lucro dedicada a la promoción, soporte y  desarrollo de Software Libre y promoción de la cultura libre.</Description><br/>
                    <ButtonInfo>Más info</ButtonInfo>
                </Content>
            </ImageContainer>
            <BotomContainer>
                <LeftButon><span>&#10096; &nbsp; COMUNIDADES <br/> &nbsp; &nbsp; &nbsp;DE STEAM</span></LeftButon>
                <RightButon><span>COMUNIDADES DE INDUSTRIAS <br/> Y PROFESIONISTAS &nbsp; &nbsp;&#10097; </span></RightButon>
            </BotomContainer>
        </Container>
    );
}
export default codeDevelopers;;