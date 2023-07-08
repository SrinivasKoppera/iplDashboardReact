// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatchDetails: {}, isLoading: true, id: ''}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamMatchDetails: updatedData, isLoading: false, id})
  }

  showingMatchDetailsData = () => {
    const {teamMatchDetails, id} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchDetails
    return (
      <div className={`inner-container ${id}`}>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-img"
        />
        <h1 className="latest-match">Latest Match</h1>
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        <ul className="match-list-container">
          {recentMatches.map(match => (
            <MatchCard matchesDetails={match} key={match.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      this.showingMatchDetailsData()
    )
  }
}

export default TeamMatches
