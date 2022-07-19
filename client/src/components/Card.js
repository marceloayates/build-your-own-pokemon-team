import "./styles/Card.css"

const Card = ({name, images, types}) => {

  return (
    <div>
      {!images ? (
        null
      ): (
        <div id="card-container">
          <p>{name}</p>
          <img src={images.front_default} alt=""/>
          <img src={images.front_shiny} alt=""/>
          {types.map((type, index) => (
            <div key={index}>Type: {type.type.name}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Card;