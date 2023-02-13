import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GetUserId } from "../../api/signup";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
  setLocalStorageItem,
} from "../../helpers/localStorage.helpers";
import jwt_decode from "jwt-decode";
import Footer from "../Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "../Loader/Loader";

function Navbar() {
  useEffect(() => {
    getUser();
  }, []);

  const navigate = useNavigate();
  const [login, setLogin] = useState(null);
  const [name, setName] = useState("");
  const [post, setPost] = useState(null);
  const [load, setLoad] = useState(false);
  const [admin, setAdmin] = useState(false);

  function toLogin() {
    navigate("/login");
  }
  function toSignUp() {
    navigate("/signup");
  }
  const SignOut = () => {
    removeLocalStorageItem("accessToken");
    removeLocalStorageItem("role");
    navigate('/');
  };
  const UpdateUser = () => {
    navigate("/signup", { state: { userData: post } });
  };

  const assignRole = ()=>{
    navigate('/signup', { state: {Role: "Administrador"} });
  }

  const getUser = async()=>{
    if(getLocalStorageItem("accessToken")){
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
        console.log(data[0]);
        setLocalStorageItem("role",data[0].type);
        data[0].type === "Administrador" ? setAdmin(true) : setAdmin(false);
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
      <nav className="navbar navbar-expand-lg shadow p-3" id="container">
        <div className="container-fluid" id="container-navbar">
          <Link className="navbar-brand" to="/home">
            <img
              id="img-logo"
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
                <Link  to="/eventos" className="nav-link"  id="text">
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
                      {admin && (
                        <li>
                          <button
                            onClick={assignRole}
                            className="dropdown-item"
                            id="text-dropdown"
                          >
                            Asignar roles
                          </button>
                        </li>
                      )}
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

export default Navbar;
