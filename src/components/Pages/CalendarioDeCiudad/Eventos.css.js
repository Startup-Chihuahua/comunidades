import styled from 'styled-components'; 

export const EventsContainer = styled.div`
    padding: 120px;
    background-color: #0F6CDE;
`; 

export const TitleEventsContainer = styled.h1`
    padding: 20px;
    display: flex;
    justify-content: center;
    font-size: 60px; 
    font-weight: bold;
    text-transform: uppercase; 
    color: #FFFFFF; 
`;

export const ContentEventsContainer = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: center;
`;

export const ButtonContainerDiv = styled.div`
    display:flex;
    justify-content: center;
`;

export const ButtonEvents = styled.button`
    padding: 15px; 
    margin: 20px 10px; 
    font-weight: 600; 
    border: 2px solid #02F181;
    background-color: #02F181;  
    border-radius: 30px;  
    color: #000000;  
    border-width: 3px; 

    &:hover {
        color: #02F181;  
        font-weight: 600; 
        border: 3px solid #000000; 
        background-color: #000000; 
        border-color: #02F181;
}
`;