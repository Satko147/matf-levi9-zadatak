import axios from 'axios';

export const httpGet = (url, payload = null) => {
    return axios.get(`${url}`)
}

export const httpPost = (url, payload) => {
    return axios.post(url, JSON.stringify(payload))
}

export const httpPut = (url, payload) => {
    return axios.put(url, JSON.stringify(payload))
}
export const httpDelete = (url) => {
    return axios.delete(url)
}

export const getErrorMessage = error => error.response.data.apierror.message;

export default {
    get: httpGet,
    post: httpPost,
    put: httpPut,
    delete: httpDelete,
    getErrorMessage,
}