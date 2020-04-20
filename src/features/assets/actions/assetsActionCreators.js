import {
  GET_WORKSPACES_REQUEST,
  GET_ASSETS_BY_WORKSPACE_ID_REQUEST,
  ADD_WORKSPACE_REQUEST,
  GET_ASSETS_REQUEST,
  ADD_ASSET_REQUEST,
} from "./assetsActionTypes";

function getWorkspaces() {
  return {
    type: GET_WORKSPACES_REQUEST,
  };
}

function getAssetsByWorkspaceId(payload) {
  return {
    payload,
    type: GET_ASSETS_BY_WORKSPACE_ID_REQUEST,
  };
}

function addWorkspace(payload, meta) {
  return {
    payload,
    meta,
    type: ADD_WORKSPACE_REQUEST,
  };
}

function getAssets(payload) {
  return {
    payload,
    type: GET_ASSETS_REQUEST,
  };
}

function addAsset(payload, meta) {
  return {
    payload,
    meta,
    type: ADD_ASSET_REQUEST,
  };
}

export {
  getWorkspaces,
  getAssetsByWorkspaceId,
  addWorkspace,
  getAssets,
  addAsset,
};
