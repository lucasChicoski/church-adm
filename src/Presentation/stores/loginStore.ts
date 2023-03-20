import { LoginApplication } from '@/Aplication/LoginApplication'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useLoginStore = defineStore('login', () => {
  const isLogged = ref(false)
  const user = ref('')
  const password = ref('')
  

  //Definição de login [true, false]
  function defineLogged(isLoggedValue: boolean) {
    isLogged.value = isLoggedValue
  }

  //autenticação
  async function authLogin(router: any) {
    const response: any = await new LoginApplication().handleAuth(password.value, user.value)
    if (response.statusCode == 200) {
      user.value = response.data.user
      password.value = response.data.password
      isLogged.value = true
      router.push('/home')
    }
  }

  //Observador
  watch(user, (newState, oldState) => {
  })

  return { isLogged, defineLogged, authLogin, user, password }
})
