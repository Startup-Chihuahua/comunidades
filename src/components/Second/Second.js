import React from 'react';
import { SecondContainer, Title, Text, ButtonContent } from './Second.css.js'; 

function Second() {
    return(
        <SecondContainer className='container-fluid'>
            <Title>Somos el ecosistema de<br/>Desarrollo para los<br/>innovadores.</Title>
            <Text><b>"Startup Chihuahua"</b>es el Ecosistema promovido por Chihuahua futura con el fin de impulsar<br/>estrategias de Emprendimiento, Ciencia, Tecnología e Innovación que ayuden a incrementar la<br/>competitividad de la región.<br/><br/>Esto como base aseguramos las condiciones propicias para la creación y fortalecimiento de<br/>Modelos de Negocio basados en Ciencia, Tecnología e Innovación.</Text>
            <div> 
                <ButtonContent type='button'>
                    <span>Conoce Más</span>  
                </ButtonContent>      
            </div> 
        </SecondContainer>   
    ); 
}  

export default Second;       