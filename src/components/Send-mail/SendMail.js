import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendMail } from "../../api/send-mail";

export const SendMail = () => {
  const navigate = useNavigate();

  const capturarDatos = async (e) => {
    e.preventDefault();
    const mail = e.target.mail.value;
    try {
      const {
        data: { status },
      } = await sendMail(mail);
      if (status === "OK") {
        alert("Correo enviado");
        navigate("/home");
      }
    } catch (error) {
      alert("Correo inexistente");
    }
  };

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
            <input type="text" name="mail" required />
            <label>Correo electrónico</label>
          </div>
          <div className="field">
            <input type="submit" value="Enviar correo" />
          </div>
        </form>
      </div>
    </div>
  );
};
