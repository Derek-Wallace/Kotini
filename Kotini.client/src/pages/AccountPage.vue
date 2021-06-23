<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <h1 role="button" @click="logout">
      Logout
    </h1>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'

export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account),
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
