<template>
  <div class="appBar">AppBar {{ useLogin.user }}</div>
  <br />
  <br />
</template>

<script setup lang="ts">
import { useLoginStore } from "../../stores/loginStore";

const useLogin = useLoginStore()

</script>

<style>
@import './index.css';
</style>