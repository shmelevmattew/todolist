import $api from "../Http/index";

export default class AuthService {
        static async login(email, password){
        return $api.post('/Auth/Login', {email, password})
    }

    static async registration(email, password){
        return $api.post('/Auth/Register', {email, password})
    }

    static async logout() {
        return $api.post('/Auth/Logout')
    }

}