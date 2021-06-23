import { dbContext } from '../db/DbContext'

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
    return game
  }
}

export const reactionGameService = new ReactionGameService()
