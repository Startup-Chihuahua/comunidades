import React from "react";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import Ecosistema from '../../components/Pages/Ecosistema';
import Startups from '../../components/Pages/Startups';
import Meetup from '../../components/Pages/Meetup';
import Comunidades from '../../components/Pages/Comunidades';
import TheTeam from '../../components/Pages/TheTeam';
import Eventos from '../../components/Pages/Eventos';
import Contactanos from '../../components/Pages/Contactanos'; 
import Navbar from '../Layout/Navbar';  

const Layout = ({ children }) => {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
            <Route path={ROUTES.ECOSISTEMA} element={<Ecosistema />} />
            <Route path='Startups' element={<Startups />} />
            <Route path='Meetup' element={<Meetup />} />
            <Route path='Comunidades' element={<Comunidades />} />
            <Route path='TheTeam' element={<TheTeam />} />
            <Route path='Eventos' element={<Eventos />} />
            <Route path='Contactanos' element={<Contactanos />} />
            <Route path={ROUTES.LOGIN} element={<Login />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default Layout;
