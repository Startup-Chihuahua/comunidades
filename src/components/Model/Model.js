import React from "react";
import "./Model.css";

const Model = () => {
  return (
    <div className="container-model">
      <h1 className="cols-title">Modelo del Ecosistema</h1>
      <hr />
      <div className="cols-model container-fluid">
        <div className="">
          <h3 className="cols-subtitle">Sensibilizacion y cultura</h3>
        </div>
        <div className="">
          <p className="cols-p">
            Primero necesitamos inspirar a la sociedad de la región para lograr
            que tengan una vision innovadora con nuevos retos para un mundo
            tecnologico dentro de un ecosistema innovador.
          </p>
        </div>
        <hr className="espacio" />
      </div>

      <hr className="espacio" />
      <div className="cols-model container-fluid">
        <div className="">
          <h3 className="cols-subtitle">Inmersión y conocimiento</h3>
        </div>
        <div className="">
          <p className="cols-p">
            Un ves que hemos hecho el paso de cultivar a las personas toca
            encontrar a aquellos que tengan y puedan desarrollar ideas
            innovadoras que puedan cambiar la vida de la region ya sea B2C o B2B
            con proyectos de base científica y/o tecnológica.
          </p>
        </div>
        <hr className="espacio" />
      </div>

      <hr className="espacio" />
      <div className="cols-model container-fluid">
        <div className="">
          <h3 className="cols-subtitle">Desarrollo de ideas y Proyectos</h3>
        </div>
        <div className="">
          <p className="cols-p">
            Lograr desarrollar proyectos que sean viables dentro de un modelo de
            negocio utilizando las ideas desarrolladas un paso atrás para lograr
            que tenga un crecimiento exponencial.
          </p>
        </div>
      </div>
      <hr className="espacio" />
      <div>
        <button className="button-model">Conocer Nuestro Manifiesto</button>
      </div>
    </div>
  );
};

export default Model;

/*
<div className="model">
        <h1>Modelo del Ecosistema</h1>
        
        <hr/>
        
        <div className="cols">
            <div>
            <h3>Sensibilizacion y Cultura</h3>
            </div>
            <div>
            <p>Primero necesitamos inspirar a la sociedad de la región para lograr que tengan una vision innovadora con nuevos retos para un mundo tecnologico dentro de un ecosistema innovador.</p>
            </div>
        </div>
        
        <hr/>
        
        <div className="cols">
            <div>
            <h3>Inmersión y conocimiento</h3>
            </div>
            <div>
            <p>Un ves que hemos hecho el paso de cultivar a las personas toca encontrar a aquellos que tengan y puedan desarrollar ideas innovadoras que puedan cambiar la vida de la region ya sea B2C o B2B con proyectos de base científica y/o tecnológica.</p>
            </div>
        </div>
        <br/>
        <hr/>
        <br/>
        <div className="cols">
            <div>
            <h3>Desarrollo de ideas y Proyectos</h3>
            </div>
            <div>
            <p>Lograr desarrollar proyectos que sean viables dentro de un modelo de negocio utilizando las ideas desarrolladas un paso atrás para lograr que tenga un crecimiento exponencial.</p>
            </div>
        </div>
        <br/>
        <hr/>
        <br/>
        <div className="container">
            <button>Conocer Nuestro Manifiesto</button>
        </div>
    </div>



*/
