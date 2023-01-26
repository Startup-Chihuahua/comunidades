import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendMail } from "../../api/send-mail";
import { invalidData } from "../../helpers/alerts.helpers";
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
} from "./RecoverPassword.css";

export const RecoverPassword = () => {
  const navigate = useNavigate();

  const capturarDatos = async (e) => {
    e.preventDefault();
    const mail = e.target.mail.value;
    try {
      const {
        data: { status },
      } = await sendMail(mail);
      if (status === "OK") {
        navigate("/home");
      }
    } catch (error) {
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
          <p>
            Ingresa tu correo electronico y te enviaremos un link para que
            ingreses una nueva contraseña
          </p>
          <Field>
            <FormFieldLabel>Correo Electronico</FormFieldLabel>
            <Input type="mail" name="mail" required />
          </Field>
          <Field>
            <Button type="submit" value="Recuperar contraseña" />
          </Field>
        </Form>
      </Wrapper>
    </Container>
  );
};
