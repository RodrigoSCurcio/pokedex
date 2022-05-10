import styled from "styled-components";
import * as colors from "../../styles/colors";

export const ButtonStyled = styled.button`
  font-family: "VT323", monospace;
  font-size: 18px;
  background-color:  ${colors.ICE};

  border: 1px solid;
  border-radius: 6px;
  border-color: ${colors.LIGHT_BLACK};
  box-shadow: 0px 3px 3px 0px ${colors.LIGHT_BLACK};
`;
