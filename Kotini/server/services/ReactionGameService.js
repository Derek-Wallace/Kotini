import { dbContext } from '../db/DbContext'
import { socketProvider } from '../SocketProvider'

class ReactionGameService {
  async getGamesByWinner(id) {
    const winner = await dbContext.ReactionGame.find({ winnerId: id })
    return winner
  }

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
    const game = await dbContext.ReactionGame.findById(id).populate('winner')
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
    if (gamePlayers.length <= updatedGame.results.length) {
      let winner = updatedGame.results[0].id
      let winnerScore = updatedGame.results[0].score
      for (let i = 1; i < updatedGame.results.length; i++) {
        if (updatedGame.results[i].score < updatedGame.results[i - 1].score) {
          winner = updatedGame.results[i].id
          winnerScore = updatedGame.results[i].score
        }
      }
      await dbContext.ReactionGame.findByIdAndUpdate(gid, { winnerScore: winnerScore }, { new: true })
      await dbContext.ReactionGame.findByIdAndUpdate(gid, { winnerId: winner }, { new: true })
      const winnerAcc = await dbContext.Account.findById(winner)
      winnerAcc.gamesWon = winnerAcc.gamesWon + 1
      await dbContext.Account.findOneAndUpdate({ _id: winnerAcc.id }, winnerAcc, { new: true })

      const finalGame = await dbContext.ReactionGame.findById(gid).populate('winner')
      socketProvider.io.emit('results-calc', gid)
      return finalGame
    }
    updatedGame = await dbContext.ReactionGame.findById(gid)
    return updatedGame
  }
}

export const reactionGameService = new ReactionGameService()
