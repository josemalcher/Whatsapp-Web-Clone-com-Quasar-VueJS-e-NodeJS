<template>
  <q-page class="container full-height">
    <div>
      <ComversationArea/>
    </div>
    <div class="column" v-if="1 === 1">
      <TopBar :title="'Jose Malcher Jr.'"/>
      <ChatArea/>
      <MessageBar/>
    </div>
    <Empty v-else/>
  </q-page>
</template>

<script>
import Empty            from 'src/components/Empty/Index'
import ComversationArea from 'src/components/ComversationArea/Index';
import TopBar           from 'src/components/TopBar/Index'
import ChatArea         from 'src/components/ChatArea/Index'
import MessageBar       from 'src/components/MessageBar/Index'

import api              from 'src/services/api';
import {notify}         from "src/utils";
import {socket}         from "src/services/socket";

export default {
  name: "RestrictArea",
  data(){
    return {
      users: [],
      newMessages: ""
    }
  },
  components: {
    Empty,
    ComversationArea,
    TopBar,
    ChatArea,
    MessageBar
  },
  created() {
    const receiver = localStorage.getItem('receiver');
    console.log(receiver)
    socket.on(receiver, message => {
      console.log(message)
      const arr = [];
      this.users.forEach(item => {
        if (item.id === message.user_id) {
          item.newMessages = true;
        }
        arr.push(item);
      });
      this.newMessages = message.id;
      this.users = arr;
    })
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
