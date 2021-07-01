<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 mx-auto my-5 text-center">
        <h1 class="navbar-item">
          How to Play
        </h1>
        <p class="navbar-item">
          When you find out let us know
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import { accountService } from '../services/AccountService'
import { AppState } from '../AppState'
export default {
  setup() {
    onMounted(async() => {
      try {
        await accountService.clearSession(AppState.account.id)
        AppState.currentGame = {}
      } catch (error) {
        Notification.toast(error)
      }
      return {
      }
    })
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
}
</style>
