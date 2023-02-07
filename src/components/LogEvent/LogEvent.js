import React, { useState } from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Body,
  Container,
  ContainerHeader,
  Form,
  InputBox,
  InputBoxLabel,
  InputBoxInput,
  FormColumn,
  SelectBox,
  Button,
  SelectContainer,
  ButtonContainer,
  ContainerImage,
  LabelHeader,
  TextSelect,
  DivSelect,
} from "./LogEvent.css";
import { invalidData, validData } from "../../helpers/alerts.helpers";
import { createEvent } from "../../api/log_event";

export const LogEvent = () => {
  const navigate = useNavigate();

  const [modality, setModality] = useState("");
  const [profile_type, setProfileType] = useState("");

  const asingModality = (e) => {
    setModality(e.target.value);
  };

  const asingProfile = (e) => {
    setProfileType(e.target.value);
  };

  const eventSchema = yup.object().shape({
    event_name: yup.string().max(100).required(),
    description: yup.string().max(200).required(),
    profile_type: yup.string().max(50).required(),
    url_from: yup.string().max(1000).required(),
    start_date: yup
      .string()
      .matches(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/)
      .required(),
    end_date: yup
      .string()
      .matches(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/)
      .required(),
    url_flyer: yup.string().max(1000).required(),
    modality: yup.string().max(20).required(),
    cost: yup.number().required(),
    location: yup.string().max(200).required(),
    name: yup.string().max(50).required(),
    lastname: yup.string().max(100).required(),
    phone: yup.string().max(50).required(),
    mail: yup.string().email().required(),
    community_name: yup.string().max(100).required(),
  });

  const handleOnSumit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const newStartDate = target.start_date.value.replace(/(T)/, " ");
    const newEndDate = target.end_date.value.replace(/(T)/, " ");
    const datos = {
      event_name: target.event_name.value,
      description: target.description.value,
      profile_type,
      url_form: target.url_form.value,
      start_date: newStartDate,
      end_date: newEndDate,
      url_flyer: target.url_flyer.value,
      modality,
      cost: target.cost.value,
      location: target.location.value,
      name: target.name.value,
      lastname: target.lastname.value,
      phone: target.phone.value,
      mail: target.mail.value,
      community_name: target.community_name.value,
    };

    const validarCampos = await eventSchema.isValid(datos);
    if (validarCampos === true) {
      try {
        await createEvent(datos);
        validData("Evento registrado exitosamente");
        navigate("/home");
      } catch (error) {
        invalidData("Error en el servidor");
      }
    } else {
      invalidData("Datos invalidos");
    }
  };

  return (
    <Body>
      <Container>
        <ToastContainer
          closeButton={true}
          position="bottom-right"
          autoClose="3000"
          hideProgressBar="true"
        />
        <Link to="/">
          <ContainerHeader>
            <ContainerImage
              src={require("../../assets/image-logo.png")}
              width="70"
              height="70"
              alt="Logotipo Empresa"
            />
            <LabelHeader>REGISTRO EVENTO</LabelHeader>
          </ContainerHeader>
        </Link>
        <Form onSubmit={handleOnSumit}>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Nombre de la experiencia</InputBoxLabel>
              <InputBoxInput type="text" name="event_name" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Descripcion de la experiencia</InputBoxLabel>
              <InputBoxInput type="text" name="description" required />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <DivSelect>
              <TextSelect>Tipo de Perfil</TextSelect>
              <SelectContainer id="selectModalidad">
                <SelectBox name="profile_type" onChange={asingProfile}>
                  <option hidden>Seleccione el tipo</option>
                  <option value="Base Científica y/o Tecnológica">Base Científica y/o Tecnológica</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Tradicional">Tradicional</option>
                  <option value="Social">Social</option>
                </SelectBox>
              </SelectContainer>
            </DivSelect>
            <InputBox>
              <InputBoxLabel>URL Registro</InputBoxLabel>
              <InputBoxInput type="url" name="url_form" required />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Fecha de inicio</InputBoxLabel>
              <InputBoxInput type="datetime-local" name="start_date" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Fecha de termino</InputBoxLabel>
              <InputBoxInput type="datetime-local" name="end_date" required />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>URL Imagen</InputBoxLabel>
              <InputBoxInput type="url" name="url_flyer" required />
            </InputBox>
            <DivSelect>
              <TextSelect>Modalidad</TextSelect>
              <SelectContainer id="selectModalidad">
                <SelectBox name="modality" onChange={asingModality}>
                  <option hidden>Seleccione el tipo</option>
                  <option value="Presencial">Presencial</option>
                  <option value="Virtual">Virtual</option>
                  <option value="Hibrido">Hibrido</option>
                </SelectBox>
              </SelectContainer>
            </DivSelect>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Costo</InputBoxLabel>
              <InputBoxInput type="number" step="0.01" name="cost" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Ubicacion</InputBoxLabel>
              <InputBoxInput type="text" name="location" required />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Nombre encargado</InputBoxLabel>
              <InputBoxInput type="text" name="name" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Apellido</InputBoxLabel>
              <InputBoxInput type="text" name="lastname" required />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Telefono</InputBoxLabel>
              <InputBoxInput type="text" name="phone" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Correo</InputBoxLabel>
              <InputBoxInput type="mail" name="mail" required />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Nombre de la comunidad</InputBoxLabel>
              <InputBoxInput type="text" name="community_name" required />
            </InputBox>
          </FormColumn>
          <ButtonContainer>
            <Button>Enviar</Button>
          </ButtonContainer>
        </Form>
      </Container>
    </Body>
  );
};
