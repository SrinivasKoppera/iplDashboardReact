// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updateData = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  const {
    umpires,
    date,
    result,
    manOfTheMatch,
    venue,
    competingTeamLogo,
    competingTeam,
    firstInnings,
    secondInnings,
  } = updateData
  return (
    <div className="latest-match-container">
      <div className="first-part">
        <p className="team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <div className="second-part">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="team-logo"
        />
      </div>
      <div className="third-part">
        <p className="first-innings">First Innings</p>
        <p className="first-innings-name">{firstInnings}</p>
        <p className="second-innings">Second Innings</p>
        <p className="second-innings-name">{secondInnings}</p>
        <p className="man-of-the-match">Man of the Match</p>
        <p className="man-of-the-match-name">{manOfTheMatch}</p>
        <p className="umpires">Umpires</p>
        <p className="umpires-name">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
