<template>
  <q-page class="container full-height">
    <div>
      <ComversationArea :users="users" @selectedItem="setCurrentItem"/>
    </div>
    <div class="column" v-if="selectedItem">
      <TopBar :title="nameConversation"/>
      <ChatArea/>
      <MessageBar/>
    </div>
    <Empty v-else/>
  </q-page>
</template>

<script>
import Empty from 'src/components/Empty/Index'
import ComversationArea from 'src/components/ComversationArea/Index';
import TopBar from 'src/components/TopBar/Index'
import ChatArea from 'src/components/ChatArea/Index'
import MessageBar from 'src/components/MessageBar/Index'

import api from 'src/services/api';
import {notify} from "src/utils";
import {socket} from "src/services/socket";

export default {
  name: "RestrictArea",
  data() {
    return {
      users: [],
      newMessages: "",
      selectedItem: null,
      nameConversation: ""
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
    });
  },
  async mounted() {
    await api
      .get('users')
      .then(response => {
        this.users = response.data;
      })
      .catch(() => {
        notify('negative', 'Falha ao listar usuários');
      })
  },
  methods: {
    async setCurrentItem({id, email}) {
      //console.log('clicou', id, email)
      this.selectedItem = id

      await api.get(`user/${email}`)
        .then((response) => {
          this.nameConversation = response.data.name;
        })
        .catch(() => {
          this.nameConversation = "Novo Usuário"
        })

    }
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
