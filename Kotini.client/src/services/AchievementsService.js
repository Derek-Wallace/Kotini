const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class AchievementsService {
  async getAchievements() {
    const achievements = await api.get('api/achievements')
    AppState.achievements = achievements
  }
}

export const achievementsService = new AchievementsService()
