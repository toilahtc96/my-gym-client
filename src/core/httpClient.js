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
    accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25naHQiLCJpYXQiOjE3MTY3MDcxNzIsImV4cCI6MTcxNjc0MzE3Mn0.woltYJXxg5_lLfXLaqXo8QqcezwSUepne-PFMnXA5KqzH8vhZVMgm8kb9QjC9ZDPXy_XSr7PE7WVDP_foSdX4A";
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
