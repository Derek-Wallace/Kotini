import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/:sid', this.getLobbyPlayers)
      .put('', this.updateStats)
      .put('/session/:sid', this.updateCurrentSession)
      .put('/game/:gid', this.updateCurrentGame)
      .put('/:id', this.updateAccount)
      .put('/joingame/:gid', this.joinGame)
      .put('/topscore/newscore', this.tryTopScore)
      .put('/clear/:id', this.clearSession)
  }

  async updateAccount(req, res, next) {
    try {
      req.body.id = req.userInfo.id
      const account = await accountService.updateAccount(req.userInfo.id, req.body)
      return res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async getLobbyPlayers(req, res, next) {
    try {
      const players = await accountService.getLobbyPlayers(req.params.sid)
      return res.send(players)
    } catch (error) {
      next(error)
    }
  }

  async updateStats(req, res, next) {
    try {
      const account = await accountService.updateStats(req.body, req.userInfo.id)
      return res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async updateCurrentSession(req, res, next) {
    try {
      req.body.currentSession = req.params.sid
      const account = await accountService.updateCurrentSession(req.body, req.userInfo.id)
      return res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async updateCurrentGame(req, res, next) {
    try {
      req.body.currentGame = req.params.gid
      const account = await accountService.updateCurrentGame(req.body, req.userInfo.id)
      return res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async joinGame(req, res, next) {
    req.body.currentGame = req.params.gid
    req.body.id = req.userInfo.id
    try {
      const account = await accountService.joinGame(req.body)
      return res.send(account)
    } catch (error) {
      next(error)
    }
  }

  async tryTopScore(req, res, next) {
    try {
      await accountService.tryTopScore(req.body, req.userInfo.id)
      return res.send('updated')
    } catch (error) {
      next(error)
    }
  }

  async clearSession(req, res, next) {
    try {
      const account = await accountService.clearSession(req.userInfo.id)
      return res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
