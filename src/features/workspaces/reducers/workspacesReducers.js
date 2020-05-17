import {
  GET_WORKSPACES_SUCCESS,
  ADD_WORKSPACE_SUCCESS,
  UPDATE_WORKSPACE_SUCCESS,
} from "../actions/workspacesActionTypes";

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
    case UPDATE_WORKSPACE_SUCCESS:
      return {
        ...state,
        workspaces: state.workspaces.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
