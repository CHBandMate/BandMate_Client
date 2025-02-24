import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://sungmin999.gonetis.com/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청마다 자동으로 JWT 토큰을 추가
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default axiosInstance;
