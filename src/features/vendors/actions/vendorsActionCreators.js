import { ADD_VENDOR_REQUEST, RESET_VENDORS } from "./vendorsActionTypes";

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

export { addVendor, resetVendors };
