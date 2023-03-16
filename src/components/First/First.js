import React from 'react';
import { Container, Title } from './First.css.js';     
/**
 * @brief Esta funcion agrega el estilo definido en First.css.js
 * @returns 
 */
function First() {
    return(
        <Container className='container-fluid'>
            <Title>El futuro<br/>empieza hoy<br/>¿Ya lo estás<br/>creando?</Title>
        </Container>
    );
}

export default First;  