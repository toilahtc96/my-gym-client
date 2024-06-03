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
    accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb25naHQiLCJpYXQiOjE3MTc0MDU5NjQsImV4cCI6MTcxNzQ0MTk2NH0.RvRQuYNxeAqoSEjvol3qXqvoXJfy5W45nbyIOxAZfwZkO1nAlMpKoF4fB0UumsyoenPun61tRma6stKM_GBY1w";
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
