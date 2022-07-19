import TeamCard from "./TeamCard.js";
import "./styles/TeamList.css";

const TeamList = ({ choices, handleReset }) => {
  return(
    <div>
      <h2>Team</h2>
      <div className="team-list-container">
        {!choices ? (
          null
        ) : (
          choices.map((choice, index) => (
            <TeamCard choice={choice} key={index}/>
          ))
        )}
      </div>
      <button id="reset-button" onClick={handleReset}>Release Team</button>
    </div>
  )
}

export default TeamList;