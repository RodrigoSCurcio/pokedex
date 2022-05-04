import logo from "../../static/img/Gorilla.png";
import { LogoContainerStyled } from "./style";

export const Logo = () => {
  return (
    <LogoContainerStyled className="col-12">
        <img className="imgLogo" src={logo} alt="logo" />
    </LogoContainerStyled>
  );
};
