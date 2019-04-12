import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend40.herokuapp.com'
});

export default api;