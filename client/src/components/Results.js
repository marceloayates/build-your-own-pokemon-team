import Card from "./Card.js";
import Details from "./Details.js"
import "./styles/Results.css"

const Results = ({pokemon, name, images, types, stats, handleChoiceSubmit}) => {
  const pokemonInfo = {
    "name": name,
    "sprites": !images ? null: images.front_default
  }

  return (
    <div>
      <Card name={name} images={images} types={types}/>
      <Details stats={stats}/>
      {!stats ? (
        null
      ) : (
        <button id="result-button" value={JSON.stringify(pokemonInfo)} onClick={handleChoiceSubmit}>Catch Pokemon</button>
      )}
    </div>
  )

}

export default Results;