import { AppState } from '../AppState'
import { api } from './AxiosService'

class SessionService {
  async getSession(sid) {
    const res = await api.get('api/sessions/' + sid)
    AppState.session = res.data
  }

  async createSession() {
    const res = await api.post('api/sessions')
    AppState.session = res.data
  }

  async joinSession(sid) {
    const res = await api.put('/account/' + sid)
    AppState.account = res.data
  }

  async getLobbyPlayers(sid) {
    const res = await api.get('account/' + sid)
    AppState.lobbyPlayers = res.data
  }
}

export const sessionService = new SessionService()
