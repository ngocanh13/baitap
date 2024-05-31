import httpClient from "../auth/httpClient"
import { register } from "../register"

export const authService = {
    login(data){
        return httpClient.post('/login', data)
    },
    register(data){
        return httpClient.post('/register', data)
    }
}