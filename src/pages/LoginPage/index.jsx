import React from 'react'
import { connect } from 'react-redux'
import { reactLocalStorage } from 'reactjs-localstorage'
import LoginForm from '../../components/LoginForm'
import Auth from '../../config/Auth'
import ActionType from '../../config/Redux/actionType'
import { POST } from '../../config/Service/Axios'

const LoginPage = (props) => {
    if(Auth.isAuthenticated()){
        props.history.push('/books')
    }
    const sendLogin = async () => { 
        const data = {
            user_number : props.loginState.user_number,
            password : props.loginState.password
        } 
        let send = await POST('login',data)
        if(send.data.error == false){
            reactLocalStorage.setObject('auth', {'token': send.data.data.token, 'auth_id':send.data.data.id, 'auth_user_number':send.data.data.user_number, 'auth_name' : send.data.data.name, 'auth_level' : send.data.data.level});
            Auth.login()
            document.location.href= window.location.origin
        }
        else
            alert(send.data.message)
    }
    return (
        <>
            <LoginForm title={props.loginState.user_number} loginButtonClick={() => {sendLogin()}}/>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        loginState : state.loginReducer.form,
        initialState : state.initialReducer
    }
}
export default connect(mapStateToProps)(LoginPage)