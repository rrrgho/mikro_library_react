import axios from "axios"
import BASE_URL from "../Base_Url"
import Auth from '../../Auth'


const token = Auth.isAuthenticated();
export const POST = async (endpoint,data) => {
    try{
        let send = await axios.post(BASE_URL+endpoint,data);
        return send
    }
    catch{
        return "Error, Server doesn't response ";
    }
}

export const POSTAUTH = async (endpoint,data) => {
    try{
        let send = await axios.post(BASE_URL+endpoint,data, { headers: {"Authorization" : `Bearer ${token}`} });
        return send
    }
    catch{
        return "Error, Server doesn't response ";
    }
}

export const GET = async (endpoint) => {
    try{
        let send = await axios.get(BASE_URL+endpoint, { headers: {"Authorization" : `Bearer ${token}`} });
        return send
    }
    catch{
        return "Error, Server doesn't response ";
    }
}