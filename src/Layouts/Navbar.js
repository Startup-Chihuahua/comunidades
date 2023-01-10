import React from 'react';
import './Navbar.css'; 
import { Link, Outlet } from 'react-router-dom';  

function Navbar() {
    return( 
        <>
        <nav className='navbar navbar-expand-lg shadow p-3' id='container'>
            <div className='container-fluid' id='container-navbar'>
                <Link className='navbar-brand' to='/'> 
                    <img src={require('../assets/image-logo.png')} alt='Logotipo Empresa'/> 
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>  
                    <ul className='navbar-nav ms-auto gap-4'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/Ecosistema' id='text'>Ecosistema</Link>  
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/Startups' id='text'>Startups</Link> 
                        </li>
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' href='/' role='button' data-bs-toggle='dropdown' id='text'>Comunidades</a>
                            <ul className='dropdown-menu'>
                                <li>
                                    <Link className='dropdown-item' to='/Meetup' id='text-dropdown'>Meet up</Link>
                                </li>
                                <li>
                                    <Link className='dropdown-item' to='/Comunidades' id='text-dropdown'>Conoce las comunidades</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/TheTeam' id='text'>The team</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/Eventos' id='text'>Eventos</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/Contactanos' id='text'>Contáctanos</Link>   
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
        <Outlet/>
        </> 
    );
}

export default Navbar;      