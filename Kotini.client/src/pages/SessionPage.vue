<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 text-center mt-4">
        <h1>Your Session</h1>
      </div>
      <div class="col-lg-6">
        <PlayerCard v-for="player in players" :key="player" :player="player" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { sessionService } from '../services/SessionService'
import { useRoute } from 'vue-router'
import { SocketHandler } from '../utils/SocketHandler'
export default {
  setup() {
    const route = useRoute()
    const socketHandler = new SocketHandler()
    watchEffect(async() => {
      try {
        await sessionService.joinSession(route.params.id)
        await sessionService.getLobbyPlayers(route.params.id)
      } catch (error) {
        Notification.toast(error)
      }
    })
    onMounted(() => {
      socketHandler.emit('join', route.params.id)
    })
    return {
      players: computed(() => AppState.lobbyPlayers)
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Signika Negative', sans-serif;
  color: #ff9e00;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
}

</style>
