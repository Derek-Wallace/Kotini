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
</style>
