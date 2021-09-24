<template>
  <q-page class="container full-height">
    <div>
      <ComversationArea/>
    </div>
    <div class="column" v-if="1 === 3">
    </div>
    <Empty v-else/>
  </q-page>
</template>

<script>
import Empty            from 'src/components/Empty/Index'
import ComversationArea from 'src/components/ComversationArea/Index';

export default {
  name: "RestrictArea",
  components: {
    Empty,
    ComversationArea
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  overflow: hidden;
  min-width: 1200px;
}
</style>
