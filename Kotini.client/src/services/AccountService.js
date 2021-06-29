import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import Notification from '../utils/Notification'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editProfile(id, body) {
    try {
      const res = await api.put('/account/' + id, body)
      AppState.account = res.data
    } catch (error) {
    }
  }

  async updateProfileGame(account, gid) {
    try {
      const res = await api.put('/account/game/' + gid, account)
      AppState.account = res.data
    } catch (error) {
      Notification.toast(error)
    }
  }

  async updateGamePlayed() {
    try {
      AppState.account.gamesPlayed = AppState.account.gamesPlayed + 1
      const res = await api.put('/account', AppState.account)
      AppState.account = res.data
    } catch (error) {
      Notification.toast(error)
    }
  }
}

export const accountService = new AccountService()
