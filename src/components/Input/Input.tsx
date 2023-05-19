import React, { useContext } from "react";
import { CustomInput } from "./Input.css";
import { ThemeContext } from "../../Context/ThemeProvider";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = (props: Props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <CustomInput color={theme === "light" ? "white" : "lightgray"}>
      <input {...props} />
    </CustomInput>
  );
};
