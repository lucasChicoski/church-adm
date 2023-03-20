
<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '../../stores/toDo';
const todoStore = useTodoStore()
const x = ref([''])
</script>
<template>
    <div class="main-todo">
        <div class="main-todo-actions">
          <input v-model="todoStore.todoItem" type="text" class="input-todo" placeholder="Digite uma Tarefa"/>
          <button @click="todoStore.newTodo(todoStore.todoItem)" class="adicionar-todo">Adicionar Todo</button>
          <button @click="todoStore.cleanTodoList" class="adicionar-todo">Limpar</button>
          <button @click="$router.push('/home')" class="adicionar-todo back">Voltar</button>

        </div>
        <div class="divider-todo" />
        <div class="body-todo">
            <ul v-for="item in todoStore.listTodo" :key="item">
                <li>
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="css" scoped>
@import './index.css'
</style>