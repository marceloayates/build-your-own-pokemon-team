import { useEffect, useState } from "react"
import SearchParams from "./SearchParams.js"
import TeamList from "./TeamList.js"
import './styles/App.css';

function App() {
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    fetch("/pokemon-team/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setChoices(data)} )
  }, [])

  const handleChoiceSubmit = (e) => {
    fetch('/pokemon-team', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: e.target.value
    })
    .then(response => response.json())
    .then((data) => {
      if (data.full) {
        alert("Pokemon team is full! Release team to restart")
      } else {
        setChoices(data.data)
      }
    })
  }

  const handleReset = (e) => {
    fetch("/pokemon-team/", {
      method: "DELETE"
    })
    .then(res => res.json())
    .then((data) => setChoices(data.data))
  }

  return (
    <div className="wrapper">
      <header>
        <h1>Build your own Pokemon team</h1>
        <SearchParams handleChoiceSubmit={handleChoiceSubmit}/>
      </header>
      <TeamList choices={choices} handleReset={handleReset}/>
      <footer>Powered by PokeAPI</footer>
    </div>
  );
}

export default App;
