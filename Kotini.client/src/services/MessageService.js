import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { achievementsService } from './AchievementsService'
import { api } from './AxiosService'

class MessageService {
  async getMessages(sid) {
    const res = await api.get('api/messages/' + sid)
    AppState.messages = res.data
    return res.data
  }

  async sendMessage(message, sid) {
    if (message[0] === '!') {
      console.log('bot message')
    }
    message = { message: message }
    const res = await api.post('api/messages/' + sid, message)
    return res.data
  }
}

export const messageService = new MessageService()
