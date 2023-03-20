import type { ILogin } from "@/Domain/DTO/ILogin"


export default interface ILoginRepository{
    authLogin(values: ILogin): Promise<any>
    resetPassword(user: string) : Promise<string>
}