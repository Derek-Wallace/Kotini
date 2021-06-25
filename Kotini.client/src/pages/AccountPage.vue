<template>
  <div v-if="account.name" class="container">
    <div class="row text-center my-4">
      <div class="col-12 about">
        <h1>WELCOME {{ account.name.toUpperCase() }}</h1>
      </div>
    </div>
    <div class="row my-4">
      <div class="col-md-3 about text-center">
        <img class="rounded" :src="account.picture" alt="" />
        <p class="name">
          {{ account.name.toUpperCase() }}
        </p>
      </div>
      <div class="col-md-3 d-flex align-items-center">
        <div class="about text-center">
          <h3>GAMES PLAYED: {{ account.gamesPlayed }}</h3>
          <h3>K-BUCKS: {{ account.wallet }}</h3>
        </div>
      </div>
      <div class="col-md-3 ml-auto">
        <button class="edit-button" @click="showEditForm = !showEditForm">
          EDIT PROFILE
        </button>
        <form @submit.prevent="editProfile(account.id)" v-if="showEditForm">
          <textarea name="name" rows="1" placeholder="name..." v-model="state.newInfo.name"></textarea>
          <textarea name="picture" rows="1" placeholder="picture..." v-model="state.newInfo.picture"></textarea>
          <button class="edit-button" type="submit">
            UPDATE
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
import { accountService } from '../services/AccountService'

export default {
  name: 'Account',
  setup() {
    const state = reactive({
      account: computed(() => AppState.account),
      newInfo: {}
    })
    const showEditForm = ref(false)
    return {
      state,
      showEditForm,
      account: computed(() => AppState.account),
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      },
      async editProfile(id) {
        accountService.editProfile(id, state.newInfo)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-button {
  font-family: 'Nunito', sans-serif;
  color: #ff9e00;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
  font-size: 1.25em;
  background: none;
  border: none;

}

.about {
  h3, h1 {
    font-family: 'Nunito', sans-serif;

  color: #ff9e00;
   text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
  }

.name {
    font-family: 'Nunito', sans-serif;
  font-family: 'Nunito', sans-serif;

  color: #ff9e00;
  font-size: 20px;
}
}

img {
  height: 200px;
  max-width: 300px;
}
</style>
