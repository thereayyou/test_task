import React, {ChangeEvent, FocusEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {LoginView} from "../components/LoginView";
import {isValidEmail, isValidPassword} from "../utils";

export const LoginController = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [emailError, setEmailError] = useState("Логин не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );

  const blurHandler = (e: FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (isValidEmail(e.target.value)) {
      setEmailError("Некорректный логин");
      if (!e.target.value) {
        setEmailError("Логин не может быть пустым");
      }
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    if (isValidPassword(e.target.value)) {
      setPasswordError(
        "Пароль должен содержать от 8 до 20 символов и не содержать кириллицу"
      );
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async () => {
    const access_token = "fake_access_token";
    const refresh_token = "fake_refresh_token";
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    navigate("/about");
  };

  return (
    <LoginView
      emailHandler={emailHandler}
      blurHandler={blurHandler}
      username={username}
      emailDirty={emailDirty}
      emailError={emailError}
      passwordHandler={passwordHandler}
      password={password}
      passwordError={passwordError}
      passwordDirty={passwordDirty}
      handleLogin={handleLogin}
    />
  );
};
