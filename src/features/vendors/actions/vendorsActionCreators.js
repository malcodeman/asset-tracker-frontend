import {
  GET_VENDORS_BY_WORKSPACE_ID_REQUEST,
  ADD_VENDOR_REQUEST,
  RESET_VENDORS,
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

function resetVendors() {
  return {
    type: RESET_VENDORS,
  };
}

export { getVendorsByWorkspaceId, addVendor, resetVendors };
