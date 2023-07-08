// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teams} = props
  const {id, name, teamImageUrl} = teams
  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-list">
        <img src={teamImageUrl} alt={name} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
