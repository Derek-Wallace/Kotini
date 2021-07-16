import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { achievementsService } from './AchievementsService'
import { api } from './AxiosService'
import { botService } from './BotService'

class MessageService {
  async getMessages(sid) {
    const res = await api.get('api/messages/' + sid)
    AppState.messages = res.data
    return res.data
  }

  async sendMessage(message, sid) {
    if (message[0] === '!') {
      const botMessage = message.replace('!', '')
      console.log('bot message')
      botService.callApi(botMessage, sid)
    }
    message = { message: message }
    const res = await api.post('api/messages/' + sid, message)
    return res.data
  }
}

export const messageService = new MessageService()
