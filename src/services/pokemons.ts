import {
  PokeDexInterface,
  PokeCardInterface,
} from "../interfaces/pokesInterface";
import { DevelopersPokemon } from "./api";

type PaginationType = {
  offset?: number;
};

export const getFirstGeneration = async ({ offset }: PaginationType) => {
  const response = await DevelopersPokemon.get<PokeDexInterface>(
    `pokemon/?${offset ? `offset=${offset}&limit=9` : `limit=9`}`
  ).catch();
  if (response) {
    const data = { data: response.data, status: response.status };
    return data;
  }
};

export const getPokemon = async (pokemon: string) => {
  const response = await DevelopersPokemon.get<PokeCardInterface>(
    `pokemon/${pokemon}`
  ).catch();
  if (response) {
    const data = { data: response.data, status: response.status };
    return data;
  }
};
