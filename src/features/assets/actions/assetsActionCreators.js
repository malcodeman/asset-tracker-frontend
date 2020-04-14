import {
  GET_WORKSPACES_REQUEST,
  ADD_WORKSPACE_REQUEST,
  GET_ASSETS_REQUEST,
} from "./assetsActionTypes";

function getWorkspaces() {
  return {
    type: GET_WORKSPACES_REQUEST,
  };
}

function addWorkspace(payload) {
  return {
    payload,
    type: ADD_WORKSPACE_REQUEST,
  };
}

function getAssets(payload) {
  return {
    payload,
    type: GET_ASSETS_REQUEST,
  };
}

export { getWorkspaces, addWorkspace, getAssets };
