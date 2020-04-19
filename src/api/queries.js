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

export { getWorkspaces, getAssetsByWorkspaceId, getMyself };

export default {
  getWorkspaces,
  getAssetsByWorkspaceId,
  getMyself,
};
