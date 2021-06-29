<template>
  <div class="col-xl-3 m-4 p-3 player rounded-pill d-flex justify-content-between align-items-center">
    <img :src="player.picture" alt="Player Picture" height="80" width="80" class="rounded-circle">
    <span class=" mx-2">{{ player.name.toUpperCase() }}</span>
    <span class="">Games Played: {{ player.gamesPlayed }}</span>
  </div>
</template>

<script>
export default {
  props: { player: { type: Object, required: true } }
}
</script>

<style scoped>
.player-card {
  background-color: #ddd5d5;
  border-radius: 10px;
  padding: 1em 3em;
  margin-top: 20px;
  margin-left: 20px;
}

.player-name {
  font-size: 2em;
}

.player{
  font-size: 1.25em;
  background-color: #240046;
  color: #ff9e00;
  font-family: 'Signika Negative', sans-serif;
  border: #9D4EDD 4px solid;
  user-select: none;

  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;

  box-shadow:
    0 0 1em 0 #9D4EDD inset,
    0 0 1em 0 #9D4EDD;

}

</style>
