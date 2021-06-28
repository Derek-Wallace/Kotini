<template>
  <div class="gamePage flex-grow-1 d-flex flex-column align-items-center justify-content-center container-fluid" v-if="currentGame.id">
    <div class="row" v-if="currentGame.ended === false">
      <div class="col-12 text-center">
        <span v-for="player in players" :key="player.id" class="text-light p-3">{{ player.name }}</span>

        <h1 class="text-primary mt-5">
          Click The Gun!
        </h1>
        <img id="game-button" src="https://static.wikia.nocookie.net/fallout/images/f/fd/FO76_Single_action_revolver.png" width="300" role="button" @click="gamePlayed(account.id)">
        <h2 id="game-played" class="d-none text-primary">
          You clicked the gun
        </h2>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-12">
          <h1 class="text-light">
            Game Over
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { gameService } from '../services/GameService'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()

    onMounted(async() => {
      try {
        await gameService.getGame(route.params.id)
        await gameService.getGamePlayers(route.params.id)
      } catch (error) {
      }
    })
    return {
      async gamePlayed(id) {
        try {
          await gameService.gamePlayed(route.params.id, id)
          document.getElementById('game-button').classList.add('d-none')
        } catch (error) {
        }
        document.getElementById('game-played').classList.remove('d-none')
        console.log(AppState.gamePlayers)
      },
      players: computed(() => AppState.gamePlayers),
      account: computed(() => AppState.account),
      currentGame: computed(() => AppState.currentGame)
    }
  }

}
</script>

<style scoped>
.gamePage {
  height: 70vh;
}

</style>
