export interface PokemonInfosInterface {
  name: string;
  url: string;
}

export interface PokeDexInterface {
  count: number;
  next: string;
  previous: string | null;
  results: Array<PokemonInfosInterface>;
}

type AbilityInterface = {
  name: string;
  url: string;
};

type AbilitiesInterface = {
  ability: AbilityInterface;
  is_hidden: boolean;
  slot: number;
};

type GameIndicesInterface = {
  game_index: number;
  version: PokemonInfosInterface;
};

type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: Array<PokemonInfosInterface>;
};

type MovesInterface = {
  move: PokemonInfosInterface;
  version_group_details: Array<VersionGroupDetails>;
};

interface SpritesInterface {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

interface TypeInterface {
  slot: number;
  type: PokemonInfosInterface;
}

export interface PokeCardInterface {
  abilities: Array<AbilitiesInterface>;
  base_experience: number;
  forms: Array<PokemonInfosInterface>;
  game_indices: Array<GameIndicesInterface>;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<MovesInterface>;
  name: string;
  order: number;
  species: PokemonInfosInterface;
  sprites: SpritesInterface;
  weight: number;
  types: Array<TypeInterface>;
}
