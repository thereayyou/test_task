import React from "react";
import styled from "styled-components";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledCustomButton = styled.button<Props>`
  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: none;
  padding: 0 56px;
  height: 45px;
  line-height: 45px;
  border-radius: 7px;
  background-color: ${(props) => props.color};
  color: white;
  font-weight: 400;
  font-size: 20px;
  box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  .button {
    button:focus {
      outline: none !important;
    }
  }
  
  @media (max-width: 360px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    font-size: 10px;
    padding: 0 25px;
  }
  
  @media (max-width: 480px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 25px;
    font-size: 10px;
  }
`;

export const CustomButton: React.FC<Props> = ({
  text,
  color,
  onClick,
  ...rest
}) => {
  return (
    <StyledCustomButton text={text} onClick={onClick} color={color} {...rest}>
      {text}
    </StyledCustomButton>
  );
};
