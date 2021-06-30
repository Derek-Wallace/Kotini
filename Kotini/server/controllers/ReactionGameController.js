import { Auth0Provider } from '@bcwdev/auth0provider'
import { reactionGameService } from '../services/ReactionGameService'
import BaseController from '../utils/BaseController'
import { getRandomTime } from '../utils/RandomTime'

export class ReactionGameController extends BaseController {
  constructor() {
    super('api/reactiongames')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('/:sid', this.createGame)
      .get('/:id', this.getGame)
      .get('/players/:gid', this.getGamePlayers)
      .delete('/:id', this.deleteGame)
      .put('/:gid/played/:id', this.gamePlayed)
      .put('/:gid/results', this.calcResults)
      .get('/games/wins', this.getGamesByWinner)
  }

  async gamePlayed(req, res, next) {
    try {
      const game = await reactionGameService.gamePlayed(req.params.gid, req.params.id)
      return res.send(game)
    } catch (error) {
      next(error)
    }
  }

  async createGame(req, res, next) {
    try {
      req.body.sessionId = req.params.sid
      req.body.creatorId = req.userInfo.id
      req.body.timeDelay = getRandomTime()
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

  async calcResults(req, res, next) {
    try {
      const game = await reactionGameService.calcResults(req.params.gid, req.body)
      return res.send(game)
    } catch (error) {
      next(error)
    }
  }

  async getGamesByWinner(req, res, next) {
    try {
      const winner = await reactionGameService.getGamesByWinner(req.userInfo.id)
      return res.send(winner)
    } catch (error) {
      next(error)
    }
  }
}
