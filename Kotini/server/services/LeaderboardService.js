import { dbContext } from '../db/DbContext'

class LeaderboardService {
  async getWinLeaders() {
    const accounts = await dbContext.Account.find()
    accounts.sort((a, b) => (a.gamesWon < b.gamesWon) ? 1 : -1)
    const leaders = accounts.splice(0, 5)
    return leaders
  }

  async getTimeLeaders() {
    let accounts = await dbContext.Account.find()
    accounts = accounts.filter(a => a.fastestScore !== null)
    accounts.sort((a, b) => (a.fastestScore > b.fastestScore) ? 1 : -1)
    const leaders = accounts.splice(0, 5)
    return leaders
  }

  async getLeaders() {
    const players = await dbContext.Account.find()
    players.sort((a, b) => (a.gamesPlayed < b.gamesPlayed) ? 1 : -1)
    const leaders = players.splice(0, 5)
    return leaders
  }
}

export const leaderboardService = new LeaderboardService()
