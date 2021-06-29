import { dbContext } from '../db/DbContext'

class AchievementsService {
  async updateAchievements(body) {
    const achievements = await dbContext.Achievements.findOneAndUpdate({ creatorId: body.creatorId }, body, { new: true })
    return achievements
  }

  async getAchievements(id) {
    const achievements = await dbContext.Achievements.findOne({ creatorId: id })
    return achievements
  }
}

export const achievementsService = new AchievementsService()
