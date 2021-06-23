import { Auth0Provider } from '@bcwdev/auth0provider'
import { sessionsService } from '../services/SessionsService'
import BaseController from '../utils/BaseController'

export class SessionsController extends BaseController {
  constructor() {
    super('api/sessions')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getSessionById)
      .post('', this.createSession)
      .delete('/:id', this.deleteSession)
      .put('/:id', this.updateParticipant)
  }

  async getSessionById(req, res, next) {
    try {
      const session = await sessionsService.getSessionById(req.params.id)
      return res.send(session)
    } catch (error) {
      next(error)
    }
  }

  async createSession(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const session = await sessionsService.createSession(req.body)
      return res.send(session)
    } catch (error) {
      next(error)
    }
  }

  async deleteSession(req, res, next) {
    try {
      const session = await sessionsService.deleteSession(req.params.id, req.userInfo.id)
      return res.send(session)
    } catch (error) {
      next(error)
    }
  }

  async updateParticipant(req, res, next) {
    try {
      const session = await sessionsService.updateParticipant(req.params.id, req.body)
      return res.send(session)
    } catch (error) {
      next(error)
    }
  }
}
