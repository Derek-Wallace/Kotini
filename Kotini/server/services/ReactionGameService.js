import { dbContext } from '../db/DbContext'
import { socketProvider } from '../SocketProvider'

class ReactionGameService {
  async getGamePlayers(gid) {
    const players = await dbContext.Account.find({ currentGame: gid })
    return players
  }

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
    socketProvider.io.emit('gameCreated', game)
    return game
  }
}

export const reactionGameService = new ReactionGameService()
