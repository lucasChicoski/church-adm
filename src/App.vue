<script setup lang="ts">

import { RouterView } from 'vue-router'
import AppBar from './Presentation/components/AppBar/AppBar.vue'
import { useLoginStore } from './Presentation/stores/loginStore';
const loginStore = useLoginStore()

</script>

<template>

  <AppBar v-if="loginStore.isLogged" />
  <RouterView />
  <footer>Lucas Chicoski dos Santos</footer>
  
</template>


<style>
.AppBar {
  background-color: blue;
  color: white;
}
</style>
