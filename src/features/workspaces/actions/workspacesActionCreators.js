import {
  GET_ASSETS_BY_WORKSPACE_ID_REQUEST,
  GET_WORKSPACES_REQUEST,
  ADD_WORKSPACE_REQUEST,
  GET_EMPLOYEES_BY_WORKSPACE_ID_REQUEST,
  GET_LOCATIONS_BY_WORKSPACE_ID_REQUEST,
  GET_VENDORS_BY_WORKSPACE_ID_REQUEST,
  RESET_WORKSPACE,
  UPDATE_WORKSPACE_REQUEST,
} from "./workspacesActionTypes";

function getAssetsByWorkspaceId(payload) {
  return {
    payload,
    type: GET_ASSETS_BY_WORKSPACE_ID_REQUEST,
  };
}

function getWorkspaces() {
  return {
    type: GET_WORKSPACES_REQUEST,
  };
}

function addWorkspace(payload, meta) {
  return {
    payload,
    meta,
    type: ADD_WORKSPACE_REQUEST,
  };
}

function getEmployeesByWorkspaceId(payload) {
  return {
    payload,
    type: GET_EMPLOYEES_BY_WORKSPACE_ID_REQUEST,
  };
}

function getLocationsByWorkspaceId(payload) {
  return {
    payload,
    type: GET_LOCATIONS_BY_WORKSPACE_ID_REQUEST,
  };
}

function getVendorsByWorkspaceId(payload) {
  return {
    payload,
    type: GET_VENDORS_BY_WORKSPACE_ID_REQUEST,
  };
}

function resetWorkspace() {
  return {
    type: RESET_WORKSPACE,
  };
}

function updateWorkspace(payload, meta) {
  return {
    payload,
    meta,
    type: UPDATE_WORKSPACE_REQUEST,
  };
}

export {
  getAssetsByWorkspaceId,
  getWorkspaces,
  addWorkspace,
  getEmployeesByWorkspaceId,
  getLocationsByWorkspaceId,
  getVendorsByWorkspaceId,
  resetWorkspace,
  updateWorkspace,
};
