import React from "react";
import { NavbarMain } from "./Navbar.css";
import { NavLink } from "react-router-dom";
import {useTranslation} from "react-i18next";

export const Navbar = () => {

    const {t} = useTranslation()

  return (
    <NavbarMain>
        <NavLink style={{textDecoration: "none", color: "white"}} to="/about">{t("home")}</NavLink>
        <NavLink style={{textDecoration: "none", color: "white"}} to="/participants">{t("participants")}</NavLink>
    </NavbarMain>
  );
};
