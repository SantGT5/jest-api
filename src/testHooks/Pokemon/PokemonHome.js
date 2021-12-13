import { usePokemon } from "./usePokemon";

export const PokemonHome = () => {
  const { pokemon, error, isLoading } = usePokemon("ditto");

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Network error</>;
  }

  return (
    <div>
      <img src={pokemon.sprites.front_default} alt="pokemon" />
      <h1>{pokemon.species.name}</h1>
    </div>
  );
};
