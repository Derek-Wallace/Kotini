import { Auth0Provider } from '@bcwdev/auth0provider'
import { achievementsService } from '../services/AchievementsService'
import BaseController from '../utils/BaseController'

export class AchievementsController extends BaseController {
  constructor() {
    super('api/achievements')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAchievements)
      .put('/:id', this.updateAchievements)
  }

  async getAchievements(req, res, next) {
    try {
      const achievements = await achievementsService.getAchievements(req.userInfo.id)
      return res.send(achievements)
    } catch (error) {
      next(error)
    }
  }

  async updateAchievements(req, res, next) {
    try {
      req.body.creatorId = req.params.id
      const achievements = await achievementsService.updateAchievements(req.body)
      return res.send(achievements)
    } catch (error) {
      next(error)
    }
  }
}
