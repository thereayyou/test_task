import React, { useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../Context/ThemeProvider";
import { Switch } from "./ToggleTheme.css";
import {useTranslation} from "react-i18next";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const {t} = useTranslation()
  return (
    <Switch color={theme === "light" ? "black" : "white"}>
      <div>{theme === "light" ? t("lightTheme") : t("darkTheme")}</div>
      <ReactSwitch checked={theme === "dark"} onChange={toggleTheme} />
    </Switch>
  );
};
