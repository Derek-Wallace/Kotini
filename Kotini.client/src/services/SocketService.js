import { logger } from '../utils/Logger'
import { SocketHandler } from '../utils/SocketHandler'
import Notification from '../utils/Notification'
import { sessionService } from './SessionService'
import { accountService } from './AccountService'
import { AppState } from '../AppState'
import { gameService } from './GameService'
import { messageService } from './MessageService'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('joined', this.joinSession)
      .on('new:message', this.getMessage)
      .on('updatePlayers', this.updatePlayers)
      .on('gameCreated', this.joinGame)
      .on('game-over', this.gameOver)
      .on('results-calc', this.gameOver)
  }

  onError(e) {
    logger.error('[SOCKET_ERROR]', e)
    Notification.toast(e.message, 'error')
  }

  async joinSession(payload) {
    await sessionService.getLobbyPlayers(payload)
  }

  async getMessage(message) {
    await messageService.getMessages(message.sessionKey)
    const textBox = document.getElementById('text-box')
    textBox.scrollTop = textBox.scrollHeight
  }

  async updatePlayers(gid) {
    await accountService.updateProfileGame(AppState.account, gid)
  }

  async joinGame(game) {
    await gameService.joinGame(game.id)
    AppState.currentGame = game
  }

  async gameOver(gid) {
    await gameService.getGame(gid)
    await accountService.getAccount()
  }
}

export const socketService = new SocketService()
