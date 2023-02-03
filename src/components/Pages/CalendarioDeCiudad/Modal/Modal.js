import React from "react";
import {ContainerModal, ContainerTitleModal, ButtonCloseModal, ContentModal} from './Modal.css.js';   

const Modal = ({ children, estado, cambiarEstado }) => {
    return (
        <>
            {estado &&
                <ContainerModal>
                    <ContentModal>
                        <ContainerTitleModal>
                            <h3 className="title-modal">Contenido</h3>
                        </ContainerTitleModal>
                        <ButtonCloseModal onClick={() => cambiarEstado(false)}>
                            <img src={require('../../../../assets/image_close.png')} alt='' width='30px' />
                        </ButtonCloseModal>
                        {children}
                    </ContentModal> 
                </ContainerModal>
            }
        </>
    );
}

export default Modal; 