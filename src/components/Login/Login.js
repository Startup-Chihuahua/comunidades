import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateLogin } from "../../api/login";
import { setLocalStorageItem } from "../../helpers/localStorage.helpers";
import * as yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Field,
  Input,
  FormFieldLabel,
  Button,
  Link1,
  Ref,
} from "../Login/Login.css.js";
import { Loader } from "../Loader/Loader";
import { invalidData } from "../../helpers/alerts.helpers";

export const Login = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
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
      invalidData("Datos Invalidos");
    }
  };

  const validarUsuario = async (mail, password) => {
    setLoad(true);
    try {
      const {
        data: { data: { accessToken} = {} },
      } = await validateLogin(mail, password);
      setLocalStorageItem("accessToken", accessToken);
      setLoad(false);
      navigate("/home");
    } catch (e) {
      invalidData("Contraseña o correo incorrrectos");
      setLoad(false);
    }
  };

  const form = (
    <Container>
      <Wrapper>
        <ToastContainer
          closeButton={true}
          position="bottom-right"
          autoClose="3000"
          hideProgressBar="true"
        />
        <Title>
          <Link className="navbar-brand" to="/">
            <img
              src={require("../../assets/image-logo.png")}
              width="100"
              height="100"
              alt="Logotipo Empresa"
            />
          </Link>
        </Title>
        <Form onSubmit={capturarDatos}>
          <Field>
            <FormFieldLabel for="mail">Correo electrónico</FormFieldLabel>
            <Input type="text" name="mail" required />
          </Field>
          <Field>
            <FormFieldLabel>Contraseña</FormFieldLabel>
            <Input type="password" name="password" required />
          </Field>
          <Link1>
            <Ref
              onClick={() => {
                navigate("/recuperar-contraseña");
              }}
            >
              ¿Olvidaste tu contraseña?
            </Ref>
          </Link1>
          <Field>
            <Button type="submit" value="Iniciar sesión" />
          </Field>
          <Link1>
            ¿No tienes una cuenta?{" "}
            <Ref
              onClick={() => {
                navigate("/signup");
              }}
            >
              Regístrate
            </Ref>
          </Link1>
        </Form>
      </Wrapper>
    </Container>
  );

  return load ? <Loader /> : form;
};
