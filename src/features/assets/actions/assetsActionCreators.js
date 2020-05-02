import {
  GET_ASSETS_REQUEST,
  ADD_ASSET_REQUEST,
  RESET_ASSETS,
} from "./assetsActionTypes";

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

function resetAssets() {
  return {
    type: RESET_ASSETS,
  };
}

export { getAssets, addAsset, resetAssets };
