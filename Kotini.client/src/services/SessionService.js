import { AppState } from '../AppState'
import { api } from './AxiosService'

class SessionService {
  async createSession() {
    const res = await api.post('/sessions', AppState.account.id)
    AppState.session = res.data
  }

  async joinSession(sid) {
    const res = await api.put('/account/' + sid, sid)
    AppState.account = res.data
  }
}

export const sessionService = new SessionService()
