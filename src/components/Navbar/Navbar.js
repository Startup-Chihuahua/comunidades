import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Footer from '../Footer/Footer'; 
function Navbar() {
  const navigate = useNavigate(); 

  function toLogin() {
    navigate("/login");
  }
  function toSignUp() {
    navigate("/signup");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg shadow p-3" id="container">
        <div className="container-fluid" id="container-navbar">
          <Link className="navbar-brand" to="/home">
            <img
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
                <Link className="nav-link" to="/ecosistema" id="text">
                  Ecosistema
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/startups" id="text">
                  Startups
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  id="text"
                >
                  Comunidades
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/meetup"
                      id="text-dropdown"
                    >
                      Meet up
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/comunidades"
                      id="text-dropdown"
                    >
                      Conoce las comunidades
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/theteam" id="text">
                  The team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/eventos" id="text">
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactanos" id="text">
                  Contáctanos
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  id="text"
                >
                  Redes Sociales
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item"
                      // to="https://www.linkedin.com/"
                      id="text-dropdown"
                    >
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      // to="https://www.instagram.com/startupchihuahua/"
                      id="text-dropdown"
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

export default Navbar;
