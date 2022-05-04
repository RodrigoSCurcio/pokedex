import styled from "styled-components";

export const NavContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  button.buttonStyle {
    background-color: transparent;
    color: #fff;

    text-transform: uppercase;

    border: 1px solid;
    border-color: #fff;
    border-radius: 10px;

    height: 40px;
    width: 30%;
    cursor: pointer;

    &:hover {
      cursor: pointer;
      background-color: black;
    }
  }
`;
