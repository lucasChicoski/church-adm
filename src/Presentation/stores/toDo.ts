import { defineStore } from "pinia";
import { computed, ref } from "vue";



export const useTodoStore = defineStore('Todo' , () => {

    const listTodo = ref(Array())
    const todoItem = ref('')

    function cleanTodoList(){
        listTodo.value = []
    }

    function newTodo(newTodo: string){
        listTodo.value.push(newTodo)
        todoItem.value = ''
    }

    return {listTodo, newTodo, todoItem, cleanTodoList}
})