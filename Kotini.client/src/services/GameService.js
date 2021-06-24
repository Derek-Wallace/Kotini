import { SocketHandler } from '../utils/SocketHandler'
import { api } from './AxiosService'
const socketHandler = new SocketHandler()

class GameService {
  async createGame(sid) {
    const res = await api.post('api/reactiongames/' + sid)
    console.log(res.data)
    socketHandler.emit('gameCreated', res.data)
  }
}

export const gameService = new GameService()
