import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  console.log(config);
  return config;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  console.log(response);
  return response.data;
}, (error) => {
  console.log(error);
  return Promise.reject(error);
});

export default instance;
