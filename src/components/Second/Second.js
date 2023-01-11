import React from 'react';
import './Second.css';

function Second() {
    return(
        <div className='container-fluid second-container'>
            <h2>Somos el ecosistema de<br/>Desarrollo para los<br/>innovadores.</h2>
            <p><b>"Startup Chihuahua"</b>es el Ecosistema promovido por Chihuahua futura con el fin de impulsar<br/>estrategias de Emprendimiento, Ciencia, Tecnología e Innovación que ayuden a incrementar la<br/>competitividad de la región.<br/><br/>Esto como base aseguramos las condiciones propicias para la creación y fortalecimiento de<br/>Modelos de Negocio basados en Ciencia, Tecnología e Innovación.</p>
            <div> 
                <button className='btn-modi' type='button'>
                    <span>Conoce Más</span>  
                </button>     
            </div> 
        </div>
    ); 
} 

export default Second;     