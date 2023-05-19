import React, { ChangeEvent, FocusEvent } from "react";
import {
  LoginButtonContainer,
  LoginContainer,
  LoginMain,
  LoginTitle,
} from "./Login.css";
import { CustomButton } from "../../../components/ui/Button";
import {useTranslation} from "react-i18next";

interface IProps {
  emailHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  blurHandler: (event: FocusEvent<HTMLInputElement>) => void;
  username: string;
  emailDirty: boolean;
  emailError: string;
  passwordHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  passwordError: string;
  passwordDirty: boolean;
  handleLogin: () => void;
}

const LoginViewComponent = ({
  emailHandler,
  blurHandler,
  username,
  emailDirty,
  emailError,
  passwordHandler,
  password,
  passwordError,
  passwordDirty,
  handleLogin,
}: IProps) => {

  const {t} = useTranslation()

  return (
    <LoginMain>
      <LoginContainer>
        <div>
          <LoginTitle>{t("login")}</LoginTitle>
          <input
            onChange={emailHandler}
            value={username}
            onBlur={blurHandler}
            name="email"
            type="text"
          />
          {emailDirty && emailError && <div>{emailError}</div>}
        </div>
        <div>
          <LoginTitle>{t("password")}</LoginTitle>
          <div>
            <input
              onChange={passwordHandler}
              value={password}
              onBlur={blurHandler}
              name="password"
              type="password"
            />
            {passwordError && passwordDirty && <div>{passwordError}</div>}
          </div>
        </div>
      </LoginContainer>
      <LoginButtonContainer>
        <CustomButton onClick={handleLogin} color="#0070f3" text={t("loginButton")} />
      </LoginButtonContainer>
    </LoginMain>
  );
};

export const LoginView = React.memo(LoginViewComponent);
