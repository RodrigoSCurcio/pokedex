import styled from "styled-components";
import * as colors from "../../../styles/colors";

export const PokeCardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "VT323", monospace;
  font-size: 18px;

  margin: 5px;
  height: 320px;
  border: 1px solid;
  border-radius: 15px;
  border-color: #c4c4c4;
  box-shadow: 0px 4px 4px 0px #00000040;

  .divPokeName {
    font-size: 23px;
    border: 2px solid;
    border-radius: 5px;
    border-color: ${colors.BLACK};
    box-shadow: 0px 4px 4px 0px ${colors.BLACK};
  }

  &.grass {
    background-color: ${colors.GRASS};
  }

  &.fire {
    background-color: ${colors.FIRE};
  }

  &.water {
    background-color: ${colors.WATER};
  }

  &.bug {
    background-color: ${colors.BUG};
  }

  &.normal {
    background-color: ${colors.NORMAL};
  }

  &.poison {
    background-color: ${colors.POISON};
  }

  &.electric {
    background-color: ${colors.ELECTRIC};
  }

  &.ground {
    background-color: ${colors.GROUND};
  }

  &.fairy {
    background-color: ${colors.FAIRY};
  }

  &.fighting {
    background-color: ${colors.FIGHTING};
  }

  &.psychic {
    background-color: ${colors.PSYCHIC};
  }

  &.rock {
    background-color: ${colors.ROCK};
  }

  &.ghost {
    background-color: ${colors.GHOST};
  }

  &.ice {
    background-color: ${colors.ICE};
  }

  &.dragon {
    background-color: ${colors.DRAGON};
  }
`;

export const TypeStyled = styled.div`
  text-transform: uppercase;

  margin: 5px;
  padding: 5px;

  border: 1px solid;
  border-radius: 6px;
  border-color: ${colors.BLACK};
  box-shadow: 0px 4px 4px 0px ${colors.BLACK};

  background-color: ${colors.LIGHT_GRAY};
`;
