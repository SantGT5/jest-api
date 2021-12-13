import { useEffect, useState } from "react";

export const usePokemon = (pokemonName) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      SetIsLoading(true);
      try {
        let namePokemon = pokemonName.toLocaleLowerCase();
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${namePokemon}`
        );
        const json = await response.json();
        setPokemon(json);
      } catch (err) {
        setError(err);
      }
      SetIsLoading(false);
    }
    fetchPokemon();
  }, [pokemonName]);

  return { pokemon, error, isLoading };
};
