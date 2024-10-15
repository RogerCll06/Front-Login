import { login } from "../service/auth.service"

export const useLogin = async() => {
 const {data} = await login()
}
