import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  LOGOUT,
} from "../actions/authActionTypes";

export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
