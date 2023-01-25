import React, {useState} from 'react'
import * as yup from "yup";
import { Link,useNavigate } from "react-router-dom";
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
  LabelHeader
} from "../SignUp/SignUp.css.js";
import { CreateUser } from '../../api/signup.js';

export const SignUp = () => {

  const [tag, setTag] = useState("Emprendedor");
  const [showEmp,setEmp] = useState(true);
  const [showAli,setAli] = useState(false);
  const [gender,setGender] = useState("Hombre");
  const [tipoEmp,setTipoEmp] = useState("");
  const [tipoAli,setTipoAli] = useState("No aplica");
  const navigate = useNavigate();

  const asignaGenero = (e)=>{
    setGender(e.target.value);
  }
  const asignaTipoEmp = (e)=>{
    setTipoEmp(e.target.value);
  }
  const asignaTipoAli = (e)=>{
    setTipoAli(e.target.value);
  }

  
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
    aliado: yup.string().required()
  });


  const ShowInputEmpAliado = e => {
    setTag(e.target.value);
    if(e.target.value === "Emprendedor"){
      setEmp(true);
      setAli(false);
      setTipoEmp("");
      setTipoAli("No aplica");
    }else if(e.target.value === "Aliado"){
      setEmp(false);
      setAli(true);
      setTipoAli("");
      setTipoEmp("No aplica");
    }
  };

  const handleOnSumit = async(e) => {
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
        aliado: tipoAli
      }
      const validarCampos = await schema.isValid(datos);

      if(target.password.value.length > 0 && target.password.value !== target.password2.value){
        toast.error("Las contraseñas no coinciden", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      }
      else if(target.password.value.length < 8){
        toast.error("Ingrese una contraseña mayor a 8 caracteres", {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      }
      else if (validarCampos === true) {
        
        try {
          const {
            data: { data: {} = {} },
          } = await CreateUser (datos);
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
          theme: "light"
        });
    }
}

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
            <LabelHeader >REGISTRO</LabelHeader>
          </ContainerHeader>
        </Link>

        <Form onSubmit={handleOnSumit}>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Nombre</InputBoxLabel>
              <InputBoxInput type="text" name="name" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Apellido</InputBoxLabel>
              <InputBoxInput type="text" name="lastname" required />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Correo electrónico</InputBoxLabel>
              <InputBoxInput type="text" name="mail" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Curp</InputBoxLabel>
              <InputBoxInput type="text" name="curp" required />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Fecha de nacimiento</InputBoxLabel>
              <InputBoxInput type="date" name="birth_date" required />
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
                      onChange={asignaGenero}
                    />
                    <GenderLabel for="other">Prefiero no decir</GenderLabel>
                  </Gender>
                </GenderOption>
              </FormGenderBox>
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Contraseña</InputBoxLabel>
              <InputBoxInput type="password" name="password" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Confirmar contraseña</InputBoxLabel>
              <InputBoxInput type="password" name="password2" required />
            </InputBox>
          </FormColumn>

          <FormColumn>
            <InputBox>
              <InputBoxLabel>Estado</InputBoxLabel>
              <InputBoxInput type="text" name="state" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Municipio</InputBoxLabel>
              <InputBoxInput type="text" name="town" required />
            </InputBox>
          </FormColumn>
          <FormColumn>
            <InputBox>
              <InputBoxLabel>Localidad</InputBoxLabel>
              <InputBoxInput type="text" name="neighborhood" required />
            </InputBox>
            <InputBox>
              <InputBoxLabel>Programa</InputBoxLabel>
              <InputBoxInput type="text" name="program" required />
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
                  <option hidden>Seleccione el tipo</option>
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
                  <option hidden>Seleccione el tipo</option>
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
}
