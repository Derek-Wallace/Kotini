<template>
  <div class="window flex-grow-1 d-flex flex-column align-items-center justify-content-center container-fluid">
    <div class="row">
      <div class="col-12">
        <img src="../assets/img/viking-outline-glow.png" alt="" width="150">
        <div class="login-button" @click="login">
          <h1>LOGIN</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pt-5">
        <div id="about-div" class="about-div text-center pt-5" @click="toggleAbout">
          <h2>...</h2>
        </div>
      </div>
      <div id="about-text" class="col-lg-12 about-text hidden">
        <p>About Lorem</p>
      </div>
    </div>
  </div>
</template>

<script>
import { watchEffect } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  setup() {
    watchEffect(async() => {
      if (AppState.user.isAuthenticated) {
        router.push({ name: 'Home' })
      }
    })
    const router = useRouter()
    return {
      toggleAbout() {
        document.getElementById('about-text').classList.toggle('hidden')
      },
      async login() {
        await AuthService.loginWithPopup()
        router.push({ name: 'Home' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.window {
  background: rgb(36,0,70);
  background: linear-gradient(0deg, rgba(36,0,70,1) 0%, rgba(60,9,108,1) 100%);
  height: 100vh;
}

h1 {
  font-size: 2.25em;
}

.login-button {
  margin-top: 30px;
  font-size: 0.75rem;
  color: #ff9e00;
  font-family: 'Signika Negative', sans-serif;
  border: #ff9e00 4px solid;
  padding: 1em 3em 0.35em 3em;
  border-radius: 60px;

  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;

  box-shadow:
    0 0 1em 0 #ff9e00 inset,
    0 0 1em 0 #ff9e00;

  position: relative;
}

.login-button:hover {
  cursor: pointer;
  background: #ff9e00;
  color: #240046;
  text-shadow: 0;
  transition: 100ms linear;
}

.login-button::after {
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

.login-button:hover::after {
  opacity: 1;
}

.show-about {
  position: absolute;
  bottom: 0;
  right: auto;
  color: var(--primary);
}

.about-div {
  color: #ff9e00;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.2),
    0 0 .25em #ff9e00;
    cursor: pointer;
}

.about-text {
  text-align: center;
  color: #ff9e00;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.2),
    0 0 .25em #ff9e00;
}

.hidden {
  transition: 1000ms linear;
  display: none;
}

</style>
