import axios from 'axios';

const api = axios.create({
    baseURL: 'https://toutbox-backend.herokuapp.com/'
}); 

export default api;