import axios from "axios";

export const jwt = localStorage.jwt


const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`
    }
});
axios.defaults.baseURL = "http://127.0.0.1:8000/"
const JSON_CONFIG = {
    headers: {
        'Content-Type': 'application/json',
    }
}

const API = {
    sendLoginRequest: (user) => axios.post('login', user, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }),
    sendRegistrationRequest:async (user) => await axios.post('users/register', user, JSON_CONFIG),
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
    updateUser: ({user, jwt}) => axios.put('users', user, {
        headers: {
            Authorization: `Bearer ${jwt}`
        }
    }),
    getAllUsers: (jwt) => axiosInstance.get('users'),
    getAllImages: async (jwt) => await axios.get('images',
        {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }
    ),
    getImageById: (id) => axiosInstance.get(`images/${id}`),
    getProductById: (id) => axiosInstance.get(`products/${id}`),
    updateProduct: (product,id) => axiosInstance.put(`products/${id}`,product),
    deleteProduct: (id) => axiosInstance.delete(`products/${id}`),
    getAllProducts: () => axiosInstance('products'),
    getUserOrders: () => axiosInstance.get('orders/history/'),
    createOrder: (order,product_id) => axiosInstance.post(`orders/${product_id}`,order),
    deleteOrder: (order_id) => axiosInstance.delete(`orders/${order_id}`),
    updateOrder: (order, id) => axiosInstance.put(`orders/${id}`,order)
}

export default API
