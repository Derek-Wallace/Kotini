<template>
  <div class="modal fade"
       id="editModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="editModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content bg-dark-theme modal-shadow">
        <div class="ml-auto float-right p-2">
          <i class="fas fa-times close-button fs-3 t-shadow" role="button" data-dismiss="modal"></i>
        </div>
        <div class="modal-body">
          <form class="form-group" @submit.prevent="editProfile(account.id)">
            <div class="mb-4">
              <label class="form-label mb-0 t-shadow">Player Name</label>
              <input class="form-control input-bg in-text" name="name" placeholder="name..." v-model="state.newInfo.name">
            </div>
            <div class="mb-0">
              <label class="form-label mb-0 t-shadow">Player Picture</label>
              <input class="form-control input-bg in-text" name="picture" placeholder="picture..." v-model="state.newInfo.picture">
            </div>
            <div class="ml-auto">
              <button class="edit-button mt-3 float-right modal-button modal-submit" type="submit">
                UPDATE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { accountService } from '../services/AccountService'
import { computed } from '@vue/runtime-core'
import $ from 'jquery'

export default {
  setup() {
    const state = reactive({
      newInfo: { name: AppState.account.name, picture: AppState.account.picture }
    })

    return {
      state,
      account: computed(() => AppState.account),
      async editProfile(id) {
        await accountService.editProfile(id, state.newInfo)
        $('#editModal').modal('hide')

        state.newInfo = { name: AppState.account.name, picture: AppState.account.picture }
      }
    }
  }

}
</script>

<style scoped>
.modal-shadow{
  border: .1vh solid #9d4edd;
    box-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #9d4edd;
}
.in-text{
  color: #9d4edd;
}
input {
 color: #9d4edd;
}
::placeholder {
  color: #9d4edd;
}

.input-bg {
  background-color: #3c096c;
  border: none;
}
.modal-submit {
  background: none;
}

.bg-dark-theme {
  background-color:#240046;
}

.modal-submit {
  background: none;
}

.close-button {
  font-size: 3vh;
  color: #ff9e00;
}

.modal-button {
  user-select: none;
  margin-top: 30px;
  font-size: 0.75rem;
  color: #ff9e00;
  font-family: 'Signika Negative', sans-serif;
  border: #ff9e00 4px solid;
  padding: 1em 3em 1em 3em;
  border-radius: 60px;

  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;

  box-shadow:
    0 0 1em 0 #ff9e00 inset,
    0 0 1em 0 #ff9e00;

  position: relative;
}

.modal-button:hover {
  cursor: pointer;
  background: #ff9e00;
  color: #240046;
  text-shadow: 0;
  transition: 100ms linear;
}

.modal-button::after {
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

.modal-button:hover::after {
  opacity: 1;
}

.modal-body {
  color: #ff9100;
  font-size: 1.1em;
}
.t-shadow{
    text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
}

</style>
