import React from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../api/login";
import { setLocalStorageItem } from "../../helpers/localStorage.helpers";
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const navigate = useNavigate();
  //Data Validation
  let schema = yup.object().shape({
    mail: yup.string().email().required(),
    password: yup.string().min(5).max(20).required()
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
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const validarUsuario = async (mail, password) => {
    try {
      const { data: { accessToken } = {} } = await validateLogin(mail, password);
      setLocalStorageItem("accessToken", accessToken);
      navigate("/home");
    } catch(e) {
      alert("datos erroneos");
    };
  };

  return (
    <div className="wrapper">
      <ToastContainer
        closeButton={true}
        position="bottom-right"
        autoClose="3000"
        hideProgressBar="true"
      />
      <div className="title">
        <img
          src={require("../../images/logo.png")}
          alt="Logotipo"
          width="100"
          height="100"
        />
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
  );
};
