import React, {useEffect,useState} from 'react'
import Profile from '../../components/Profile'
import { reactLocalStorage } from 'reactjs-localstorage'
import Bronze from '../../assets/images/bronze.png'
import Gold from '../../assets/images/Gold.png'
import Silver from '../../assets/images/silver.png'
import Platinum from '../../assets/images/platinum.png'

const ProfilePage = (props) => {
    const [authdata,setAuthdata] = useState()
    const [gameLevel,setGameLevel] = useState()
    const getAuth =  () => {
        let authLocalStorage = reactLocalStorage.getObject('auth');
        setAuthdata(authLocalStorage)
    }
    const getLevel = () => {
        if(authdata){
            switch(authdata.auth_level){
                case "BRONZE":
                    return Gold
                case "SILVER":
                    return Silver
                case "GOLD":
                    return Gold
                case "PLATINUM":
                    return Platinum
            }
        }
    }
    useEffect(() => {
        getAuth()
    },[])
    return (
        <>
            <Profile
            usernumber = {authdata && authdata.auth_user_number}
            name={authdata && authdata.auth_name}
            level={authdata && getLevel()}
            />
        </>
    )
}


export default ProfilePage