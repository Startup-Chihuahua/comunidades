import styled from 'styled-components';

export const Container = styled.div`
padding: 30px;
background-color: #EAE6DD;`;

export const Title = styled.h5`
padding: 30px;
font-weight: 1000;
font-size: x-large;
color:#0F6CDE;
text-align: center;
`;

export const Text = styled.p`
    color: #0F6CDE;
    text-align: center;`;

export const Img = styled.img`
    width: 130px;
    height: 130px;
    float: right;
    margin-right 50px;
`;

export const Button = styled.button`
width: 130px;
padding: 15px 0px;
margin: 20px 10px;
border: 2px solid #000000;
border-radius: 35px;
display:block;
margin:auto;
font-size:20px;
font-family: Arial, Helvetica, sans-serif;

&:hover {
    color: #000000; 
    /* font-weight: 600;  */
    border: 3px solid #000000;
    background-color: #FFFFFF; 
    border-color: #000000;
  }
 
`;



