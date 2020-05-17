import axios from "../http";

function signup(data) {
  return axios.post(`/auth/signup`, data);
}

function signin(data) {
  return axios.post(`/auth/signin`, data);
}

function addWorkspace(data) {
  return axios.post(`/workspaces`, data);
}

function addAsset(data) {
  return axios.post(`/assets`, data);
}

function updateMyself(data) {
  return axios.put(`/users/myself`, data);
}

function addVendor(data) {
  return axios.post(`/vendors`, data);
}

function addEmployee(data) {
  return axios.post(`/employees`, data);
}

function addLocation(data) {
  return axios.post(`/locations`, data);
}

function updateWorkspace(id, data) {
  return axios.put(`/workspaces/${id}`, data);
}

export {
  signup,
  signin,
  addWorkspace,
  addAsset,
  updateMyself,
  addVendor,
  addEmployee,
  addLocation,
  updateWorkspace,
};

export default {
  signup,
  signin,
  addWorkspace,
  addAsset,
  updateMyself,
  addVendor,
  addEmployee,
  addLocation,
  updateWorkspace,
};
