import {
  GET_WORKSPACES_SUCCESS,
  ADD_WORKSPACE_SUCCESS,
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
    default:
      return state;
  }
};
