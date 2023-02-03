import styled from 'styled-components'; 

export const ContainerModal = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
`; 

export const ContentModal = styled.div`
    width: 500px;
    min-height: 100px;
    background: #FFFFFF;
    position: relative;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; 
    padding: 20px;
`; 

export const ContainerTitleModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E4E4E4;
`; 

export const TitleModal = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: blue;
`; 

export const ButtonCloseModal = styled.div`
    position: absolute;
    top: 20px;
    right: 20px; 
    border: none;
    background: none; 
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;

    &:hover {
        background: #F2F2F2;
    }
`;   