import { Auth0Provider } from '@bcwdev/auth0provider'
import { messageService } from '../services/MessageService'
import BaseController from '../utils/BaseController'

export class MessageController extends BaseController {
  constructor() {
    super('api/messages')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:sid', this.getMessageBySid)
      .post('/:sid', this.createMessage)
  }

  async getMessageBySid(req, res, next) {
    try {
      const message = await messageService.getMessageBySid(req.params.sid)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }

  async createMessage(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.sessionKey = req.params.sid
      const message = await messageService.createMessage(req.body)
      return res.send(message)
    } catch (error) {
      next(error)
    }
  }
}
