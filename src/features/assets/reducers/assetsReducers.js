import {
  GET_WORKSPACES_SUCCESS,
  ADD_WORKSPACE_SUCCESS,
  ADD_ASSET_SUCCESS,
} from "../actions/assetsActionTypes";

const initialState = {
  workspaces: [],
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
        workspaces: state.workspaces.map((workspace) => {
          if (workspace.id === action.payload.workspaceId) {
            return {
              ...workspace,
              assets: [...workspace.assets, action.payload],
            };
          }
          return workspace;
        }),
      };
    default:
      return state;
  }
};
