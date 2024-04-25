import axios from "axios";

const instance = axios.create({
  // baseURL: "",
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {}
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
      return response.data;
    }
    return Promise.reject("请求失败");
  },
  (error) => {}
);

export default instance;
