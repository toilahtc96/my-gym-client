import axios from "axios";

// axios.defaults.baseURL = 'https://103.245.237.198:8080/';
// axios.defaults.baseURL = 'https://103.245.237.198:8443/';
axios.defaults.baseURL = 'http://localhost:8088/';
axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    if (!request.headers) {
      return request;
    }
    let accessToken = localStorage.getItem("accessToken");
    accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25naHQiLCJpYXQiOjE3MTYxOTIyNTIsImV4cCI6MTcxNjIyODI1Mn0.j2AbXxwdOsX19I4M8ecBRBK0M_Z4FMW91fzjr26zgnfYUzTP5QzmJhS8XBTbu1Dt_vUoRaUJICfLZcfhOGktiQ";
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }

    return request;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default axios;
