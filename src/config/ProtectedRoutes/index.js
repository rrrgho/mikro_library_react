import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Auth from '../Auth'

const ProtectedRoutes = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={
            (props) => {
                if(Auth.isAuthenticated()){
                    console.log(Auth.isAuthenticated())
                    return <Component {...props} />
                }
                else{
                    return <Redirect to={
                        {
                            pathname:'/login',
                            state:{
                                from: props.location
                            }
                        }
                    } />
                }
            }
        }>

        </Route>
    )
}

export default ProtectedRoutes