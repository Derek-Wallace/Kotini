<template>
  <div class="modal fade"
       id="joinModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="joinModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content bg-dark">
        <div class="modal-body p-5 text-center">
          <h5 class="modal-title mb-3" id="joinModalLabel">
            Session ID
          </h5>
          <form @submit.prevent="joinSession">
            <label for="sessionInput" class="sr-only">Session ID</label>
            <input type="text" name="sessionInput" placeholder="ID" v-model="state.session">
            <div class="mt-5">
              <span class="modal-button mr-2" data-dismiss="modal" role="button">Cancel</span>
              <input class="modal-button ml-2 modal-submit" role="button" type="submit" placeholder="Join">
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { sessionService } from '../services/SessionService'
import $ from 'jquery'
import { useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { achievementsService } from '../services/AchievementsService'
import Notification from '../utils/Notification'

export default {
  setup() {
    const router = useRouter()
    const state = reactive({
      session: null
    })
    return {
      state,
      async joinSession(event) {
        if (AppState.achievements.outOfShell === false) {
          AppState.achievements.outOfShell = true
          Notification.toast('Out of your shell achievement earned', 'success', 'https://marypd2010.files.wordpress.com/2016/08/ktno5kkjc.png')
          await achievementsService.updateAchievements(AppState.achievements, AppState.account.id)
        }
        await sessionService.joinSession(state.session)
        $('#joinModal').modal('hide')
        event.target.reset()
        router.push({ name: 'Session', params: { id: state.session } })
      }
    }
  }

}
</script>

<style scoped>
.modal-submit {
  background: none;
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
  color: #ff9e00;
}

</style>
