import { dbContext } from '../db/DbContext'

class SessionsService {
  async addParticipant(sid, body) {
    const session = await dbContext.Session.findByIdAndUpdate(sid, body, { new: true }).populate('creator', 'name picture')
    return session
  }

  async deleteSession(sid, uid) {
    const session = await dbContext.Session.findOneAndRemove({ creatorId: uid, _id: sid })
    return session
  }

  async createSession(body) {
    const session = await dbContext.Session.create(body)
    await session.populate('creator', 'name picture').execPopulate()
    return session
  }

  async getSessionById(id) {
    const session = await dbContext.Session.findById(id).populate('creator', 'name picture')
    return session
  }
}

export const sessionsService = new SessionsService()
