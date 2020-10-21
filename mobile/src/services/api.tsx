import axios from 'axios';

const api = axios.create({
  baseURL: 'http:///172.25.247.61:3333',
});

console.log(api);

export default api;