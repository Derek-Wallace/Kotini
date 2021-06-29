const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class AchievementsService {
  async getAchievements() {
    const res = await api.get('api/achievements')
    AppState.achievements = res.data
  }

  async updateAchievements(body, id) {
    const res = await api.put('api/achievements/' + id, body)
    AppState.achievements = res.data
  }
}

export const achievementsService = new AchievementsService()
