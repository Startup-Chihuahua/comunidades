import React from "react";
import { Container, TitleContainer, Image, Content, ContainerRight, ContainerLeft, ImagesContainer, ImagesContainerb, Overlay, ContainerLeft1, Title, Description} from "./ConoceLasComunidades.css.js";

function ConoceLasComunidades() {
    return (
        <Container>
            <TitleContainer>
                <Title>HAY  GRUPOS DE PERSONAS MOVIDOS POR <br />LAS MISMAS PASIONES: CIENCIA, <br />TECNOLOGÍA, INNOVACIÓN Y <br /> EMPRENDIMIENTO TECNOLÓGICO</Title>
                <Description>HAZ CLICK EN CADA UNA DE LAS SECCIONES PARA CONOCERLOS</Description>
            </TitleContainer>
            <div className="button-container">
                <ImagesContainer>
                    <ContainerLeft>
                        <Image src={require("../../../assets/culture&education1.png")} alt="logo StartupChihuahua" />
                        <Overlay>
                            <Content><strong>COMUNIDADES QUE <br />PRUMEUEVEN LA<br />CULTURA DEL FUTURO</strong></Content>
                        </Overlay>
                    </ContainerLeft>
                    <ContainerRight>
                        <Image src={require("../../../assets/bussines&networking2.png")} alt="logo StartupChihuahua" />
                        <Overlay>
                            <Content><strong>COMUNIDADESD DE<br />NEGOCIOS</strong></Content>
                        </Overlay>
                    </ContainerRight>
                </ImagesContainer>
                <ImagesContainer>
                    <ContainerLeft>
                        <Image src={require("../../../assets/steam3.png")} alt="logo StartupChihuahua" />
                        <Overlay>
                            <Content><strong>COMUNIDADES DE STEAM</strong></Content>
                        </Overlay>
                    </ContainerLeft>
                    <ContainerRight>
                        <Image src={require("../../../assets/code&developers4.png")} alt="logo StartupChihuahua" />
                        <Overlay>
                            <Content><strong>COMUNIDADES DE<br />PROGRAMADORES</strong></Content>
                        </Overlay>
                    </ContainerRight>
                </ImagesContainer>
                <ImagesContainerb>
                    <ContainerLeft1>
                        <Image src={require("../../../assets/industry&profesionist5.png")} alt="logo StartupChihuahua" />
                        <Overlay>
                            <Content><strong>COMUNIDADES DE<br />PROGRAMADORES</strong></Content>
                        </Overlay>
                    </ContainerLeft1>
                </ImagesContainerb>
            </div>
        </Container>
    );
}
export default ConoceLasComunidades;