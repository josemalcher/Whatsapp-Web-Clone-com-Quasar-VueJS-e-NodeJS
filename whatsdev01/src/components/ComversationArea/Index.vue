<template>
  <div class="conversation-area">
    <Header />
    <div class="card-area"></div>
  </div>
</template>

<script>
import Header from "components/ComversationArea/components/Header";

export default {
  name: "ConversationArea",
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.conversation-area {
  height: 100vh;
  width: 410px;
  background-color: #FFF;
}
</style>
