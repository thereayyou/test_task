import React from "react";
import { ToggleTheme } from "../ToggleTheme";
import {HeaderContainer, HeaderMain, HeaderRightPart} from "./Header.css";
import { Navbar } from "../Navbar";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useTranslation } from "react-i18next";
import {CustomButton} from "../ui/Button";

export const Header = () => {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.reload();
  };

  const userEmail = useTypedSelector((state) => state.user?.userInfo?.email);

  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: "ru" | "eng") => {
    i18n.changeLanguage(lang);
  };

  return (
    <HeaderMain>
      <HeaderContainer>
        {userEmail?.length > 0 && <Navbar />}
        <HeaderRightPart>
          <ToggleTheme />
          <div>
            <select
              onChange={(e) =>
                handleLanguageChange(e.target.value as "ru" | "eng")
              }
            >
              <option value="eng">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>
        </HeaderRightPart>
        <HeaderRightPart>
          <div style={{ color: "white" }}>{userEmail}</div>
          {userEmail?.length > 0 && (
            <CustomButton color="#1f8c38"  text={t("logoutButton")} onClick={handleLogout}/>
          )}
        </HeaderRightPart>
      </HeaderContainer>
    </HeaderMain>
  );
};
