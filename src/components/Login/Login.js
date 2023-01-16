import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { validateLogin } from "../../api/login";
import { setLocalStorageItem } from "../../helpers/localStorage.helpers";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();
  //Data Validation
  let schema = yup.object().shape({
    mail: yup.string().email().required(),
    password: yup.string().min(5).max(50).required(),
  });

  const capturarDatos = async (e) => {
    e.preventDefault();
    let target = e.target;
    let datos = {
      mail: target.mail.value,
      password: target.password.value,
    };
    const validarCampos = await schema.isValid(datos);
    if (validarCampos === true) {
      validarUsuario(datos.mail, datos.password);
    } else {
      toast.error("Datos inválidos", {
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
  };

  const validarUsuario = async (mail, password) => {
    try {
      const {
        data: { data: { accessToken } = {} },
      } = await validateLogin(mail, password);
      setLocalStorageItem("accessToken", accessToken);
      // toast.success("Usuario validado", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });
      navigate("/home");
    } catch (e) {
      toast.error("Contraseña o correo incorrectos", {
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
  };

  return (
    <div className="principal">
      <div className="wrapper">
        <ToastContainer
          closeButton={true}
          position="bottom-right"
          autoClose="3000"
          hideProgressBar="true"
        />
        <div className="title">
          <Link className="navbar-brand" to="/">
            <img
              src={require("../../assets/image-logo.png")}
              width="100"
              height="100"
              alt="Logotipo Empresa"
            />
          </Link>
        </div>
        <form onSubmit={capturarDatos}>
          <div className="field">
            <input type="text" name="mail" required />
            <label>Correo electrónico</label>
          </div>
          <div className="field">
            <input type="password" name="password" required />
            <label>Contraseña</label>
          </div>
          <div className="field">
            <input type="submit" value="Iniciar sesión" />
          </div>
          <div className="signup-link">
            ¿No tienes una cuenta? <a href="/">Regístrate</a>
          </div>
        </form>
      </div>
    </div>
  );
};
