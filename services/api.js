import axios from "axios";

// const URL = "https://nextmasjidbackend.azurewebsites.net";
const URL = "http://nextmasjid-api.pablo.eti.br:5000";

const API = axios.create({
  baseURL: URL
});

API.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default API;
