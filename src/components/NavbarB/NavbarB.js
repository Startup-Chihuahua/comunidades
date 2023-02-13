import React, { useState, useEffect } from "react";
import "./NavbarB.css";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GetUserId } from "../../api/signup";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
} from "../../helpers/localStorage.helpers";
import jwt_decode from "jwt-decode";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "../Loader/Loader";

function NavbarB() {
  useEffect(() => {
    getUser();
  }, []);

  const navigate = useNavigate();
  const [login, setLogin] = useState(null);
  const [name, setName] = useState("");
  const [post, setPost] = useState(null);
  const [load, setLoad] = useState(false);

  function toLogin() {
    navigate("/login");
  }
  function toSignUp() {
    navigate("/signup");
  }
  const SignOut = () => {
    removeLocalStorageItem("accessToken");
    navigate(0);
  };
  const UpdateUser = () => {
    navigate("/signup", { state: { userData: post } });
  };

  const getUser = async () => {
    if (getLocalStorageItem("accessToken")) {
      setLogin(true);
      var decoded = jwt_decode(getLocalStorageItem("accessToken"));
      setLoad(true);
      try {
        const {
          data: { data },
        } = await GetUserId(decoded.id, getLocalStorageItem("accessToken"));
        setName(data[0].name);
        setPost(data[0]);
        setLoad(false);
      } catch (e) {
        setLoad(false);
        toast.error("Error de conexión", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const navBar = (
    <>
      <ToastContainer
        closeButton={true}
        position="bottom-right"
        autoClose="3000"
        hideProgressBar="true"
      />
      <nav className="navbar navbar-expand-lg shadow p-3 containerblack">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img
              className="logo-startup"
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
                <Link className="nav-link text" to="/ecosistema">
                  Ecosistema
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/startups">
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
                    <Link className="dropdown-item text-dropdown " to="/meetup">
                      Meet up
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dropdown "
                      to="/comunidades"
                    >
                      Conoce las comunidades
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/theteam">
                  The team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/eventos">
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text" to="/contactanos">
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
                      className="dropdown-item text-dropdown "
                      // to="https://www.linkedin.com/"
                    >
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dropdown "
                      // to="https://www.instagram.com/startupchihuahua/"
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </li>
              {!login && (
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    className="btn btn-outline-light"
                    type="button"
                    onClick={toLogin}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-light"
                    type="button"
                    onClick={toSignUp}
                  >
                    Sign-up
                  </button>
                </div>
              )}

              {login && (
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <img
                    id="img-user"
                    src={require("../../assets/user-logo.png")}
                    alt="Logotipo Empresa"
                  />
                  <div className="nav-item dropdown dropstart">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      id="text"
                    >
                      {name}
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <button
                          onClick={UpdateUser}
                          className="dropdown-item"
                          id="text-dropdown"
                        >
                          Tu perfil
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          id="text-dropdown"
                          onClick={SignOut}
                        >
                          Cerrar sesión
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );

  return load ? <Loader /> : navBar;
}

export default NavbarB;
