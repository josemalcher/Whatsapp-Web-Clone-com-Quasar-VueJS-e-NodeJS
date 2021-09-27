<template>
  <div class="chat-area">
    <div class="image full-width full-height">
      <h5>Mensagens</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatArea",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.chat-area {
  height: calc(100vh - 59px - 62px);
  min-width: 800px;
  width: calc(100vw - 410px);
  background-color: $grey-background;
}
.image {
  background-image: url("../../assets/background.png");
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
}
</style>
