import React from "react";

import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  Container,
  Wrapper,
  Title,
  Form,
  Field,
  Input,
  FormFieldLabel,
  Button,
} from "./UpdatePassword.css";

import { newPassword } from "../../api/new-password";
import { invalidData } from "../../helpers/alerts.helpers";

export const UpdatePassword = () => {
  const navigate = useNavigate();
  let schema = yup.object().shape({
    password: yup.string().min(5).max(50).required(),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const queryParameters = new URLSearchParams(window.location.search);
  const uuid = queryParameters.get("token");
  if (!uuid) {
    navigate("/home");
  }

  const capturarDatos = async (e) => {
    e.preventDefault();
    const datos = {
      password: e.target.password.value,
      repassword: e.target.repassword.value,
    };
    const validarCampos = await schema.isValid(datos);
    if (validarCampos === true) {
      try {
        await newPassword(uuid, datos.password);
        navigate("/home");
      } catch (error) {
        invalidData();
      }
    } else {
      invalidData();
    }
  };
  return (
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
            <FormFieldLabel>Contraseña</FormFieldLabel>
            <Input type="password" name="password" required />
          </Field>
          <Field>
            <FormFieldLabel>Confirmar contraseña</FormFieldLabel>
            <Input type="password" name="repassword" required />
          </Field>
          <Field>
            <Button type="submit" value="Actualizar contraseña" />
          </Field>
        </Form>
      </Wrapper>
    </Container>
  );
};
