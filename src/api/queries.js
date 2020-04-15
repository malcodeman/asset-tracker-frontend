import axios from "../http";

function getWorkspaces() {
  return axios.get(`/workspaces`);
}

function getAssets(params) {
  return axios.get(`/assets`, params);
}

function getMyself() {
  return axios.get(`/users/myself`);
}

export { getWorkspaces, getAssets, getMyself };

export default {
  getWorkspaces,
  getAssets,
  getMyself,
};
