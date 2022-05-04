import { useEffect, useState } from "react";
import { PokeDexInterface } from "../../interfaces/pokesInterface";
import { getFirstGeneration } from "../../services/pokemons";
import { PokeCard } from "./components";
import { HomeStyled } from "./style";
import Pagination from "@mui/material/Pagination";

export const Home = () => {
  const [pokemons, setPokemons] = useState<PokeDexInterface>();
  const [pagination, setPagination] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  console.log(pokemons);

  useEffect(() => {
    const pokedex = async () => {
      const response = await getFirstGeneration({ pagination: pagination });
      if (response && response.status === 200) {
        setPokemons(response.data);
      } else {
        setError(true);
      }
    };
    pokedex();
  }, [pagination]);

  // const nextPrevius = () => {
  // };

  return (
    <HomeStyled>
      {error && "Erro ao buscar dados na pokedex"}
      {pokemons && (
        <div className="card row">
          {/* <Pagination
            className="d-flex justify-content-center mb-2"
            count={pokemons.count}
            size="large"
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={nextPrevius}
          /> */}
          {pokemons.results.map((poke) => {
            return <PokeCard pokemon={poke} />;
          })}
        </div>
      )}
    </HomeStyled>
  );
};
