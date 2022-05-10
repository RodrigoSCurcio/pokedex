import { useEffect, useState } from "react";
import { Pagination } from "../../components";
import { PokeDexInterface } from "../../interfaces/pokesInterface";
import { getFirstGeneration } from "../../services/pokemons";
import { PokeCard } from "./components";
import { HomeStyled } from "./style";
import gifLoading from "../../static/img/loading.gif";

export const Home = () => {
  const [pokemons, setPokemons] = useState<PokeDexInterface>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [count, setCount] = useState<number>();
  const [next, setNext] = useState<string>();
  const [previous, setPrevious] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const pokedex = async () => {
      const response = await getFirstGeneration({ offset });
      if (response && response.status === 200) {
        setPokemons(response.data);
        setCount(response.data.count);
        setNext(response.data.next);
        setPrevious(response.data.previous);
        setPage(0);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    };
    pokedex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Offset = async (direction: string) => {
    setLoading(true);
    const response = await getFirstGeneration({
      offset: direction === "foward" ? offset + 9 : offset - 9,
    });
    if (response && response.status === 200) {
      setPokemons(response.data);
      setPage(direction === "foward" ? page + 1 : page - 1);
      setNext(response.data.next);
      setPrevious(response.data.previous);
      setOffset(direction === "foward" ? offset + 9 : offset - 9);
      setLoading(false);
    }
  };

  return (
    <HomeStyled>
      {loading && (
        <div className="loading col-12">
          <img src={gifLoading} alt="gifLoading" />
        </div>
      )}
      {error && !loading && "Erro ao buscar dados na pokedex"}
      {!loading && pokemons && count && (
        <div className="card row">
          <Pagination
            Offset={Offset}
            previous={previous!}
            count={count}
            next={next}
            page={page}
          />
          {pokemons.results.map((poke) => {
            return <PokeCard pokemon={poke} />;
          })}
        </div>
      )}
    </HomeStyled>
  );
};
