import { dbContext } from '../db/DbContext'
import { socketProvider } from '../SocketProvider'

class MessageService {
  async getMessageBySid(sid) {
    const messages = await dbContext.Message.find({ sessionKey: sid }).populate('creator', 'name picture')
    return messages
  }

  async createMessage(message) {
    const retMessage = await dbContext.Message.create(message)
    socketProvider.io.to(`${message.sessionKey}`).emit('new:message', message)
    return retMessage
  }
}

export const messageService = new MessageService()
