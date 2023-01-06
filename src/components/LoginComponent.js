import React from 'react'
import { useNavigate } from "react-router-dom";
const dominio = 'http://localhost:3000';

export const LoginComponent = () => {

  const navigate = useNavigate();

  const capturarDatos = (e) => {
    e.preventDefault();
    let target = e.target;
    let mail = target.mail.value;
    let password = target.password.value;
    validarUsuario(mail, password);
  }

  const validarUsuario = async (mail, password) => {
    const url = `${dominio}/login`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: `{
            "mail": "${mail}",
            "password": "${password}"
        }`,
    });
    const data = await response.json();
    console.log(data);
    if(data.status === 'FAILED'){
      alert("datos erroneos");
    }else{
      localStorage.setItem("accessToken", data.data.accessToken);
      navigate('/home');
    }
};

  return (
    <div className="wrapper">
      <div className="title">
        <img
          src={require("../images/logo.png")}
          alt="Logotipo"
          width="100"
          height="100"
        />
      </div>
      <form onSubmit={capturarDatos}>
        <div className="field">
          <input type="text" name='mail' required />
          <label>Correo electrónico</label>
        </div>
        <div className="field">
          <input type="password" name='password' required />
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
}
