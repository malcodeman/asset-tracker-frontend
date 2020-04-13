import axios from "../http";

function signup(params) {
  return axios.post(`/auth/signup`, params);
}

function signin(params) {
  return axios.post(`/auth/signin`, params);
}

export { signup, signin };

export default {
  signup,
  signin,
};
