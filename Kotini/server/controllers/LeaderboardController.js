import BaseController from '../utils/BaseController'
import { leaderboardService } from '../services/LeaderboardService'

export class LeaderboardController extends BaseController {
  constructor() {
    super('api/leaderboard')
    this.router
      .get('', this.getLeaders)
  }

  async getLeaders(req, res, next) {
    try {
      const leaders = await leaderboardService.getLeaders()
      return res.send(leaders)
    } catch (error) {
      next(error)
    }
  }
}
