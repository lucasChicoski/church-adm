import { createRouter, createWebHistory } from 'vue-router'
import Contador from '../Presentation/views/Contador/Contador.vue'
import HelloWorld from '../Presentation/views/HelloWorld/HelloWorld.vue'
import Login from '../Presentation/views/Login/Login.vue'
import Redirect from '../Presentation/views/Redirecionador/Redirecionador.vue'
import ToDo from '../Presentation/views/ToDo/ToDo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'redirect',
      component: Redirect
    },
    {
      path: '/home',
      name: 'home',
      component: Contador
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/todo',
      name: 'todo',
      component: ToDo
    }
  ]
})

export default router
