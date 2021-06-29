import { dbContext } from '../db/DbContext'

class AchievementsService {
  async getAchievements(id) {
    const achievements = await dbContext.Achievements.find({ creatorId: id })
    return achievements
  }
}

export const achievementsService = new AchievementsService()
