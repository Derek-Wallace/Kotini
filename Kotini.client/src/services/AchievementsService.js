import Notification from '../utils/Notification'

const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class AchievementsService {
  async getAchievements() {
    const res = await api.get('api/achievements')
    AppState.achievements = res.data
    if (AppState.achievements.picasso === true &&
      AppState.achievements.createGame === true &&
       AppState.achievements.outOfShell === true &&
       AppState.achievements.gettingHorns === true &&
       AppState.achievements.findingFeet === true &&
       AppState.achievements.scout === true &&
       AppState.achievements.soldier === true &&
       AppState.achievements.raider === true &&
       AppState.achievements.captain === true &&
       AppState.achievements.warlord === true &&
       AppState.achievements.climbingRanks === true &&
       AppState.achievements.secondToNone === true &&
       AppState.achievements.sharpshooter === true &&
       AppState.achievements.bitw === true &&
       AppState.achievements.completionist === false) {
      AppState.achievements.completionist = true
      Notification.toast('Completionist achievement earned', '', 'https://hadit.com/wp-content/uploads/2016/07/100-percent-002.png')
      await this.updateAchievements(AppState.achievements, AppState.account.id)
    }
  }

  async updateAchievements(body, id) {
    const res = await api.put('api/achievements/' + id, body)
    AppState.achievements = res.data
  }
}

export const achievementsService = new AchievementsService()
