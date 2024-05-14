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
    accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25naHQiLCJpYXQiOjE3MTU2OTc2NzksImV4cCI6MTcxNTczMzY3OX0.wS05IaOEe2s2uGLAu15Pn1J9T5FEPKxsi1ZmWK91fQEqOOyD13aSlvyaqW28QtorhmGANeI0umYbc-FXYf35qw";
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
