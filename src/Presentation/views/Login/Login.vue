<script setup lang="ts">

import { ref } from 'vue'
import { useLoginStore } from '../../stores/loginStore'
const loginStore = useLoginStore()

const openDialog = ref(false)

function asd(){
  openDialog.value = !openDialog.value
}

</script>
<template>
  <div class="login">
    <div class="card">
      <form action="">
        <h1>Loggin</h1>
        <input v-model="loginStore.user" class="loginIn" type="text" />
        <input v-model="loginStore.password" class="passwordIn" type="password" />
      </form>
      <button class="btn-login" @click="loginStore.authLogin($router)">Login</button>
      <v-btn @click="asd">Click</v-btn>

      <v-dialog max-width="400" v-model="openDialog">
        <v-card>
          <h1>Hello world</h1>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>


<style scoped>
@import './index.css';
</style>