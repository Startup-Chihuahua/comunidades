import styled from "styled-components";
import email from '../../../assets/email-icon.png';
import upload from '../../../assets/upload-icon.png';
import price from '../../../assets/price-icon.png';

export const Main = styled.div`
    font-family: Arial;
    background: #0f6cde;
    position: relative;
    padding: 60px 50px 100px 50px; 
`;

export const Title = styled.h1`
    font-family: Arial;
    color: #d4d6d4;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
`;

export const Subtitle = styled.h3`
    font-family: Arial;
    color: #d4d6d4;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`;

export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: .5fr .5fr .5fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    background: #fff;
    color: #000000;
    border: 1px solid white;
`;

export const AddTitle = styled.h3`
    padding: 0 5px 10px 5px;
    margin: 5px;
    font-family: Arial;
    font-size: 20px;
`;

export const Startup1 = styled.div`
    color: #000000;
    padding: 10px;
`;

export const AddSubtitle = styled.h5`
    font-family: Arial;
    font-size: 20px;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`;

export const Content = styled.label`
    background:#fff;
`;

export const BoxText = styled.input`
    border: 0;
    border-bottom: 1px solid;
`;

export const Options = styled.select`
    border: 0;
    border-bottom: 1px solid;
`;

export const Paragraph = styled.textarea`
    border: 0;
    border-bottom: 1px solid;
`;

export const Iconemail = styled.img.attrs({
    src: `${email}`
})`
    width:20px;
    height:20px;
`;

export const Iconupload = styled.img.attrs({
    src: `${upload}`
})`
    width:20px;
    height:20px;
`;

export const Iconprice = styled.img.attrs({
    src: `${price}`
})`
    width:20px;
    height:20px;
`;

export const Boxshort = styled.div`
    padding: 0;
`;

export const StartupButton = styled.div`
    color: #000000;
    padding: 10px;
    margin: 0;
    justify-item: center;
`;

export const Send = styled.button`
    background: #0f6cde;
    justyfy-content: left;
    border-radius: 5px;  
    color: black;
    font-size: 16px;
    font-weight: bold;
    width: 130px;
    height: 30px;
    margin-bottom: 10px;
    &:hover{
    color: #FFFFFF; n
    background-color: #0f6cde; 
    }
`;