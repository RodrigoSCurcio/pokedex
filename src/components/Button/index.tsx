import { ButtonStyled } from "./style";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};
