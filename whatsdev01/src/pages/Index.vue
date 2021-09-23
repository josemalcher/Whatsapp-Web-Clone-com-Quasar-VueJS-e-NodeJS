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
      ></q-btn>
    </div>
  </q-page>
</template>

<script>

export default ({
  name: 'PageIndex',
  data() {
    return {
      email: '',
      name: '',
      emailSegnUp: ''
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
