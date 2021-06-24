import { socketProvider } from '../SocketProvider'
import { SocketHandler } from '../utils/SocketHandler'

export class RoomHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket)
    this
      .on('join', this.joinRoom)
      .on('gameCreated', this.updatePlayers)
  }

  joinRoom(payload) {
    socketProvider.io.emit('joined', payload)
  }

  updatePlayers(body) {
    socketProvider.io.emit('updatePlayers', body.id)
  }
}
