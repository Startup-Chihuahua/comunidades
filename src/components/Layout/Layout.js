import React from "react";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Ecosystem from "../Pages/Ecosystem/Ecosystem";
import Startups from "../Pages/Startups/Startups";
import AddStartup from "../Pages/Startups/AddStartups";
import Meetup from "../Pages/Meetup";
import Comunidades from "../Pages/Comunidades";
import TheTeam from "../Pages/TheTeam";
import Contactanos from "../Pages/Contactanos/Contactanos";
import Eventos from "../Pages/CalendarioDeCiudad/Eventos";
import Navbar from "../Navbar/Navbar";
import { RecoverPassword } from "../RecoverPassword/RecoverPassword";
import { UpdatePassword } from "../UpdatePassword/UpdatePassword";
import { SignUp } from "../SignUp/SignUp";

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
          <Route path={ROUTES.COMUNIDADES} element={<Comunidades />} />
          <Route path={ROUTES.THETEAM} element={<TheTeam />} />
          <Route path={ROUTES.EVENTOS} element={<Eventos />} />
          <Route path={ROUTES.CONTACTANOS} element={<Contactanos />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.RECUPERAR} element={<RecoverPassword />} />
        <Route path={ROUTES.ACTUALIZAR} element={<UpdatePassword />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
