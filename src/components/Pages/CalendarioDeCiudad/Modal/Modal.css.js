import styled from 'styled-components';  

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px; 
    left: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center; 
`;      

export const ContainerModal = styled.div`
    width: 500px;
    min-height: 100px; 
    background: #FFFFFF;
    position: relative; 
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
`;     

export const TitleModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px; 
    padding-bottom: 10px;
    border-bottom: 1px solid #E4E4E4;

    h2 { 
        color: blue;
    }  
`;    

export const ButtonModal = styled.div`
    position: absolute;
    top: 20px;
    right: 20px; 
    width: 30px; 
    height: 30px; 
    border: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;

    &:hover { 
        background: #FFFFFF;
    }

    img {
        width: 20px;
    } 
`;   