import React from 'react';
import "./Sponsors.css";

function Sponsors() {
    return(
        <div className='container-fluid' id="container">
            <div ><h1 className='Titulo' id="TituloSponsors"> NUESTROS SPONSORS </h1></div>
            <br/><br/><br/><br/>
            <div class="row align-items-start">
            <div class="col">
                <img src={require ('../../assets/ChihuahuaGob.png')} alt='Logo Gobierno Chihuahua'/>
            </div>
            <div class="col">
                <img src={require ('../../assets/ChihuahuaMunicipio.png')} alt='Logo Municipio Chihuahua'/>
            </div>
            <div class="col">
                <img src={require ('../../assets/DesecLogo.png')} alt='Logo Desec'/>
            </div>
            <div class="row align-items-start">
            <div class="col">
                <img src={require ('../../assets/FicosecLogo.png')} alt='Logo Ficosec'/>
            </div>
            <div class="col">
                <img src={require ('../../assets/TecnologicoMonterrey.png')} alt='Logo Tecnologico de Monterrey'/>
            </div>
            <div class="col">
                <img src={require ('../../assets/ChihuahuaFutura.png')} alt='Logo ChihuahuaFutura'/>
            </div>
            </div>
            </div>
        </div>

    )
}
export default Sponsors;