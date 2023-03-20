<script setup lang="ts" >
import { useCounterStore } from "../../stores/counter"
const counter = useCounterStore()
</script>

<template>
  <div class="contador-center">
    <h1>Incrementador</h1>
    <button @click="$router.push('/helloworld')">Navegar Aba Helloworld</button>
    <button @click="$router.push('/todo')">Navegar ToDo</button>
    <button @click="counter.increment">Incrementar</button>
    <button @click="counter.decrement">Decrementar</button>
    <h1>{{ counter.count }}</h1>
  </div>
</template>



<style scope>
  .contador-center{
    background-color: beige;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
