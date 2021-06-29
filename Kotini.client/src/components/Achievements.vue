<template>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.picasso === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/picasso.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Picasso
        </p>
        <p class="m-0">
          First profile edit
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Picasso
        </p>
        <p class="m-0">
          First profile edit
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.createdGame === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/vikingbuilder.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Let's get it started
        </p>
        <p class="m-0">
          Create a game
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Let's get it started
        </p>
        <p class="m-0">
          Create a game
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.outOfShell === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/turtle.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Out of your shell
        </p>
        <p class="m-0">
          Join a game
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Out of your shell
        </p>
        <p class="m-0">
          Join a game
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.gettingHorns === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/helmet.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Getting your horns
        </p>
        <p class="m-0">
          Play a game
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Getting your horns
        </p>
        <p class="m-0">
          Play a game
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.findingFeet === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Finding your feet
        </p>
        <p class="m-0">
          Play 10 games
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Finding your feet
        </p>
        <p class="m-0">
          Play 10 games
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.scout === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Scout
        </p>
        <p class="m-0">
          Play 20 games
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Scout
        </p>
        <p class="m-0">
          Play 20 games
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.soldier === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Soldier
        </p>
        <p class="m-0">
          Play 50 games
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Soldier
        </p>
        <p class="m-0">
          Play 50 games
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.raider === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Raider
        </p>
        <p class="m-0">
          Play 100 games
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Raider
        </p>
        <p class="m-0">
          Play 100 games
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.captain === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Captain
        </p>
        <p class="m-0">
          Play 500 games
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Captain
        </p>
        <p class="m-0">
          Play 500 games
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.warlord === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Viking Warlord
        </p>
        <p class="m-0">
          Play 1000 games
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Viking Warlord
        </p>
        <p class="m-0">
          Play 1000 games
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.climbingRanks === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Climbing the ranks
        </p>
        <p class="m-0">
          Get on a leaderboard
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Climbing the ranks
        </p>
        <p class="m-0">
          Get on a leaderboard
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.secondToNone === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Second to none
        </p>
        <p class="m-0">
          Be first on a leaderboard
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Second to none
        </p>
        <p class="m-0">
          Be first on a leaderboard
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.sharpshooter === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Sharpshooter
        </p>
        <p class="m-0">
          Get a time under 300ms
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Sharpshooter
        </p>
        <p class="m-0">
          Get a time under 300ms
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.bitw === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Best in the West
        </p>
        <p class="m-0">
          Get a time under 250ms
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Best in the West
        </p>
        <p class="m-0">
          Get a time under 250ms
        </p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 my-2">
    <div v-if="achievements.completionist === true" class="d-flex m-2 earned p-2 rounded">
      <img src="../assets/img/main-logo-1.png" height="50" width="50" alt="First Edit" />
      <div class="ml-2 orange-words">
        <p class="m-0">
          Completionist
        </p>
        <p class="m-0">
          Earn all achievements
        </p>
      </div>
    </div>
    <div v-else class="d-flex m-2 unearned p-2 rounded">
      <img class="rounded-circle faded" src="../assets/img/Question-mark-grey.jpeg" height="50" width="50" alt="Unearned" />
      <div class="ml-2 unearned-words">
        <p class="m-0">
          Completionist
        </p>
        <p class="m-0">
          Earn all achievements
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account),
      achievements: computed(() => AppState.achievements)
    }
  }
}
</script>

<style scoped>
.orange-words{
  color: #ff9e00;
  font-family: 'Signika Negative', sans-serif;
    text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
}

.unearned-words{
  color: #9D4EDD;
  font-family: 'Signika Negative', sans-serif;
}

.unearned{
border: solid 2px #9D4EDD;
background-color: #240046;
box-shadow:
    0 0 1em 0 #9D4EDD inset,
}

.earned{
border: solid 2px #ff9e00;
background-color: #240046;
box-shadow:
    0 0 1em 0 #ff9e00 inset,
    0 0 1em 0 #ff9e00;
}

.faded{
  opacity: .5;
}
</style>
