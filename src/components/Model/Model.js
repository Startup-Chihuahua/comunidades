import React from "react";
import './Model.css.js';
import { ContainerModel, ColsTitle, ColsModel, ColsSubtitle, ColsP, Space, ButtonModel } from "./Model.css.js";

const Model = () => {
  
  return (
    <ContainerModel>
      <ColsTitle>Modelo del Ecosistema</ColsTitle>
      <hr/>
      <ColsModel>
        <div>
          <ColsSubtitle>Sensibilizacion y cultura</ColsSubtitle>
        </div>
        <div>
          <ColsP>
            Primero necesitamos inspirar a la sociedad de la región para lograr
            que tengan una vision innovadora con nuevos retos para un mundo
            tecnologico dentro de un ecosistema innovador.
          </ColsP>
        </div>
        <Space/>
      </ColsModel>

      <Space/>
      <ColsModel>
        <div>
          <ColsSubtitle>Inmersión y conocimiento</ColsSubtitle>
        </div>
        <div>
          <ColsP>
            Un ves que hemos hecho el paso de cultivar a las personas toca
            encontrar a aquellos que tengan y puedan desarrollar ideas
            innovadoras que puedan cambiar la vida de la region ya sea B2C o B2B
            con proyectos de base científica y/o tecnológica.
          </ColsP>
        </div>
        <Space/>
      </ColsModel>

      <Space/>
      <ColsModel>
        <div>
          <ColsSubtitle>Desarrollo de ideas y Proyectos</ColsSubtitle>
        </div>
        <div>
          <ColsP>
            Lograr desarrollar proyectos que sean viables dentro de un modelo de
            negocio utilizando las ideas desarrolladas un paso atrás para lograr
            que tenga un crecimiento exponencial.
          </ColsP>
        </div>
      </ColsModel>
      <Space/>
      <br/>
      <div>
        <ButtonModel>Conocer Nuestro Manifiesto</ButtonModel>
      </div>
      <br/>
    </ContainerModel>
  );
};

export default Model;