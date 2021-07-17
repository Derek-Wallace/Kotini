import { AppState } from '../AppState'
import { api } from './AxiosService'

class BotService {
  async getKey() {
    const res = await api.get('api/messages/get/key')
    AppState.botKey = res.data

    const OpenAI = require('openai-api')

    const OPENAI_API_KEY = AppState.botKey

    AppState.openai = new OpenAI(OPENAI_API_KEY)
    return res.data
  }

  async callApi(prompt, sid) {
    AppState.promptString += `\nHuman: ${prompt}\nAI:`
    const gptResponse = await AppState.openai.complete({
      engine: 'davinci',
      prompt: AppState.promptString,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: ['\n', ' Human:', ' AI:']
    })
    AppState.response = gptResponse.data.choices
    AppState.promptString += `${AppState.response[0].text}`
    const message = { message: AppState.response[0].text }
    await api.post(`api/messages/bot/${sid}`, message)
    return 'finished'
  }
}

export const botService = new BotService()
