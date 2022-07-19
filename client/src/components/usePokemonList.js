import { useState, useEffect } from "react";

const localCache = {};

export default function usePokemonList(type) {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    if (!type) {
      setPokemonList([]);
    } else if (localCache[type]) {
      setPokemonList(localCache);
    } else {
      requestPokemonList();
    }

    async function requestPokemonList() {
      setPokemonList([]);

      const res = await fetch(
        `https://pokeapi.co/api/v2/type/${type}`
      );
      const json = await res.json();
      localCache[type] = json.pokemon || [];
      setPokemonList(localCache[type]);

    }
  }, [type]);

  return [pokemonList];
}