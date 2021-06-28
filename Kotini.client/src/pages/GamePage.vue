<template>
  <div class="gamePage flex-grow-1 d-flex flex-column align-items-center justify-content-center container-fluid">
    <div class="row">
      <div class="col-12 text-center">
        <span v-for="player in players" :key="player.id" class="text-light">Player</span>

        <h1 class="text-primary mt-5">
          Click The Gun!
        </h1>
        <img src="https://static.wikia.nocookie.net/fallout/images/f/fd/FO76_Single_action_revolver.png" width="300" role="button" @click="gamePlayed">
        <h2 id="game-played" class="d-none text-primary">
          You clicked the gun
        </h2>
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
        await gameService.getGamePlayers(route.params.id)
      } catch (error) {
      }
    })
    return {
      gamePlayed() {
        document.getElementById('game-played').classList.remove('d-none')
        console.log(AppState.gamePlayers)
      },
      players: computed(() => AppState.gamePlayers)
    }
  }

}
</script>

<style scoped>
.gamePage {
  height: 70vh;
}

</style>
