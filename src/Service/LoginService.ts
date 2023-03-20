import type { ILogin } from '@/Domain/DTO/ILogin'
import { UserModel } from '@/Domain/Models/UserModel'

import LoginRepository from '@/Infrastructure/Repositories/LoginRepository'

export default class LoginService {
  loginRepository: LoginRepository
  constructor() {
    this.loginRepository = new LoginRepository()
  }

  async executeAuth(value: ILogin) {
    const response = await this.loginRepository.authLogin({
      user: value.user,
      password: value.password
    })

    if (response.code == 200) {
      const user: UserModel = new UserModel(
        { password: response.data.password, user: response.data.user },
        response.data.id
      )

      return { data: user, message: response.message, statusCode: response.code }
    }

    return { message: response.message, statusCode: response.code }
  }
}
