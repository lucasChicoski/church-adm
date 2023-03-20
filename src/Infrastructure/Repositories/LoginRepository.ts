import type { ILogin } from "@/Domain/DTO/ILogin";
import type ILoginRepository from "../Interfaces/ILoginRepository";

const USER = 'lucas'
const PASSWORD = '1234'

export default class LoginRepository implements ILoginRepository{
   async authLogin(value: ILogin): Promise<any> {

        const response  = await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('chegou', value)
                //função do banco de dados
                if(value.user == USER && value.password == PASSWORD){
                    const myReturn = {
                        data:{
                            id: 15,
                            user: value.user,
                            password: value.password,
                        },
                        code: 200,
                        message: 'Login efetuado com sucesso !'
                    }
                    resolve(myReturn) 
                }else{
                    const myReturn = {
                        code: 404,
                        message: 'Usuário não encontrado !'
                    }
                    resolve(myReturn)
                }
            }, 500);
        })
        return response
    }
    resetPassword(user: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
}