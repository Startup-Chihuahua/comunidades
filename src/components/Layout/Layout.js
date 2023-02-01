import React from "react";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Ecosystem from "../Pages/Ecosystem/Ecosystem";
import Startups from "../Pages/Startups/Startups";
import AddStartup from "../Pages/Startups/AddStartups";
import Meetup from "../../components/Pages/MeetUp/MeetUp";
import TheTeam from "../../components/Pages/Theteam/Theteam";
import Eventos from "../Pages/CalendarioDeCiudad/Eventos";
import Contactanos from "../../components/Pages/Contactanos/Contactanos";
import Navbar from "../Navbar/Navbar";
import { LogEvent } from "../LogEvent/LogEvent";
import { RecoverPassword } from "../RecoverPassword/RecoverPassword";
import { UpdatePassword } from "../UpdatePassword/UpdatePassword";
import { SignUp } from "../SignUp/SignUp";
import ConoceLasComunidades from "../Pages/ConoceLasComunidades/ConoceLasComunidades";
import { Test } from '../Test/Test'
import BussinesNetworking from "../Pages/ConoceLasComunidades/cd/bussines-networking/BussinesNetworking";
import CodeDevelopers from "../Pages/ConoceLasComunidades/cd/code-developers/CodeDevelopers";
import CultureEducation from "../Pages/ConoceLasComunidades/cd/culture-education/CultureEducation";
import IndustryProfesionist from "../Pages/ConoceLasComunidades/cd/industry-profesionist/IndustryProfesionist";
import Steam from "../Pages/ConoceLasComunidades/cd/steam/Steam";

const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<Navbar />}>
          <Route path={ROUTES.HOME} element={<Home />}></Route>
          <Route path={ROUTES.ECOSISTEMA} element={<Ecosystem />} />
          <Route path={ROUTES.STARTUPS} element={<Startups />} />
          <Route path={ROUTES.ADDSTARTUP} element={<AddStartup />} />
          <Route path={ROUTES.MEETUP} element={<Meetup />} />
          <Route path={ROUTES.COMUNIDADES} element={<ConoceLasComunidades />} />
          <Route path={ROUTES.THETEAM} element={<TheTeam />} />
          <Route path={ROUTES.EVENTOS} element={<Eventos />} />
          <Route path={ROUTES.CONTACTANOS} element={<Contactanos />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.LOGEVENT} element={<LogEvent />} />
        <Route path={ROUTES.RECUPERAR} element={<RecoverPassword />} />
        <Route path={ROUTES.ACTUALIZAR} element={<UpdatePassword />} />
        <Route path='/test' element={<Test/> } />
        <Route path={ROUTES.SIGNUP} element={<SignUp/>}/>
        <Route path={ROUTES.BUSSINES_NETWORKING} element={<BussinesNetworking/>}/>
        <Route path={ROUTES.CODE_DEVELOPERS} element={<CodeDevelopers/>}/>
        <Route path={ROUTES.CULTURE_EDUCATION} element={<CultureEducation/>}/>
        <Route path={ROUTES.INDUSTRY_PROFESIONIST} element={<IndustryProfesionist/>}/>
        <Route path={ROUTES.STEAM} element={<Steam/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
