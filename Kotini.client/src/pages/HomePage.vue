<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center container-fluid">
    <p class="title display-1">
      K O T I N I
    </p>
    <div class="row">
      <div class="about text-center">
        <div class="session-button" @click="createSession">
          <h1>CREATE SESSION</h1>
        </div>
        <div class="session-button" data-toggle="modal" data-target="#joinModal">
          <h1>JOIN SESSION</h1>
        </div>
      </div>
    </div>
  </div>
  <JoinModal />
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { sessionService } from '../services/SessionService'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    const state = reactive({
      session: computed(() => AppState.session)
    })
    return {
      state,
      account: computed(() => AppState.account),
      async createSession() {
        await sessionService.createSession()
        router.push({ name: 'Session', params: { id: state.session.id } })
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  font-family: 'Signika Negative', sans-serif;
  height: 80vh;
}

h1 {
  font-size: 2.25em;
}

.session-button:hover {
  cursor: pointer;
  background: #ff9e00;
  color: #240046;
  text-shadow: 0;
  transition: 100ms linear;
}

.session-button::after {
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

.session-button:hover::after {
  opacity: 1;
}

.session-button {
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
.title {
  font-family: 'Nunito', sans-serif;
  color: #ff9e00;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
}
</style>
