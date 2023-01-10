import React from "react";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

const Layout = ({ children }) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <main>{children}</main>
    </>
  );
};

export default Layout;
