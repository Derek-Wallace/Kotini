import { Auth0Provider } from '@bcwdev/auth0provider'
import { achievementsService } from '../services/AchievementsService'
import BaseController from '../utils/BaseController'

export class AchievementsController extends BaseController {
  constructor() {
    super('api/achievements')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAchievements)
  }

  async getAchievements(req, res, next) {
    try {
      const achievements = await achievementsService.getAchievements(req.userInfo.id)
      return res.send(achievements)
    } catch (error) {
      next(error)
    }
  }
}
