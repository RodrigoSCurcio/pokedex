import logo from "../../static/img/Pokemon.png";
import { LogoContainerStyled } from "./style";

export const Logo = () => {
  return (
    <LogoContainerStyled className="col-12">
        <img className="imgLogo" src={logo} alt="logo" />
    </LogoContainerStyled>
  );
};
