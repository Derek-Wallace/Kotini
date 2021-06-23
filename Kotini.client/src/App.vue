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
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
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
  height: 100vh;
}
</style>
