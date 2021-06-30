import { dbContext } from '../db/DbContext'
import { socketProvider } from '../SocketProvider'

class ReactionGameService {
  async gamePlayed(gid, id) {
    const game = await dbContext.ReactionGame.findByIdAndUpdate(gid, { $push: { players: id } }, { new: true })
    const gamePlayers = await dbContext.Account.find({ currentGame: gid })
    if (gamePlayers.length <= game.players.length) {
      await dbContext.ReactionGame.findByIdAndUpdate(gid, { ended: true }, { new: true })
      socketProvider.io.emit('game-over', gid)
    }
    return game
  }

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

  async calcResults(gid, score) {
    let updatedGame = await dbContext.ReactionGame.findByIdAndUpdate(gid, { $push: { results: score } }, { new: true })
    const gamePlayers = await dbContext.Account.find({ currentGame: gid })
    if (gamePlayers.length <= updatedGame.players.length) {
      let winner = updatedGame.results[0].id
      for (let i = 1; i < updatedGame.results.length; i++) {
        if (updatedGame.results[i].score < updatedGame.results[i - 1]) {
          winner = updatedGame.results[i].id
        }
      }
      await dbContext.ReactionGame.findByIdAndUpdate(gid, { winnerId: winner }, { new: true })
      const finalGame = await dbContext.ReactionGame.findById(gid).populate('winner')
      socketProvider.io.emit('results-calc', gid)
      return finalGame
    }
    updatedGame = await dbContext.ReactionGame.findById(gid).populate('winner')
    return updatedGame
  }
}

export const reactionGameService = new ReactionGameService()
