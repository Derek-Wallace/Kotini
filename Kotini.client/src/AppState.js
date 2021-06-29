import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  session: {},
  lobbyPlayers: [],
  gamePlayers: [],
  currentGame: {},
  gameVars: {
    firstTime: null,
    secondTime: null,
    finalTime: null
  },
  leaders: [],
  achievements: {}
})
