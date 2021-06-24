import { api } from './AxiosService'

class GameService {
  async createGame(sid) {
    const res = await api.post('api/reactiongames/' + sid)
    console.log(res.data)
  }
}

export const gameService = new GameService()
