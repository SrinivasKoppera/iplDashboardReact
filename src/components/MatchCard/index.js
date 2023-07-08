// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchesDetails} = props
  const updatedData = {
    matchStatus: matchesDetails.match_status,
    result: matchesDetails.result,
    competingTeamLogo: matchesDetails.competing_team_logo,
    competingTeam: matchesDetails.competing_team,
  }
  const {matchStatus, result, competingTeamLogo, competingTeam} = updatedData
  return (
    <li className="match-list">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`matchStatus ${matchStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
