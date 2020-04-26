import axios from "../http";

function getWorkspaces() {
  return axios.get(`/workspaces`);
}

function getAssetsByWorkspaceId(id) {
  return axios.get(`/workspaces/${id}/assets`);
}

function getMyself() {
  return axios.get(`/users/myself`);
}

function getVendorsByWorkspaceId(id) {
  return axios.get(`/workspaces/${id}/vendors`);
}

function getEmployeesByWorkspaceId(id) {
  return axios.get(`/workspaces/${id}/employees`);
}

function getLocationsByWorkspaceId(id) {
  return axios.get(`/workspaces/${id}/locations`);
}

export {
  getWorkspaces,
  getAssetsByWorkspaceId,
  getMyself,
  getVendorsByWorkspaceId,
  getEmployeesByWorkspaceId,
  getLocationsByWorkspaceId,
};

export default {
  getWorkspaces,
  getAssetsByWorkspaceId,
  getMyself,
  getVendorsByWorkspaceId,
  getEmployeesByWorkspaceId,
  getLocationsByWorkspaceId,
};
