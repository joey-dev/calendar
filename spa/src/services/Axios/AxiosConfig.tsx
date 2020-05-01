import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development' ? 'http://10.0.0.2/api' : '/api';

const Axios = axios.create({
    baseURL
});

export default Axios;
