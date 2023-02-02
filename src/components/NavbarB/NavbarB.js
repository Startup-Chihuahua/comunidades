import React from "react";
import "./NavbarB.css";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Footer from '../Footer/Footer'; 
function NavbarB() {
  const navigate = useNavigate(); 

  function toLogin() {
    navigate("/login");
  }
  function toSignUp() {
    navigate("/signup");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow p-3 container" >
        <div className="container-fluid" >
          <Link className="navbar-brand" to="/home">
            <img className="logo-startup"
              src={require("../../assets/image-logo.png")}
              alt="Logotipo Empresa"
            />
          </Link> 
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> 

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item">
                <Link className="nav-link text" to="/ecosistema" >
                  Ecosistema
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/startups" >
                  Startups
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  
                >
                  Comunidades
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-dropdown"
                      to="/meetup"
                    
                    >
                      Meet up
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dropdown"
                      to="/comunidades"
                      
                    >
                      Conoce las comunidades
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/theteam" >
                  The team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/eventos">
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/contactanos" >
                  Contáctanos
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                 
                >
                  Redes Sociales
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-dropdown"
                      // to="https://www.linkedin.com/"
                     
                    >
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dropdown"
                      // to="https://www.instagram.com/startupchihuahua/"
                  
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </li>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  className="btn btn-outline-light"
                  type="button"
                  onClick={toLogin}
                >
                  Login
                </button>
                <button className="btn btn-outline-light" type="button" onClick={toSignUp}>
                  Sign-up
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer/> 
    </>
  );
}

export default NavbarB;
