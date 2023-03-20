import type { ILogin } from "../DTO/ILogin"

export class UserModel{
    id: number
    user: string
    password: string

    constructor(value: ILogin, id: number){
        this.user = value.user
        this.password = value.password
        this.id = id
    }
    
}