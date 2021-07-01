import { dbContext } from '../db/DbContext'
import { socketProvider } from '../SocketProvider'

class SessionsService {
  async updateParticipant(sid, body) {
    const session = await dbContext.Session.findByIdAndUpdate(sid, body, { new: true }).populate('creator', 'name picture')
    socketProvider.io.to(`${sid}`).emit('updateParticipant')
    return session
  }

  async deleteSession(sid, uid) {
    const session = await dbContext.Session.findOneAndRemove({ creatorId: uid, _id: sid })
    socketProvider.io.to(`${sid}`).emit('deleteSession')
    return session
  }

  async createSession(body) {
    const session = await dbContext.Session.create(body)
    await session.populate('creator', 'name picture').execPopulate()
    return session
  }

  async getSessionById(id) {
    const session = await dbContext.Session.findOne({ sessionKey: id }).populate('creator', 'name picture')
    return session
  }
}

export const sessionsService = new SessionsService()
