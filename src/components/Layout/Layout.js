import React from "react";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Ecosistema from "../Pages/Ecosistema";
import Startups from "../Pages/Startups/Startups";
import AddStartup from "../Pages/Startups/AddStartups";
import Meetup from "../Pages/Meetup";
import Comunidades from "../Pages/Comunidades";
import TheTeam from "../Pages/TheTeam";
import Eventos from "../Pages/CalendarioDeCiudad/Eventos"; 
import Contactanos from "../Pages/Contactanos";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<Navbar />}>
          <Route path={ROUTES.HOME} element={<Home />}></Route>
          <Route path={ROUTES.ECOSISTEMA} element={<Ecosistema />} />
          <Route path={ROUTES.STARTUPS} element={<Startups />} />
          <Route path={ROUTES.ADDSTARTUP} element={<AddStartup />} />
          <Route path={ROUTES.MEETUP} element={<Meetup />} />
          <Route path={ROUTES.COMUNIDADES} element={<Comunidades />} />
          <Route path={ROUTES.THETEAM} element={<TheTeam />} />
          <Route path={ROUTES.EVENTOS} element={<Eventos />} />
          <Route path={ROUTES.CONTACTANOS} element={<Contactanos />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
