import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import ActionType from '../../config/Redux/actionType'
import { SET_FORM_LOGIN } from '../../config/Redux/action'


const LoginForm = (props) => {
    const onChangeType = (input,value) => {
        props.sendLogin(input,value)
    }
    return (
        <>
            <section id="services" className="features-area">
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title text-center pb-10">
                                <h3 className="title">Login !</h3>
                                <p className="text">Login untuk masuk ke akun kamu dan melihat semua aktivitas kamu !</p>
                            </div>
                            <div className="col mt-3">
                                <input type="text" onChange={(e) => {onChangeType('user_number',e.target.value)}} className="form-control" placeholder="NIS atau NIP ..."/>
                            </div>
                            <div className="col mt-5">
                                <input type="password" onChange={(e) => {onChangeType('password', e.target.value)}} className="form-control" placeholder="Password ..."/>
                            </div>
                            <div className="col mt-4">
                                <button className="btn btn-info btn-block" onClick={props.loginButtonClick}>Masuk</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        sendLogin: (input,value) => {dispatch(SET_FORM_LOGIN(input,value))}
    }
}

export default connect('',mapDispatchToProps)(LoginForm)