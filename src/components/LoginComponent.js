import React from 'react'

export const LoginComponent = () => {
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
      <form action="/">
        <div className="field">
          <input type="text" required />
          <label>Correo electrónico</label>
        </div>
        <div className="field">
          <input type="password" required />
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
