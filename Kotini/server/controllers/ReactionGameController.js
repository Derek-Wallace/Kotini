import { Auth0Provider } from '@bcwdev/auth0provider'
import { reactionGameService } from '../services/ReactionGameService'
import BaseController from '../utils/BaseController'

export class ReactionGameController extends BaseController {
  constructor() {
    super('api/reactiongames')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/:sid', this.createGame)
      .get('/:id', this.getGame)
      .get('/players/:gid', this.getGamePlayers)
      .delete('/:id', this.deleteGame)
  }

  async createGame(req, res, next) {
    try {
      req.body.sessionId = req.params.sid
      req.body.creatorId = req.userInfo.id
      const game = await reactionGameService.createGame(req.body)
      return res.send(game)
    } catch (error) {
      next(error)
    }
  }

  async getGame(req, res, next) {
    try {
      const game = await reactionGameService.getGame(req.params.id)
      return res.send(game)
    } catch (error) {
      next(error)
    }
  }

  async getGamePlayers(req, res, next) {
    try {
      const players = await reactionGameService.getGamePlayers(req.params.gid)
      return res.send(players)
    } catch (error) {
      next(error)
    }
  }

  async deleteGame(req, res, next) {
    try {
      const game = await reactionGameService.deleteGame(req.params.id, req.userInfo.id)
      return res.send(game)
    } catch (error) {
      next(error)
    }
  }
}
