import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { newPassword } from "../../api/new-password";

export const ChangePassword = () => {
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(window.location.search)
  const uuid = queryParameters.get("token")

  const capturarDatos = async (e) => {
    e.preventDefault();
    const pass = e.target.password.value;
    const data = await newPassword(uuid, pass);
    console.log(data);
  }
  return (
    <div className="">
      <div className="wrapper">
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
            <input type="password" name="password" required />
            <label>Contraseña</label>
          </div>
          <div className="field">
            <input type="submit" value="Actualizar contraseña" />
          </div>
        </form>
      </div>
    </div>
  );
};
