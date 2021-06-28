import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 5000,
});

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  console.log(config);
  return config;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
  console.log(response);
  return response;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

export default instance;
