import { ADD_ASSET_SUCCESS, RESET_ASSETS } from "../actions/assetsActionTypes";
import {
  GET_ASSETS_BY_WORKSPACE_ID_SUCCESS,
  RESET_WORKSPACE,
} from "../../workspaces/actions/workspacesActionTypes";

const initialState = {
  assets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ASSET_SUCCESS:
      return {
        ...state,
        assets: [...state.assets, action.payload],
      };
    case GET_ASSETS_BY_WORKSPACE_ID_SUCCESS:
      return {
        ...state,
        assets: action.payload.assets,
      };
    case RESET_ASSETS:
      return {
        ...state,
        assets: [],
      };
    case RESET_WORKSPACE:
      return {
        ...state,
        assets: [],
      };
    default:
      return state;
  }
};
