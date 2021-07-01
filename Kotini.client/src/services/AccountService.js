import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import Notification from '../utils/Notification'
import { achievementsService } from './AchievementsService'

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
    if (AppState.achievements.picasso !== true) {
      AppState.achievements.picasso = true
      Notification.toast('Picasso Achievement earned', '', 'https://img.icons8.com/emoji/452/artist-palette.png')
      await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
    }
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
      if (AppState.account.gamesPlayed >= 1 && AppState.achievements.gettingHorns === false) {
        AppState.achievements.gettingHorns = true
        Notification.toast('Getting your horns achievement', '', 'https://www.clipartmax.com/png/full/2-29392_cartoon-viking-helmet-clipart-club-penguin-gold-viking-helmet.png')
        await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
      } if (AppState.account.gamesPlayed >= 10 && AppState.achievements.findingFeet === false) {
        AppState.achievements.findingFeet = true
        Notification.toast('Finding your feet achievement earned', '', 'https://www.nicepng.com/png/full/78-785717_cartoon-boots-png-image-transparent-stock-boots-cartoon.png')
        await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
      } if (AppState.account.gamesPlayed >= 20 && AppState.achievements.scout === false) {
        AppState.achievements.scout = true
        Notification.toast('Scout achievement earned', '', 'https://i.postimg.cc/6qBN5RxS/scout.png')
        await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
      } if (AppState.account.gamesPlayed >= 50 && AppState.achievements.soldier === false) {
        AppState.achievements.soldier = true
        Notification.toast('Soldier achievement earned', '', 'https://pngimg.com/uploads/viking/viking_PNG31.png')
        await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
      } if (AppState.account.gamesPlayed >= 100 && AppState.achievements.raider === false) {
        AppState.achievements.raider = true
        Notification.toast('Raider achievement earned', '', 'https://i.postimg.cc/t4Jn4nXY/raider.png')
        await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
      } if (AppState.account.gamesPlayed >= 500 && AppState.achievements.captain === false) {
        AppState.achievements.captain = true
        Notification.toast('Captain achievement earned', '', 'https://i.postimg.cc/wj8n6L5k/unnamed-1.png')
        await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
      } if (AppState.account.gamesPlayed >= 1000 && AppState.achievements.warlord === false) {
        AppState.achievements.warlord = true
        Notification.toast('Warlord achievement earned', '', 'https://i.postimg.cc/bJ4fkMn7/warlord.png')
        await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
      }
      const res = await api.put('/account', AppState.account)
      AppState.account = res.data
    } catch (error) {
      Notification.toast(error)
    }
  }

  async clearSession(id) {
    try {
      const res = await api.put('/account/clear/' + id)
      AppState.account = res.data
    } catch (error) {
      Notification.toast(error)
    }
  }
}

export const accountService = new AccountService()
