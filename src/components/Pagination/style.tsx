import styled from "styled-components";
import * as colors from "../../styles/colors";

export const PaginationStyled = styled.div`
  font-family: "VT323", monospace;
  font-size: 18px;

  div.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  strong.paginationInfos {
    text-transform: uppercase;
    color: ${colors.BLACK};
  }
`;
