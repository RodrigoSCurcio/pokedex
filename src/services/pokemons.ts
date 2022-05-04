import { PokeDexInterface } from "../interfaces/pokesInterface";
import { DevelopersPokemon } from "./api";

type PaginationType = {
  pagination?: number;
};

export const getFirstGeneration = async ({ pagination }: PaginationType) => {
  const response = await DevelopersPokemon.get<PokeDexInterface>(
    `pokemon/?${pagination ? `offset=${pagination}&limit=9` : `limit=9`}`
  ).catch();
  if (response) {
    const data = { data: response.data, status: response.status };
    return data;
  }
};

export const getPokemon = async (pokemon: string) => {
  const response = await DevelopersPokemon.get<any>(
    `pokemon/${pokemon}`
  ).catch();
  if (response) {
    const data = { data: response.data, status: response.status };
    return data;
  }
};
