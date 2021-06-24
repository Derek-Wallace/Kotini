import { dbContext } from '../db/DbContext'
import { socketProvider } from '../SocketProvider'

class ReactionGameService {
  async deleteGame(gid, uid) {
    const game = await dbContext.ReactionGame.findOneAndRemove({ id: gid, creatorId: uid })
    return game
  }

  async getGame(id) {
    const game = await dbContext.ReactionGame.findById(id)
    return game
  }

  async createGame(body) {
    const game = await dbContext.ReactionGame.create(body)
    socketProvider.io.to(`${game.sessionId}`).emit('createGame', game.id)
    return game
  }
}

export const reactionGameService = new ReactionGameService()
