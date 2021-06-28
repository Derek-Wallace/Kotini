import { dbContext } from '../db/DbContext'

class LeaderboardService {
  async getLeaders() {
    const players = await dbContext.Account.find()
    players.sort((a, b) => (a.gamesPlayed < b.gamesPlayed) ? 1 : -1)
    const leaders = players.splice(0, 5)
    return leaders
  }
}

export const leaderboardService = new LeaderboardService()
