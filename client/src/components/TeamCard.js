import "./styles/TeamCard.css"

const TeamCard = ({choice}) => {
  return (
    <div>
      <img className="image" src={choice.sprites} alt=""/>
      <h3>{choice.name}</h3>
    </div>
  )
}

export default TeamCard;