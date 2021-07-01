<template>
  <div class="container-fluid" v-if="session.id">
    <div class="row">
      <div class="col-lg-12 mt-4 text-break session-title">
        <span class="session-title d-flex justify-content-center">
          Your Session: <p class="session-key ml-3" role="button" title="copy session key" @click="copySessionId()">{{ session.sessionKey }}</p>
          <input type="hidden" id="sessionId" :value="session.sessionKey">
        </span>
      </div>
      <div class="col-lg-12" v-if="(account.id === session.creatorId) && (players.length) > 1">
        <div class="start-button text-center ml-5 mr-5" @click="createGame(session.sessionKey)">
          <h1>START GAME</h1>
        </div>
      </div><div class="col-lg-12" v-if="(account.id === session.creatorId) && (players.length) < 2">
        <div class="start-button text-center ml-5 mr-5">
          <h1>NEED MORE PLAYERS</h1>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <PlayerCard v-for="player in players" :key="player" :player="player" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { sessionService } from '../services/SessionService'
import { gameService } from '../services/GameService'
import { useRoute, useRouter } from 'vue-router'
import { SocketHandler } from '../utils/SocketHandler'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const socketHandler = new SocketHandler()
    watchEffect(async() => {
      AppState.lobbyPlayers = []
      if (AppState.currentGame.id && !AppState.currentGame.ended) {
        router.push({ name: 'Game', params: { id: AppState.currentGame.id } })
      }
      try {
        await sessionService.joinSession(route.params.id)
        await sessionService.getLobbyPlayers(route.params.id)
      } catch (error) {
        Notification.toast(error)
      }
    })
    onMounted(async() => {
      try {
        await sessionService.getSession(route.params.id)
      } catch (error) {
        Notification.toast(error)
      }
      socketHandler.emit('join', route.params.id)
    })
    const state = reactive({
      session: computed(() => AppState.session)
    })
    return {
      state,
      players: computed(() => AppState.lobbyPlayers),
      account: computed(() => AppState.account),
      session: computed(() => AppState.session),
      route: route.params.id,
      async createGame(sid) {
        await gameService.createGame(sid)
      },
      copySessionId() {
        console.log('clikced')
        const copyText = document.getElementById('sessionId')
        copyText.setAttribute('type', 'text')
        copyText.select()

        document.execCommand('copy')
        copyText.setAttribute('type', 'hidden')
        window.getSelection().removeAllRanges()
        Notification.toast('COPIED', 'success')
      }
    }
  }
}
</script>

<style scoped>
.session-title {
  font-family: 'Signika Negative', sans-serif;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
  color: #ff9e00;
}

.start-button:hover {
  cursor: pointer;
  background: #ff9e00;
  color: #240046;
  text-shadow: 0;
  transition: 100ms linear;
}

.start-button::after {
  border-radius: 60px;
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 2em 0.5em #ff9e00;
  opacity: 0;
  transition: 100ms linear;
}

.start-button:hover::after {
  opacity: 1;
}

.start-button {
  margin-top: 30px;
  font-size: 0.75rem;
  color: #ff9e00;
  font-family: 'Signika Negative', sans-serif;
  border: #ff9e00 4px solid;
  padding: 1em 3em 0.35em 3em;
  border-radius: 60px;
  user-select: none;

  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;

  box-shadow:
    0 0 1em 0 #ff9e00 inset,
    0 0 1em 0 #ff9e00;

  position: relative;
}

.session-title {
  font-size: 3rem;
  font-family: 'Signika Negative', sans-serif;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
  color: #ff9e00;
}
.session-key{
  transition: all .2s ease;
}
.session-key:hover {
  transform: scale(1.05);
}

</style>
