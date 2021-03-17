import {reactLocalStorage} from 'reactjs-localstorage';

class Auth {
    constructor(){
        let token = reactLocalStorage.getObject('auth');
        this.authenticated = token.token ?? false;
    }

    login(){
        let token = reactLocalStorage.getObject('auth');
        this.authenticated = token.token;
    }

    logout(){
        this.authenticated = false
        reactLocalStorage.clear()
        setTimeout(() => {
            document.location.href = window.location.origin+'/login'
        },200)
    }

    isAuthenticated(){
        return this.authenticated
    }
}

export default new Auth()