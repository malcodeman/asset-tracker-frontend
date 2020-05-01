import {
  GET_WORKSPACES_SUCCESS,
  ADD_WORKSPACE_SUCCESS,
  ADD_ASSET_SUCCESS,
  GET_ASSETS_BY_WORKSPACE_ID_SUCCESS,
  RESET_ASSETS,
} from "../actions/assetsActionTypes";

const initialState = {
  workspaces: [],
  assets: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WORKSPACES_SUCCESS:
      return {
        ...state,
        workspaces: action.payload,
      };
    case ADD_WORKSPACE_SUCCESS:
      return {
        ...state,
        workspaces: [...state.workspaces, action.payload],
      };
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
    default:
      return state;
  }
};
