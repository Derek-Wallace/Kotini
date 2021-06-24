<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <h1>Games Played: {{ account.gamesPlayed }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <h1>K-Bucks: {{ account.wallet }}</h1>
    <h1 role="button" @click="logout">
      Logout
    </h1>
    <button @click="showEditForm = !showEditForm">
      edit profile
    </button>
    <form @submit.prevent="editProfile(account.id)" v-if="showEditForm">
      <textarea name="name" rows="1" placeholder="name..." v-model="state.newInfo.name"></textarea>
      <textarea name="picture" rows="1" placeholder="picture..." v-model="state.newInfo.picture"></textarea>
      <button type="submit">
        change
      </button>
    </form>
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

<style scoped>
img {
  max-width: 100px;
}
</style>
