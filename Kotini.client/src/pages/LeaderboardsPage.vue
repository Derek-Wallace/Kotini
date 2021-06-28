<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-10 mx-lg-auto my-5 text-center mx-0">
        <div class="navbar-item">
          LEADERBOARDS
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 mx-auto my-2 border-oj p-lg-5">
        <div class="row">
          <div class="col-12 mx-auto my-2 orange-words text-center played-header">
            GAMES PLAYED
          </div>
        </div>
        <div class="row" v-for="l in leaders" :key="l.id">
          <div class="col-12 d-flex justify-content-between align-items-center orange-words my-3">
            <h4 class="m-0">
              <img :src="l.picture" height="40" /> {{ l.name }}
            </h4>
            <p class="m-0">
              <b>{{ l.gamesPlayed }}</b>
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

export default {
  setup() {
    onMounted(async() => {
      try {
        await leaderboardService.getLeaders()
      } catch (error) {
        Notification.toast(error, 'error')
      }
    })
    return {
      leaders: computed(() => AppState.leaders)
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

</style>
