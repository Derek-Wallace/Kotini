import { socketProvider } from '../SocketProvider'
import { SocketHandler } from '../utils/SocketHandler'

export class RoomHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket, true)
    this
      .on('join', this.joinRoom)
  }

  async joinRoom(payload) {
    socketProvider.io.emit('joined', payload)
  }
}
