<template>
  <div class="gamePage flex-grow-1 d-flex flex-column align-items-center justify-content-center container-fluid" v-if="currentGame.id">
    <div class="row" v-if="currentGame.ended === false">
      <div class="col-12 text-center">
        <span v-for="player in players" :key="player.id" class="text-light p-3">{{ player.name }}</span>

        <h1 id="ready-button" class="text-success mt-5" role="button" @click="runGame">
          Ready
        </h1>

        <h1 id="game-instruction" class="text-primary mt-5 d-none">
          Click the gun when it appears!
        </h1>
        <a href="javascript:void(0)" @keydown.space="gamePlayed(account.id)" id="game-button">
          <img v-show="state.showButton"
               class=""
               src="https://static.wikia.nocookie.net/fallout/images/f/fd/FO76_Single_action_revolver.png"
               width="300"
               role="button"
               @click="gamePlayed(account.id)"
          >
        </a>
        <h2 id="game-played" class="d-none text-primary">
          You clicked the gun
        </h2>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h1 class="gg">
            Game Over
          </h1>
          <h2 class="text-success" v-if="currentGame.winner">
            Winner: {{ currentGame.winner.name }}
          </h2>
          <h3 class="text-primary">
            Your Score:
            {{ score }}ms
          </h3>
          <h3></h3>
        </div>
        <div v-if="currentGame.winner" class="col-12 text-center">
          <h6 role="button" @click="playAgain" class="gg">
            Confirm
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, reactive, ref } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { gameService } from '../services/GameService'
import { useRoute, useRouter } from 'vue-router'
import { accountService } from '../services/AccountService'
import Notification from '../utils/Notification'
import { sessionService } from '../services/SessionService'
export default {
  setup() {
    const gameButton = ref(null)
    const state = reactive({
      showButton: false
    })
    const route = useRoute()
    const router = useRouter()

    onMounted(async() => {
      try {
        await gameService.getGame(route.params.id)
        await gameService.getGamePlayers(route.params.id)
      } catch (error) {
      }
    })
    return {
      state,
      gameButton,
      async playAgain() {
        await accountService.updateProfileGame(AppState.account, route.params.id)
        await accountService.updateGamePlayed()
        router.push({ path: '/sessions/' + AppState.session.sessionKey })
        AppState.account.currentGame = null
      },
      async gamePlayed(id) {
        // document.getElementById('game-button').classList.add('d-none')
        if (state.showButton === true) {
          state.showButton = false
          document.getElementById('game-played').classList.remove('d-none')
          const d = new Date()
          AppState.gameVars.secondTime = d.getTime()
          AppState.gameVars.finalTime = AppState.gameVars.secondTime - AppState.gameVars.firstTime
          AppState.gameVars.finalTime = AppState.gameVars.finalTime - (AppState.currentGame.timeDelay * 1000)
          try {
            await gameService.gamePlayed(route.params.id, id)
            await gameService.addResults(route.params.id, AppState.account.id, AppState.gameVars.finalTime)
            await gameService.tryTopScore(AppState.gameVars.finalTime)
          } catch (error) {
            Notification.toast(error)
          }
        }
      },
      runGame() {
        const d = new Date()
        document.getElementById('ready-button').classList.add('d-none')
        document.getElementById('game-instruction').classList.remove('d-none')
        AppState.gameVars.firstTime = d.getTime()
        setTimeout(function() {
          // document.getElementById('game-button').classList.remove('d-none')
          state.showButton = true
        }, AppState.currentGame.timeDelay * 1000)
        document.getElementById('game-button').focus()
      },
      players: computed(() => AppState.gamePlayers),
      account: computed(() => AppState.account),
      currentGame: computed(() => AppState.currentGame),
      score: computed(() => AppState.gameVars.finalTime)
    }
  }

}
</script>

<style scoped>
.gamePage {
  height: 70vh;
}

h1{
    user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
}
.gg{
      font-family: 'Nunito', sans-serif;
  font-family: 'Nunito', sans-serif;
  color: #ff9e00;
    text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
}

#game-button:focus{
outline: none;
}

img{
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
}

</style>
