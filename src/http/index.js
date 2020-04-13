import axios from "axios";

import history from "../routing/history";
import constants from "../constants";

const instance = axios.create({
  baseURL: constants.API_URL,
});

instance.interceptors.request.use(
  (config) => {
    config.headers.authorization = localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
      history.push("/signin");
    }
    return Promise.reject(error.response);
  }
);

export default instance;
