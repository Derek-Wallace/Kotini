<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-10 mx-auto my-5 text-center">
        <h1 class="navbar-item">
          How to Play
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-10 mx-auto navbar-item">
        <h2>Editing your account</h2>
        <p class="mb-5">
          Now that you have logged in you can go to your account page and edit your profile to establish your identity. You can change your name and profile picture to give it your own personal flare!
        </p>
        <h2>Playing the Game</h2>
        <p class="mb-5">
          From the home page you can create a session to make a private lobby for you and your friends to join. The session key is at the top of the page and can be clicked to quickly copy it to send to your friends. If you are receiving a session key simply click join session and enter the key you were sent. Once everyone has joined the host will click start game and everyone will be taken to their personal game. Each game is played seperatly. when the ready button is pushed it will only start the game for you and you will try for the best result. once everyone has played the game and gotten a result the game will end the winner will be shown. everyone clicks confirm and will be brought back to the lobby to play again!
        </p>
        <h2>Checking progress</h2>
        <p>Now that you have played some games check out your account page to see your stats, win history, and achievements! You can also check the leaderboard to see if you are the best of the best!</p>
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
