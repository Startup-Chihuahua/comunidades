import styled from "styled-components";

export const Main = styled.div`
    background-color: #0F6FE4;
`;

export const ContainerDividor = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px; 
`;

export const ContainerSearch = styled.div`
    margin: 40px auto;
    width: 300px;
    height: 50px;
    position: relative;
    top: 0;
    left: 0;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const Form = styled.form`
    margin: 40px auto;
    width: 100px;
    height: 50px;
`;

export const ContainerTable = styled.div`
    background-color: #0F6FE4;
    -webkit-transition: all .5s; 
    -moz-transition: all .5s; 
    -o-transition: all .5s; 
    transition: all .5s; 
    padding: 40px;
    thead{
        background-color: #405064;
    }
    tbody{
        background-color: #fff;
    }
`;

export const InputSearch = styled.input`
    width: 150px; 
    padding: 9px 20px 9px 40px;
    border-radius: 30px;
    border:none;
    -webkit-transition: all .5s; 
    -moz-transition: all .5s; 
    -o-transition: all .5s; 
    transition: all .5s;
    &:focus{
        width: 200px; 
        padding-left: 10px; 
        color: #000;
        background-color: #FFF;
    }
    `;

export const Icon = styled.img`
    width: 40px;
    height: 40px;
`;

export const ButtonEdit = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    border: none;
`;

export const ButtonResults = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 20px;
    padding: 10px;
    margin: 20px;
`;