import styled from 'styled-components'; 

export const ContainerEvent = styled.div`
    position: relative;
    background: #0F6CDE;
    margin: 0;
    font-family: Arial;
    color: #d4d6d4;
    `;

export const ColsEvent = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 50px;   
    div{
    flex: 2;
    }
`;

export const H1Event = styled.h1`
    font-size: 60px;
    text-transform: uppercase;
    color: #d4d6d4;
    font-weight: bold;
    text-align: left;
    margin: 0 480px 0 0;
`;

export const EventsP = styled.p`
`;

export const Pevent = styled.p`
    .event  .p-event{
    font-size: 15px;
    margin: 5px;
    }
    color: #d4d6d4;
    text-align: left;
    padding: 0 450px 0 0;
    font-family: Arial;
`;

export const Pevent2 = styled.p`
    font-size: 15px;
    width: left;
    background-color: #34659b;
    max-width: 700px;
    max-height: 150px;
    color: #d4d6d4;
    margin: 1em;
    padding: 0;
`;

export const ButtonEvent = styled.button`
    position: relative;
    width: 200px; 
    padding: 15px 0;
    margin: 10px 10px; 
    font-weight: 600; 
    border: 3px solid #02F181;
    background-color: #02F181;
    border-radius: 35px;  
    color: black;  
    border-width: 3px;
    font-size: 15px; 
    .event .button-event{
    margin: 0 300px 10px 20px;
    }
    &:hover{
    color: #FFFFFF; 
    border: 3px solid #000000;
    background-color: #000000; 
    border-color: #02F181;
    }
`;
