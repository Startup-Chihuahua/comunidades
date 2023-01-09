import React from "react";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../api/login";
import { setLocalStorageItem } from "../../helpers/localStorage.helpers";

export const Login = () => {
  const navigate = useNavigate();

  const capturarDatos = (e) => {
    e.preventDefault();
    let target = e.target;
    let mail = target.mail.value;
    let password = target.password.value;
    validarUsuario(mail, password);
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
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <div className="pass-link">
            <a href="/">¿Olvidaste tu contraseña?</a>
          </div>
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
