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

function addAsset(params) {
  return axios.post(`/assets`, params);
}

function updateMyself(params) {
  return axios.put(`/users/myself`, params);
}

export { signup, signin, addWorkspace, addAsset, updateMyself };

export default {
  signup,
  signin,
  addWorkspace,
  addAsset,
  updateMyself,
};
