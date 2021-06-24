import { AppState } from '../AppState'
import { api } from './AxiosService'

class SessionService {
  async createSession() {
    const res = await api.post('api/sessions')
    AppState.session = res.data
  }

  async joinSession(sid) {
    const res = await api.put('/account/' + sid)
    AppState.account = res.data
  }
}

export const sessionService = new SessionService()
