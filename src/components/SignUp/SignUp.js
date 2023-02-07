import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Imports from styled component
import {
  Body,
  Container,
  ContainerHeader,
  Form,
  InputBox,
  InputBoxLabel,
  InputBoxInput,
  FormColumn,
  FormGenderBox,
  GenderBoxH3,
  GenderOption,
  Gender,
  GenderInput,
  GenderLabel,
  SelectBox,
  Button,
  SelectContainer,
  ButtonContainer,
  ContainerImage,
  LabelHeader,
} from "../SignUp/SignUp.css.js";
import { CreateUser } from "../../api/signup.js";
import { Loader } from "../Loader/Loader";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [curp, setCurp] = useState("");
  const [date, setDate] = useState("1940-01-01");
  const [estate, setState] = useState("");
  const [town, setTown] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [program, setProgram] = useState("");
  const [tag, setTag] = useState("Emprendedor");
  const [showEmp, setEmp] = useState(true);
  const [showAli, setAli] = useState(false);
  const [gender, setGender] = useState("Hombre");
  const [tipoEmp, setTipoEmp] = useState("");
  const [tipoAli, setTipoAli] = useState("No aplica");
  const [load, setLoad] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setName(state.userData.name);
      setLastName(state.userData.lastname);
      setEmail(state.userData.mail);
      setCurp(state.userData.curp);
      setDate(state.userData.birth_date.substring(0, 10));
      setState(state.userData.state);
      setTown(state.userData.town);
      setNeighborhood(state.userData.neighborhood);
      setProgram(state.userData.program);
      setTag(state.userData.tags);
      setGender(state.userData.gender);
      setTipoEmp(state.userData.emprendedor);
      setTipoAli(state.userData.aliado);

      if (state.userData.tags === "Emprendedor") {
        setEmp(true);
        setTipoAli("No aplica");
      } else if (state.userData.tags === "Aliado") {
        setAli(true);
        setEmp(false);
        setTipoEmp("No aplica");
      }
    }
  }, []);

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
    mail: yup.string().email(),
    password: yup.string().min(5).max(50),
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

  const handleOnSumit = async (e) => {
    e.preventDefault();
    let target = e.target;
    let datos = {
      mail: target.mail.value,
      password: target.password.value,
      name: name,
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
      setLoad(true);
      try {
        const {
          data: { data: {} = {} },
        } = await CreateUser(datos);
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
        setLoad(false);
        navigate("/login");
      } catch (e) {
        toast.error("Error, verifique sus datos", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoad(false);
      }
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
  const updateData = async (e) => {
    e.preventDefault();
    let datos = {
      mail: email,
      name: name,
      lastname: lastname,
      curp: curp,
      birth_date: date,
      gender: gender,
      state: estate,
      town: town,
      neighborhood: neighborhood,
      program: program,
      tags: tag,
      emprendedor: tipoEmp,
      aliado: tipoAli,
    };

    const validarCampos = await schema.isValid(datos);
    if (validarCampos) {
      console.log(datos);
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
  const form = (
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
            <LabelHeader>REGISTRO</LabelHeader>
          </ContainerHeader>
        </Link>

        <Form onSubmit={!state ? handleOnSumit : updateData}>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Nombre</InputBoxLabel>
              <InputBoxInput
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Apellido</InputBoxLabel>
              <InputBoxInput
                type="text"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Correo electrónico</InputBoxLabel>
              <InputBoxInput
                type="text"
                name="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={state}
                required
              />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Curp</InputBoxLabel>
              <InputBoxInput
                type="text"
                name="curp"
                value={curp}
                onChange={(e) => setCurp(e.target.value)}
                required
              />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Fecha de nacimiento</InputBoxLabel>
              <InputBoxInput
                type="date"
                name="birth_date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </InputBox>
            <InputBox>
              <FormGenderBox>
                <GenderBoxH3>Género</GenderBoxH3>
                <GenderOption>
                  <Gender>
                    <GenderInput
                      type="radio"
                      id="male"
                      name="gender"
                      value="Hombre"
                      checked={gender === "Hombre" ? true : false}
                      onChange={asignaGenero}
                      defaultChecked
                    />
                    <GenderLabel for="male">Hombre</GenderLabel>
                  </Gender>
                  <Gender>
                    <GenderInput
                      type="radio"
                      id="female"
                      name="gender"
                      checked={gender === "Mujer" ? true : false}
                      value="Mujer"
                      onChange={asignaGenero}
                    />
                    <GenderLabel for="female">Mujer</GenderLabel>
                  </Gender>
                  <Gender>
                    <GenderInput
                      type="radio"
                      id="other"
                      name="gender"
                      value="Otro"
                      checked={gender === "Otro" ? true : false}
                      onChange={asignaGenero}
                    />
                    <GenderLabel for="other">Prefiero no decir</GenderLabel>
                  </Gender>
                </GenderOption>
              </FormGenderBox>
            </InputBox>
          </FormColumn>
          {!state && (
            <FormColumn>
              <InputBox>
                <InputBoxLabel>Contraseña</InputBoxLabel>
                <InputBoxInput
                  type="password"
                  name="password"
                  required
                />
              </InputBox>
              <InputBox>
                <InputBoxLabel>Confirmar contraseña</InputBoxLabel>
                <InputBoxInput type="password" name="password2" required />
              </InputBox>
            </FormColumn>
          )}
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Estado</InputBoxLabel>
              <InputBoxInput
                type="text"
                name="state"
                value={estate}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Municipio</InputBoxLabel>
              <InputBoxInput
                type="text"
                name="town"
                value={town}
                onChange={(e) => setTown(e.target.value)}
                required
              />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Localidad</InputBoxLabel>
              <InputBoxInput
                type="text"
                name="neighborhood"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                required
              />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Programa</InputBoxLabel>
              <InputBoxInput
                type="text"
                name="program"
                value={program}
                onChange={(e) => setProgram(e.target.value)}
                required
              />
            </InputBox>
          </FormColumn>

          <FormGenderBox>
            <GenderBoxH3>Tag</GenderBoxH3>
            <GenderOption>
              <Gender>
                <GenderInput
                  type="radio"
                  id="emp"
                  name="tag"
                  value="Emprendedor"
                  checked={tag === "Emprendedor" ? true : false}
                  onChange={ShowInputEmpAliado}
                />
                <GenderLabel for="emp">Emprendedor</GenderLabel>
              </Gender>
              <Gender>
                <GenderInput
                  type="radio"
                  id="ali"
                  name="tag"
                  value="Aliado"
                  checked={tag === "Aliado" ? true : false}
                  onChange={ShowInputEmpAliado}
                />
                <GenderLabel for="ali">Aliado</GenderLabel>
              </Gender>
            </GenderOption>
          </FormGenderBox>
          <FormColumn>
            {showEmp && (
              <SelectContainer id="selectEmprendedor">
                <SelectBox name="emprendedor" onChange={asignaTipoEmp}>
                  <option hidden>
                    {tipoEmp ? tipoEmp : "Seleccione el tipo"}
                  </option>
                  <option value="Tipo 1">Tipo 1</option>
                  <option value="Tipo 2">Tipo 2</option>
                  <option value="Tipo 3">Tipo 3</option>
                  <option value="Tipo 4">Tipo 4</option>
                  <option value="Tipo 5">Tipo 5</option>
                </SelectBox>
              </SelectContainer>
            )}
            {showAli && (
              <SelectContainer id="selectAliado">
                <SelectBox name="aliado" onChange={asignaTipoAli}>
                  <option hidden>
                    {tipoAli ? tipoAli : "Seleccione el tipo"}
                  </option>
                  <option value="Inversionista">Inversionista</option>
                  <option value="Comunidad">Comunidad</option>
                  <option value="Empresa & Industria">
                    Empresa & Industria
                  </option>
                </SelectBox>
              </SelectContainer>
            )}
          </FormColumn>
          <ButtonContainer>
            <Button>Enviar</Button>
          </ButtonContainer>
        </Form>
      </Container>
    </Body>
  );

  return load ? <Loader /> : form;
};
