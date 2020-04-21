import {
  GET_VENDORS_BY_WORKSPACE_ID_REQUEST,
  ADD_VENDOR_REQUEST,
} from "./vendorsActionTypes";

function getVendorsByWorkspaceId(payload) {
  return {
    payload,
    type: GET_VENDORS_BY_WORKSPACE_ID_REQUEST,
  };
}

function addVendor(payload, meta) {
  return {
    payload,
    meta,
    type: ADD_VENDOR_REQUEST,
  };
}

export { getVendorsByWorkspaceId, addVendor };
