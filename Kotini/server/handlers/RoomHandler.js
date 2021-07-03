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

  async joinRoom(payload) {
    await this.socket.join(payload)
    this.io.to(payload).emit('joined', payload)
    // socketProvider.io.emit('joined', payload)
  }

  updatePlayers(data) {
    // socketProvider.io.to(`${data.sessionId}`).emit('updatePlayers', data.id)
    this.io.to(data.sessionId).emit('updatePlayers', data)
  }
}
