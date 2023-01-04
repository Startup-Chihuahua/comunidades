import React from 'react';
import './Navbar.css'; 

function Navbar() {
    return( 
        <nav className='navbar navbar-expand-lg shadow p-3' id='container'>
            <div className='container-fluid' id='container-navbar'>
                <a className='navbar-brand' href='/'>
                    <img src={require('../../assets/image-logo.png')} alt='Logotipo Empresa'/>
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#nav'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbar'>
                    <ul className='navbar-nav ms-auto gap-4'>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/' id='text'>Ecosistema</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/' id='text'>Startups</a>
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle active' href='/' role='button' data-bs-toggle='dropdown' id='text'>Comunidades</a>
                            <ul className='dropdown-menu'>
                                <li>
                                    <a className='dropdown-item' href='/' id='text-dropdown'>Meet up</a>
                                </li>
                                <li>
                                    <a className='dropdown-item' href='/' id='text-dropdown'>Conoce las comunidades</a>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/' id='text'>The team</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/' id='text'>Eventos</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link active' aria-current='page' href='/' id='text'>Contáctanos</a> 
                        </li> 
                        <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                            <button className='btn btn-outline-light' type='button'>
                                Login
                            </button>
                            <button className='btn btn-outline-light' type='button'>
                                Sign-up
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 