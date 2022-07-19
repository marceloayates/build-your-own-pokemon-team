import "./styles/Details.css"

const Details = ({ stats }) => {
  return (
    <div id="pokemon-details">
      <table>
        <tbody>
          <tr>
            <th>Stat Name</th>
            <th>Base Stat</th>
          </tr>
          {!stats ? (
            null
          ) : (
            stats.map((stat, index) => (
              <tr key={index}>
                <td>{stat.stat.name}</td>
                <td>{stat.base_stat}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Details;