import Notification from '../utils/Notification'
import { achievementsService } from './AchievementsService'

const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class LeaderboardService {
  async getLeaders() {
    const res = await api.get('api/leaderboard')
    AppState.leaders = res.data
    for (let i = 0; i < AppState.leaders.length; i++) {
      if (AppState.account.id === AppState.leaders[i].id && AppState.achievements.climbingRanks === false) {
        AppState.achievements.climbingRanks = true
        Notification.toast('Climbing the ranks achievement earned', 'success', 'https://library.kissclipart.com/20180905/ohq/kissclipart-army-sergeant-rank-clipart-sergeant-united-states-3b49d7d286cb7b0f.png')
        await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
      }
    }
    if (AppState.account.id === AppState.leaders[0].id && AppState.achievements.secondToNone === false) {
      AppState.achievements.secondToNone = true
      Notification.toast('Second to none achievement earned', 'success', 'https://www.batesville.com/wp-content/uploads/2016/10/1.png')
      await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
    }
  }
}

export const leaderboardService = new LeaderboardService()
