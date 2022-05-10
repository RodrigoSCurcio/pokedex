import styled from "styled-components";
import * as colors from "../../styles/colors";

export const HomeStyled = styled.div`
  margin-bottom: 1em;
  height: 100%;
  overflow-x: hidden;

  div.loading {
    display: flex;
    justify-content: center;
    background-color: ${colors.RED};
  }

  div.card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 1em;

    background-color: #add8e6;
  }
`;
