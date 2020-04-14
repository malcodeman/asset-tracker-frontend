import axios from "../http";

function getWorkspaces() {
  return axios.get(`/workspaces`);
}

function getAssets(params) {
  return axios.get(`/assets`, params);
}

export { getWorkspaces, getAssets };

export default {
  getWorkspaces,
  getAssets,
};
