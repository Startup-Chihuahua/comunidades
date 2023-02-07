import React from "react";
import { useNavigate } from "react-router-dom";
import {
  EventsContainer,
  TitleEventsContainer,
  ContentEventsContainer,
  ButtonContainerDiv,
  ButtonEvents,
} from "./Eventos.css.js";

function Eventos() {
  const navigate = useNavigate();
  return (
    <EventsContainer className="container-fluid">
      <TitleEventsContainer>Agenda de ciudad</TitleEventsContainer>
      <ContentEventsContainer>
        todos los eventos de emprendimiento, ciencia y<br />
        tecnología de chihuahua
      </ContentEventsContainer>
      <br />
      <ButtonContainerDiv>
        <ButtonEvents
          type="button"
          onClick={() => {
            navigate('/registrar-evento');
          }}
        >
          Sube tu evento ahora
        </ButtonEvents>
      </ButtonContainerDiv>
    </EventsContainer>
  );
}

export default Eventos;
