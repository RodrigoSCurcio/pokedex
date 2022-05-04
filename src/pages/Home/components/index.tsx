import { useEffect, useState } from "react";
import {
  PokemonInfosInterface,
  PokeCardInterface,
} from "../../../interfaces/pokesInterface";
import { getPokemon } from "../../../services/pokemons";
import { PokeCardStyled, TypeStyled } from "./style";

type PokeCardType = {
  pokemon: PokemonInfosInterface;
};

export const PokeCard = ({ pokemon }: PokeCardType) => {
  const [pokemonData, setPokemonData] = useState<PokeCardInterface>();
  const [pokeType, setPokeType] = useState<string>();

  useEffect(() => {
    const getPokeInfos = async () => {
      const response = await getPokemon(pokemon.name);
      if (response && response.status === 200) {
        setPokemonData(response.data);
        setPokeType(response.data.types[0].type.name)
      }
    };
    getPokeInfos();
  }, [pokemon]);

  return (
    <>
      {pokeType && (
        <PokeCardStyled className={`col-sm-3 ${pokeType}`}>
            {pokemonData && (
              <div>
                <h5 className="divPokeName text-uppercase text-center mb-3">
                  {pokemon.name}
                </h5>
                <div className="d-flex justify-content-center">
                  <img
                    src={pokemonData.sprites.front_default}
                    alt={`${pokemon.name}`}
                  />
                </div>
                <div className="d-flex justify-content-center mt-3">
                  {pokemonData.types.map((type) => {
                    return <TypeStyled>{type.type.name}</TypeStyled>;
                  })}
                </div>
              </div>
            )}
        </PokeCardStyled>
      )}
    </>
  );
};
