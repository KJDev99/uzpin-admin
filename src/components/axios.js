import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  //   timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("User is not authenticated. Redirecting to login...");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
