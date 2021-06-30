import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { achievementsService } from './AchievementsService'
import { api } from './AxiosService'

class SessionService {
  async getSession(sid) {
    const res = await api.get('api/sessions/' + sid)
    AppState.session = res.data
  }

  async createSession() {
    if (AppState.achievements.createGame === false) {
      AppState.achievements.createGame = true
      Notification.toast("Let's get it started achievement earned", 'success', 'https://i.postimg.cc/CMk0GPQ0/vikingbuilder.png')
      await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
    }
    const res = await api.post('api/sessions')
    AppState.session = res.data
  }

  async joinSession(sid) {
    const res = await api.put('/account/session/' + sid)
    AppState.account = res.data
  }

  async getLobbyPlayers(sid) {
    const res = await api.get('account/' + sid)
    AppState.lobbyPlayers = res.data
  }
}

export const sessionService = new SessionService()
