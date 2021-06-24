import { logger } from '../utils/Logger'
import { SocketHandler } from '../utils/SocketHandler'
import Notification from '../utils/Notification'
import { sessionService } from './SessionService'
import { accountService } from './AccountService'
import { AppState } from '../AppState'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('joined', this.testJoin)
      .on('updatePlayers', this.updatePlayers)
  }

  onError(e) {
    logger.error('[SOCKET_ERROR]', e)
    Notification.toast(e.message, 'error')
  }

  testJoin(payload) {
    sessionService.getLobbyPlayers(payload)
  }

  async updatePlayers(id) {
    const body = {
      currentGame: id
    }
    await accountService.editProfile(AppState.account.id, body)
    console.log(AppState.account)
  }
}

export const socketService = new SocketService()
