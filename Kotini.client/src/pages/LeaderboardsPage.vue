<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-10 mx-lg-auto my-5 text-center mx-0">
        <div class="navbar-item">
          LEADERBOARDS
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-around">
      <div class="col-lg-3 mx-3 my-2 border-oj p-lg-5">
        <div class="row">
          <div class="col-12 mx-auto my-2 orange-words text-center played-header">
            GAMES PLAYED
          </div>
        </div>
        <div class="row" v-for="l in leaders" :key="l.id">
          <div class="col-12 d-flex justify-content-between align-items-center orange-words my-3">
            <h4 class="m-0">
              <img :src="l.picture" height="40" width="40" alt="Pic" class="rounded-circle" /> {{ l.name.substring(0,15) }}
            </h4>
            <p class="m-0">
              <b>{{ l.gamesPlayed }}</b>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 mx-3 my-2 border-oj p-lg-5">
        <div class="row">
          <div class="col-12 mx-auto my-2 orange-words text-center played-header">
            GAMES WON
          </div>
        </div>
        <div class="row" v-for="w in winLeaders" :key="w.id">
          <div class="col-12 d-flex justify-content-between align-items-center orange-words my-3">
            <h4 class="m-0">
              <img :src="w.picture" height="40" width="40" alt="Pic" class="rounded-circle" /> {{ w.name }}
            </h4>
            <p class="m-0">
              <b>{{ w.gamesWon }}</b>
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 mx-3 my-2 border-oj p-lg-5">
        <div class="row">
          <div class="col-12 mx-auto my-2 orange-words text-center played-header">
            FASTEST TIME
          </div>
        </div>
        <div class="row" v-for="t in timeLeaders" :key="t.id">
          <div class="col-12 d-flex justify-content-between align-items-center orange-words my-3">
            <h4 class="m-0">
              <img :src="t.picture" height="40" width="40" alt="Pic" class="rounded-circle" /> {{ t.name }}
            </h4>
            <p class="m-0">
              <b>{{ t.fastestScore }}ms</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { leaderboardService } from '../services/LeaderboardService'
import { accountService } from '../services/AccountService'

export default {
  setup() {
    onMounted(async() => {
      try {
        await leaderboardService.getLeaders()
        await leaderboardService.getTimeLeaders()
        await leaderboardService.getWinLeaders()
        await accountService.clearSession(AppState.account.id)
        AppState.currentGame = {}
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    return {
      leaders: computed(() => AppState.leaders),
      timeLeaders: computed(() => AppState.timeLeaders),
      winLeaders: computed(() => AppState.winLeaders)
    }
  }

}
</script>

<style scoped>
.navbar-item {
  font-family: 'Nunito', sans-serif;
  color: #ff9e00;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
    font-size: 5vh;
}

.played-header {

  font-size: 4vh;
}

.orange-words {
  font-family: 'Nunito', sans-serif;
  color: #ff9e00;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
}

.border-oj {
border: #ff9e00 solid 2px;
box-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
}

@keyframes border-pulsate {
    0%   { border-color: #ff9e00; }
    50% { border-color: rgba(0, 255, 255, 0); }
    100%   { border-color: #ff9e00; }
}

.border-oj {
    display: block;
    margin: 5px auto;
    border: 5px solid #ff9e00;
    animation: border-pulsate 5s infinite;
}

</style>
