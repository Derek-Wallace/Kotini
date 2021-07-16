<template>
  <div class="overflow-auto chat-box mt-5" id="text-box">
    <p v-for="message in messages" :key="message.id" class="text-light text-break">
      {{ message.creator.name }}: {{ message.message }}
    </p>
  </div>
  <div class="chat-input">
    <form @submit.prevent="sendMessage">
      <input class="input-style" type="text" placeholder="New Message..." v-model="state.message" maxlength="50">
      <input class="chat-submit" type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import { reactive, computed } from '@vue/reactivity'
import { messageService } from '../services/MessageService'
import { AppState } from '../AppState'
import { onMounted } from '@vue/runtime-core'
export default {
  setup() {
    onMounted(async() => {
      await messageService.getMessages(AppState.session.sessionKey)
    })
    const state = reactive({
      message: null
    })
    return {
      state,
      messages: computed(() => AppState.messages),
      async sendMessage(event) {
        await messageService.sendMessage(state.message, AppState.session.sessionKey)
        state.message = null
      }
    }
  }

}
</script>

<style>
.chat-box {
  height: 20vh;
  width: 40vw;
  margin: auto;
  background-color: #9d4edd;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0 0 1em 0 #7b2cbf;
  padding: 10px;
}

.chat-input {
  padding-top: 5px;
  height: 6vh;
  width: 40vw;
  margin: auto;
  background-color: #9d4edd;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0 0 1em 0 #7b2cbf;
  padding-left: 10px;
  border-top: 5px solid #ff9e00;
}

.chat-submit {
  background: none;
  color: white;
  border: none;
  box-shadow: none;
}

.input-style {
  background: none;
  border: none;
  box-shadow: none;
  color: white;
  user-select: none;
  width: 85%;
  outline: none;
}

.input-style::placeholder {
  color: white;
}
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}

@media only screen and (max-width: 900px) {
  .chat-input {
    height: 6vh;
    width: 95vw;
  }
  .chat-box {
    height: 20vh;
    width: 95vw;
  }
}

</style>
