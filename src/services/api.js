import axios from 'axios';

const api = axios.create({
    baseURL: 'http://restcountries.eu/rest/v2/'
})

export default api;