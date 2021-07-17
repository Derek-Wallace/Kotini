<template>
  <div class="overflow-auto chat-box mt-5" id="text-box">
    <div v-for="message in messages" :key="message.id" class="text-light text-break">
      <div v-if="message.botMessage == true" class="bot-message">
        <img :src="message.creator.picture" alt="" class="profile-pic">
        <small class="name-text"><b>{{ message.creator.name.toUpperCase() }}'S BOT</b></small>
        <p><b>{{ message.message }}</b></p>
      </div>
      <div v-else-if="account.id == message.creator.id" class="user-message ml-auto">
        <img :src="message.creator.picture" alt="" class="user-profile-pic">
        <small class="name-text"><b>{{ message.creator.name.toUpperCase() }}</b></small>
        <p><b>{{ message.message }}</b></p>
      </div>
      <div v-else class="other-message">
        <img :src="message.creator.picture" alt="" class="profile-pic">
        <small class="name-text"><b>{{ message.creator.name.toUpperCase() }}</b></small>
        <p><b>{{ message.message }}</b></p>
      </div>
    </div>
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
import { botService } from '../services/BotService'
import { AppState } from '../AppState'
import { onMounted } from '@vue/runtime-core'
export default {
  setup() {
    onMounted(async() => {
      await botService.getKey()
      await messageService.getMessages(AppState.session.sessionKey)
    })
    const state = reactive({
      message: null
    })
    return {
      state,
      messages: computed(() => AppState.messages),
      account: computed(() => AppState.account),
      async sendMessage(event) {
        await messageService.sendMessage(state.message, AppState.session.sessionKey)
        state.message = null
      }
    }
  }

}
</script>

<style>

.profile-pic {
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: -60px;
  position: absolute;
}

.user-profile-pic {
  border: 1px solid black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 50px;
  position: absolute;
}

.user-message {
  background-color: #ffe1b1;
  color: #5A189A;
  border-radius: 50px;
  padding: 20px 70px 10px 30px;
  margin: 10px;
  font-size: 0.9em;
  position: relative;
  text-align: right;
  width:fit-content;
}
.user-message>.name-text{
  color: #5A189A;
}
.other-message {
  background-color: #8840d1;
  color: #fff;
  border-radius: 50px;
  padding: 20px 30px 10px 70px;
  margin: 10px;
  font-size: 0.9em;
  position: relative;
  width:fit-content;
}
.other-message>.name-text{
  color: white;
}
.bot-message {
  background-color: #5b1f97;
  color: #FF9E00;
  border-radius: 50px;
  padding: 20px 30px 10px 70px;
  margin: 10px;
  font-size: 0.9em;
  position: relative;
  width:fit-content;
}

.bot-message>.name-text{
  color: #FF9E00;
}

.chat-box {
  height: 50vh;
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
  margin-bottom: 60px;
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
    height: 40vh;
    width: 95vw;
  }
}

</style>
