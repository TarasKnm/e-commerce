import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/"
const JSON_CONFIG = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const API = {
    sendLoginRequest: (user) => axios.post('login/', user, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }),
    sendRegistrationRequest: (user) => axios.post('users/register/', user,JSON_CONFIG),
    getUserProfile: (jwt) => axios.get('users/profile', {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }),
    deleteUser: (jwt) => axios.delete('users', {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }),
    updateUser: ({user,jwt}) => axios.put('users',user, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }),
    getAllUsers: (jwt) => axios.get('users',{
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    })

}

export default API