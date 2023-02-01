import React, { useState } from "react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
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
import { validateLogin } from "../../api/login.js";

import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

export const LogEvent = () => {
  const [tag, setTag] = useState("Emprendedor");
  const [showEmp, setEmp] = useState(true);
  const [showAli, setAli] = useState(false);
  const [gender, setGender] = useState("Hombre");
  const [tipoEmp, setTipoEmp] = useState("");
  const [tipoAli, setTipoAli] = useState("No aplica");
  const navigate = useNavigate();

  const asignaGenero = (e) => {
    setGender(e.target.value);
  };
  const asignaTipoEmp = (e) => {
    setTipoEmp(e.target.value);
  };
  const asignaTipoAli = (e) => {
    setTipoAli(e.target.value);
  };

  //Data Validation
  let schema = yup.object().shape({
    mail: yup.string().email().required(),
    password: yup.string().min(5).max(50).required(),
    name: yup.string().min(3).max(30).required(),
    lastname: yup.string().min(3).max(30).required(),
    curp: yup.string().min(5).max(30).required(),
    birth_date: yup.string().required(),
    gender: yup.string().required(),
    state: yup.string().min(5).max(30).required(),
    town: yup.string().min(5).max(30).required(),
    neighborhood: yup.string().min(5).max(30).required(),
    program: yup.string().min(5).max(30).required(),
    tags: yup.string().required(),
    emprendedor: yup.string().required(),
    aliado: yup.string().required(),
  });

  const ShowInputEmpAliado = (e) => {
    setTag(e.target.value);
    if (e.target.value === "Emprendedor") {
      setEmp(true);
      setAli(false);
      setTipoEmp("");
      setTipoAli("No aplica");
    } else if (e.target.value === "Aliado") {
      setEmp(false);
      setAli(true);
      setTipoAli("");
      setTipoEmp("No aplica");
    }
  };

  const validarUsuario = async (
    mail,
    password,
    name,
    lastname,
    curp,
    birth_date,
    gender,
    state,
    town,
    neighborhood,
    program,
    tags,
    emprendedor,
    aliado
  ) => {
    try {
      const {
        data: { data: {} = {} },
      } = await validateLogin(
        mail,
        password,
        name,
        lastname,
        curp,
        birth_date,
        gender,
        state,
        town,
        neighborhood,
        program,
        tags,
        emprendedor,
        aliado
      );
      toast.success("Usuario creado exitosamente", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigate("/login");
    } catch (e) {
      toast.error("Error, verifiques sus datos", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleOnSumit = async (e) => {
    e.preventDefault();
    let target = e.target;
    let datos = {
      mail: target.mail.value,
      password: target.password.value,
      name: target.name.value,
      lastname: target.lastname.value,
      curp: target.curp.value,
      birth_date: target.birth_date.value,
      gender: gender,
      state: target.state.value,
      town: target.town.value,
      neighborhood: target.neighborhood.value,
      program: target.program.value,
      tags: tag,
      emprendedor: tipoEmp,
      aliado: tipoAli,
    };
    const validarCampos = await schema.isValid(datos);

    if (
      target.password.value.length > 0 &&
      target.password.value !== target.password2.value
    ) {
      toast.error("Las contraseñas no coinciden", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (target.password.value.length < 8) {
      toast.error("Ingrese una contraseña mayor a 8 caracteres", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (validarCampos === true) {
      validarUsuario(
        datos.mail,
        datos.password,
        datos.name,
        datos.lastname,
        datos.curp,
        datos.birth_date,
        datos.gender,
        datos.state,
        datos.town,
        datos.neighborhood,
        datos.program,
        datos.tags,
        datos.emprendedor,
        datos.aliado
      );
    } else {
      toast.error("Datos inválidos", {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const [file, setFile] = useState(null);
  const handleChange = (image) => {
    console.log(file);
    setFile(image);
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
                <SelectBox name="profile_type" onChange={asignaTipoEmp}>
                  <option hidden>Seleccione el tipo</option>
                  <option value="Tipo 1">Tipo 1</option>
                  <option value="Tipo 2">Tipo 3</option>
                  <option value="Tipo 3">Tipo 2</option>
                </SelectBox>
              </SelectContainer>
            </DivSelect>
            <InputBox>
              <InputBoxLabel>Fecha de inicio</InputBoxLabel>
              <InputBoxInput type="datetime-local" name="start_date" required />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Fecha de termino</InputBoxLabel>
              <InputBoxInput type="datetime-local" name="end_date" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>URL Imagen</InputBoxLabel>
              <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
                multiple="true"
                maxSize="30"
              />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <DivSelect>
              <TextSelect>Modalidad</TextSelect>
              <SelectContainer id="selectModalidad">
                <SelectBox name="modality" onChange={asignaTipoEmp}>
                  <option hidden>Seleccione el tipo</option>
                  <option value="Presencial">Presencial</option>
                  <option value="Virtual">Virtual</option>
                  <option value="Hibrido">Hibrido</option>
                </SelectBox>
              </SelectContainer>
            </DivSelect>
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
