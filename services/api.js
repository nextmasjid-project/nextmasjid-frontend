import axios from 'axios';

const URL = 'http://45.35.14.206/api'

const API = axios.create({
  baseURL: URL,
});

API.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },error => {
    return Promise.reject(error)
});

export default API
