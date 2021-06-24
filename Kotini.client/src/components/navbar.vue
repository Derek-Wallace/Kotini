<template>
  <div class="nav-square" @click="toggleMobile">
    <div class="line line-1"></div>
    <div class="line line-2"></div>
    <div class="line line-3"></div>
  </div>
  <div id="mobile-nav" class="mt-5 pt-2 pb-2 pl-2 nav-mobile fade-out">
    <h1 class="navbar-item-m">
      HOME
    </h1>
    <h1 class="navbar-item-m">
      ACCOUNT
    </h1>
    <h1 class="navbar-item-m">
      LEADERBOARDS
    </h1>
    <h1 class="navbar-item-m">
      HELP
    </h1>
  </div>
  <div class="navbar-display d-flex">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <router-link :to="{name: 'Home'}">
            <span class="navbar-item">HOME</span>
          </router-link>
          <router-link :to="{name: 'Account'}">
            <span class="navbar-item">ACCOUNT</span>
          </router-link>
          <span class="navbar-item">LEADERBOARDS</span>
          <span class="navbar-item">HELP</span>
        </div>
        <div class="col-6 d-flex justify-content-end" v-if="account.id">
          <span class="navbar-item">{{ account.name.toUpperCase() }}</span>
          <span class="navbar-item" @click="logout" role="button">LOGOUT</span>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar-border"></div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },
      toggleMobile() {
        document.getElementById('mobile-nav').classList.toggle('fade-out')
      }
    }
  }
}
</script>

<style scoped>
.nav-mobile {
  position: absolute;
  top: 50px;
  left: 20px;
  transition: 100ms linear;
  z-index: 10;
  background: #3c096c;
  border: #ff9e00 2px solid;
  box-shadow: 0 0 3em 0 #ff9e00;
}
.navbar-display{
  position: fixed;
  padding: 30px;
  background: rgb(36,0,70);
  background: linear-gradient(174deg, rgba(36,0,70,1) 38%, rgba(123,44,191,1) 100%);
  position: relative;
}

.navbar-border {
  border: #ff9e00 2px solid;
  box-shadow: 0 0 3em 0 #ff9e00;
}

.navbar-item {
  margin-right: 20px;
  font-family: 'Nunito', sans-serif;
  color: #ff9e00;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
}

.navbar-item-m {
  margin-right: 20px;
  font-family: 'Nunito', sans-serif;
  color: #ff9e00;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
  font-size: 1.25em;
  z-index: 20;
}

.nav-square {
  border: 4px solid #ff9e00;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 10px;
  box-shadow:
    0 0 0.25em 0 #ff9e00 inset,
    0 0 0.25em 0 #ff9e00;
  cursor: pointer;
}

.line {
  width: 15px;
  border: 2px solid #ff9e00;
  position: absolute;
  border-radius: 10px;
  box-shadow:
    0 0 0.25em 0 #ff9e00 inset,
    0 0 0.25em 0 #ff9e00;
}

.line-1 {
  top: 6px;
  left: 8px;
}

.line-2 {
  top: 14px;
  left: 8px;
}

.line-3 {
  top: 22px;
  left: 8px;
}

.fade-out {
  opacity: 0;
  transition: 100ms linear;
}

@media only screen and (max-width: 900px) {
  .navbar-item, .navbar-display, .navbar-border {
    display: none;
    background: none;
    z-index: -10;
  }
}

@media only screen and (min-width: 900px) {
  .navbar-item-m, .nav-mobile, .nav-square {
    display: none;
    background: none;
    z-index: -10;
  }
}
</style>
