<template>
  <div class="col-lg-3">
    <div class="game-card mb-3 py-3 px-1 mx-1">
      <p><b>{{ win.title }}</b></p>
      <p>Score: {{ win.winnerScore }}ms</p>
      <small>Date: {{ new Date(win.updatedAt).toLocaleString('en', date) }}</small>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    win: { type: Object, required: true }
  },
  setup() {
    return {
      date: {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.game-card{
  background: #5a189a;
  color: #ff9100;
  text-align: center;
    border: 5px solid #3c096c;
    box-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #3c096c inset,
    0 0 .45em #3c096c;
  text-shadow:
    0 0 .125em hsla(0, 0%, 100%, 0.3),
    0 0 .45em #ff9e00;
}
</style>
