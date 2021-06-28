const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class LeaderboardService {
  async getLeaders() {
    const res = await api.get('api/leaderboard')
    AppState.leaders = res.data
  }
}

export const leaderboardService = new LeaderboardService()
