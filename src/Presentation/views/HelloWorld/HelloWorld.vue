<script setup lang="ts">
import HelloWorldLucas from '../../components/HelloLucasComponent.vue'
</script>
<template>
  <div>
    <HelloWorldLucas />
    <button @click="$router.push('/')">Navegar Login</button>
    <button @click="$router.push('/home')">Navegar Home</button>
  </div>
</template>


<style>
</style>