import { CHANGE_THEME } from "../actions/settingsActionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
