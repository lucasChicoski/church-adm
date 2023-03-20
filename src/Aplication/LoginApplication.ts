import LoginService from '@/Service/LoginService'

export class LoginApplication {
  loginService: LoginService

  constructor() {
    this.loginService = new LoginService()
  }

  async handleAuth(password: string, user: string) {
    const response = await this.loginService.executeAuth({ password, user })

    return response
  }
}
