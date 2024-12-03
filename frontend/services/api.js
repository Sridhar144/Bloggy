import axios from 'axios';

const API_URL = 'https://bloggysite-afgghebehdfca3c7.westindia-01.azurewebsites.net/';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  // Intercept the request to add Authorization header
  return config;
});

export default api;
