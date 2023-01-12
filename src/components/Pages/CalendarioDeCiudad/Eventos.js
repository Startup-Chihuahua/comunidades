import React from 'react';
import { EventsContainer, TitleEventsContainer, ContentEventsContainer, ButtonContainerDiv, ButtonEvents } from './Eventos.css.js'; 

function Eventos() {
    return(
        <EventsContainer className='container-fluid'>
            <TitleEventsContainer>Agenda de ciudad</TitleEventsContainer>
            <ContentEventsContainer>todos los eventos de emprendimiento, ciencia y<br/>tecnología de chihuahua</ContentEventsContainer><br/>
            <ButtonContainerDiv>
                <ButtonEvents type='button'>
                    Sube tu evento ahora 
                </ButtonEvents> 
            </ButtonContainerDiv> 
        </EventsContainer> 
    );
}

export default Eventos;  