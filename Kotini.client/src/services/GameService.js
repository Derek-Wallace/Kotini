import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { achievementsService } from './AchievementsService'
import { api } from './AxiosService'

class GameService {
  async createGame(sid) {
    const res = await api.post('api/reactiongames/' + sid)
    return res.data
  }

  async getGamePlayers(gid) {
    const res = await api.get('api/reactiongames/players/' + gid)
    AppState.gamePlayers = res.data
  }

  async joinGame(gid) {
    await api.put('account/joingame/' + gid)
  }

  async gamePlayed(gid, id) {
    await api.put(`api/reactiongames/${gid}/played/` + id)
  }

  async getGame(gid) {
    const res = await api.get('api/reactiongames/' + gid)
    AppState.currentGame = res.data
  }

  async getWins() {
    const res = await api.get('api/reactiongames/games/wins')
    AppState.wins = res.data
  }

  async addResults(gid, uid, val) {
    const score = { score: val, id: uid }
    if (score.score <= 250 && AppState.achievements.sharpshooter === false) {
      AppState.achievements.sharpshooter = true
      Notification.toast('Sharpshooter achievement earned', '', 'https://i.postimg.cc/0Nv9WrVV/sharpshooter.png')
      await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
    } if (score.score <= 200 && AppState.achievements.bitw === false) {
      AppState.achievements.bitw = true
      Notification.toast('Best in the West achievement earned', '', 'https://i.postimg.cc/fTjs3MzX/bitw.png')
      await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
    }
    const res = await api.put(`api/reactiongames/${gid}/results`, score)
    AppState.currentGame = res.data
  }

  async tryTopScore(val) {
    const score = { score: val }
    await api.put('account/topscore/newscore', score)
  }

  async removePlayer(gid) {
    await api.put('api/reactiongames/remove/' + gid)
  }
}

export const gameService = new GameService()
