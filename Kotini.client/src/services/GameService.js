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
}

export const gameService = new GameService()
