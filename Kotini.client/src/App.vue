<template>
  <div class="window flex-grow-1">
    <header>
      <Navbar v-if="user.isAuthenticated" />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { computed, watchEffect } from 'vue'
import { AppState } from './AppState'
import { achievementsService } from './services/AchievementsService'
export default {
  name: 'App',
  setup() {
    watchEffect(async() => {
      if (AppState.account.id) {
        await achievementsService.getAchievements()
      }
    })
    return {
      user: computed(() => AppState.user),
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.window {
  background: rgb(36,0,70);
  background: linear-gradient(0deg, rgba(36,0,70,1) 0%, rgba(60,9,108,1) 100%);
}

::-webkit-scrollbar {
    width: 12px;
    background-color: #7b2cbf;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #7b2cbf;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #7b2cbf;
    background-color: #ff9e00;
}
</style>
