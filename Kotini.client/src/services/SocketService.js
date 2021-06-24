import { logger } from '../utils/Logger'
import { SocketHandler } from '../utils/SocketHandler'
import Notification from '../utils/Notification'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('joined', this.testJoin)
  }

  onError(e) {
    logger.error('[SOCKET_ERROR]', e)
    Notification.toast(e.message, 'error')
  }

  testJoin(payload) {
    console.log('joined', payload)
  }
}

export const socketService = new SocketService()
