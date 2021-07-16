import { AppState } from '../AppState'
import { api } from './AxiosService'

const OpenAI = require('openai-api')

const OPENAI_API_KEY = ''

const openai = new OpenAI(OPENAI_API_KEY)

class BotService {
  async callApi(prompt, sid) {
    AppState.promptString += `\nHuman: ${prompt}\nAI:`
    const gptResponse = await openai.complete({
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
    console.log(AppState.response[0].text)
    const message = { message: AppState.response[0].text }
    await api.post(`api/messages/bot/${sid}`, message)
    return 'finished'
  }
}

export const botService = new BotService()
