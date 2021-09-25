<template>
  <q-page class="container full-height">
    <div>
      <ComversationArea/>
    </div>
    <div class="column" v-if="1 === 1">
      <TopBar :title="'Jose Malcher Jr.'"/>
    </div>
    <Empty v-else/>
  </q-page>
</template>

<script>
import Empty            from 'src/components/Empty/Index'
import ComversationArea from 'src/components/ComversationArea/Index';
import TopBar           from 'src/components/TopBar/Index'


export default {
  name: "RestrictArea",
  components: {
    Empty,
    ComversationArea,
    TopBar
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
