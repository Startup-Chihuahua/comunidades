import React from 'react';
import './Model.css';

const Model = () => {
    return (
        <div className="container-model ">
        <div className="model">
        <h1>Modelo del Ecosistema</h1>
        <br/>
        <hr/>
        <br/>
        <div className="cols">
            <div>
            <h3>Sensibilizacion y Cultura</h3>
            </div>
            <div>
            <p>Primero necesitamos inspirar a la sociedad de la región para lograr que tengan una vision innovadora con nuevos retos para un mundo tecnologico dentro de un ecosistema innovador.</p>
            </div>
        </div>
        <br/>
        <hr/>
        <br/>
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
</div>
    );
}

export default Model;