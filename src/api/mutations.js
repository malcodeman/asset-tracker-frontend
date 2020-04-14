import axios from "../http";

function signup(params) {
  return axios.post(`/auth/signup`, params);
}

function signin(params) {
  return axios.post(`/auth/signin`, params);
}

function addWorkspace(params) {
  return axios.post(`/workspaces`, params);
}

export { signup, signin, addWorkspace };

export default {
  signup,
  signin,
  addWorkspace,
};
