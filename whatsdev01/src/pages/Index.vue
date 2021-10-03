<template>
  <q-page class="row items-center justify-center">
    <div class="container image q-pa-xl">
      <h5>Acesse o chat</h5>
      <q-input
        rounded
        outlined
        v-model="email"
        label="Informe seu email"
        bg-color="white"
        class="q-mb-md"
      ></q-input>
      <q-btn
        :ripple="false"
        color="secondary"
        label="Acessar Chat"
        no-caps
        @click="singIn()"
      ></q-btn>
    </div>
    <q-separator vertical></q-separator>
    <div class="container q-pa-xl">
      <h5>Cadastre-se</h5>
      <q-input
        rounded
        outlined
        v-model="name"
        label="Informe seu Nome"
        bg-color="white"
        class="q-mb-md"
      ></q-input>
      <q-input
        rounded
        outlined
        v-model="emailSegnUp"
        label="Informe seu Email"
        bg-color="white"
        class="q-mb-md"
      ></q-input>
      <q-btn
        :ripple="false"
        color="secondary"
        label="Cadastrar"
        no-caps
        @click="signUp"
      ></q-btn>
    </div>
  </q-page>
</template>

<script>
import {notify} from "src/utils";
import api      from 'src/services/api';
import crypto   from "crypto";

export default ({
  name: 'PageIndex',
  data() {
    return {
      email: '',
      name: '',
      emailSegnUp: ''
    }
  },
  watch:{
    email(){
      if (this.email !== "") {
        this.name = "";
        this.emailSegnUp = "";
      }
    },
    name(){
      if (this.name !== "") {
        this.email = "";
      }
    },
    emailSegnUp(){
      if (this.emailSegnUp !== "") {
        this.email = ""
      }
    }
  },
  methods: {
    async singIn() {
      if (this.email === "") {
        this.fail("Preencha o campo de email");
        return;
      }
      await api
        .get(`/user/${this.email}`)
        .then(response => {
        this.success("Login efetuado com sucesso", response.data.id);
      })
        .catch(error => {
          notify("negative", error.response.data.message);
        })
    },

    async signUp(){
      if (this.emailSegnUp === "" || this.name === "") {
        this.fail("Preencha o campo de E-email e Nome");
        return
      }
      await api
        .post("user",{name: this.name, email: this.emailSegnUp})
        .then(response => {
          this.success("Cadastro efetuado com sucesso!", response.data.id)
        })
        .catch(error => {
          notify("negative", error.response.data.message);
        })
    },

    success(message, id) {
      this.$router.push({path: "chat"})
      notify("positive", message);

      const receiver = crypto
        .createHash("md5")
        .update(`${id}`)
        .digest("hex");

      localStorage.setItem("receiver", receiver);
      localStorage.setItem("myid", id);
    },
    fail(message, id) {
      notify("negative", message);
    }
  }
})
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    color: #444444;
  }

  width: 48%;

  .q-btn,
  .q-input {
    width: 300px;
  }
}

.image {
  background-image: url("../assets/background.png");
  height: 100vh;
  width: 48%;
}
</style>
