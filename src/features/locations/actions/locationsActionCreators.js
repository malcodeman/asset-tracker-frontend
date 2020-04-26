import {
  GET_LOCATIONS_BY_WORKSPACE_ID_REQUEST,
  ADD_LOCATION_REQUEST,
} from "./locationsActionTypes";

function getLocationsByWorkspaceId(payload) {
  return {
    payload,
    type: GET_LOCATIONS_BY_WORKSPACE_ID_REQUEST,
  };
}

function addLocation(payload, meta) {
  return {
    payload,
    meta,
    type: ADD_LOCATION_REQUEST,
  };
}

export { getLocationsByWorkspaceId, addLocation };
