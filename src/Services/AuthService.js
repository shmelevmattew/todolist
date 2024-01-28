import $api from "../Http/index";

export default class AuthService {
    static async login(email, password){
    return $api.post('/Login', {email, password})
}

static async registration(email, password){
    return $api.post('/Register', {email, password})
}

static async logout() {
    return $api.post('/logout')
}

}