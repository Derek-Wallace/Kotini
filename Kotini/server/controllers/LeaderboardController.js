import BaseController from '../utils/BaseController'
import { leaderboardService } from '../services/LeaderboardService'

export class LeaderboardController extends BaseController {
  constructor() {
    super('api/leaderboard')
    this.router
      .get('/games', this.getLeaders)
      .get('/time', this.getTimeLeaders)
      .get('/win', this.getWinLeaders)
  }

  async getLeaders(req, res, next) {
    try {
      const leaders = await leaderboardService.getLeaders()
      return res.send(leaders)
    } catch (error) {
      next(error)
    }
  }

  async getTimeLeaders(req, res, next) {
    try {
      const leaders = await leaderboardService.getTimeLeaders()
      return res.send(leaders)
    } catch (error) {
      next(error)
    }
  }

  async getWinLeaders(req, res, next) {
    try {
      const leaders = await leaderboardService.getWinLeaders()
      return res.send(leaders)
    } catch (error) {
      next(error)
    }
  }
}
