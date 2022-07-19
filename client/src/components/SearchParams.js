import { useState } from "react";
import usePokemonList from "./usePokemonList.js";
import Results from "./Results.js"
import "./styles/SearchParams.css"

const pokemonTypes = ['normal', 'fire', 'water', 'grass', 'flying', 'fighting', 'poison', 'electric', 'ground', 'rock', 'psychic', 'ice', 'bug', 'ghost', 'steel', 'dragon', 'dark', 'fairy']

const SearchParams = ({ handleChoiceSubmit }) => {
  const [pokemon, setPokemon] = useState('')
  const [name, setName] = useState()
  const [stats, setStats] = useState()
  const [images, setImages] = useState()
  const [types, setTypes] = useState()

  const [type, setType] = useState()
  const [pokemons] = usePokemonList(type);

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }

  async function getPokemon() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const json = await res.json();
    setName(json.name);
    setStats(json.stats);
    setImages(json.sprites);
    setTypes(json.types);
  }

  return (
    <div className="search-params-container">
      <form onSubmit={handleSubmit}>
        <label id="type-selector">
          Type:
          <select
            id="type"
            type="text"
            value={type}
            onChange={(e) => {
              setType(e.target.value)
              setPokemon('')
            }}
          >
            <option />
            {pokemonTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label id="pokemon-selector">
          Pokemon:
          <select
            id="pokemon"
            type="text"
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
          >
            <option />
            {pokemons.map((pokemon, index) => (
              <option key={index} value={pokemon.pokemon.name}>
                {pokemon.pokemon.name}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <Results pokemon={pokemon} name={name} images={images} types={types} stats={stats} handleChoiceSubmit={handleChoiceSubmit}/>
    </div>
  )
}

export default SearchParams;