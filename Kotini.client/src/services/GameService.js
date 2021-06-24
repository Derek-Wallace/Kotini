import { api } from './AxiosService'

class GameService {
  async createGame(sid) {
    const res = await api.post('api/reactiongames/' + sid)
  }
}

export const gameService = new GameService()
