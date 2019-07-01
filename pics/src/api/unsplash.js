import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a26def8d7264c01405c9fbc84c6429ddf872caf956e0d0a760e1df0723bbb154',
    }
})