import styled from 'styled-components';


export const ContactContainer=styled.div `
  position: relative;
  /* max-width: 1200px; */
  /* width: 100%; */
  background: #0F6CDE;
  /* padding: 10px ; */
  margin: 0;
  font-family: Arial;
  color: #d4d6d4;
  ;`

  export const ContactInformationContainer=styled.div `
  display: flex;
    flex-wrap: wrap;
    padding: 50px; `;

  export const Title=styled.h1 `
  font-size: 60px;
    text-transform: uppercase;
    color: #d4d6d4;
    font-weight: bold;
  `;

  export const Text=styled.p `
  font-size: 20px;
  width: 900px;`;
  

  export const Button=styled.button`
  position: relative;
  width: 200px; 
  padding: 15px 0;
  margin: 20px 10px; 
  font-weight: 600; 
  border: 2px solid rgb(2, 241, 129);
  background-color: rgb(2, 241, 129); 
  border-radius: 30px;  
  color: black;  
  border-width: 3px; 
  
  &:hover {
    color: #FFFFFF; 
    /* font-weight: 600;  */
    border: 3px solid rgb(0, 0, 0);
    background-color: rgb(0, 0, 0); 
    border-color: rgb(2, 241, 129);
  }
 
  `;