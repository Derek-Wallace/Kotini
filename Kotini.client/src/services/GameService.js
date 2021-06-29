import { AppState } from '../AppState'
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
    const res = await api.put(`api/reactiongames/${gid}/played/` + id)
  }

  async getGame(gid) {
    const res = await api.get('api/reactiongames/' + gid)
    AppState.currentGame = res.data
  }

  async addResults(gid, uid, val) {
    const score = { score: val, id: uid }
    const res = await api.put(`api/reactiongames/${gid}/results`, score)
    AppState.currentGame = res.data
    console.log(AppState.currentGame)
  }
}

export const gameService = new GameService()
