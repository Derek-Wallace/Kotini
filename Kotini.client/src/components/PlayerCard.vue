<template>
  <div class="player-card shadow">
    <p class="player-name">
      {{ player.name }}
    </p>
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

</style>
