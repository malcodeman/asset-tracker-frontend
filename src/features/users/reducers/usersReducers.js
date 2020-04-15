import {
  GET_MYSELF_SUCCESS,
  UPDATE_MYSELF_SUCCESS,
} from "../actions/usersActionTypes";

const initialState = {
  myself: {
    email: "",
    firstName: "",
    lastName: "",
    company: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MYSELF_SUCCESS:
      return {
        ...state,
        myself: action.payload,
      };
    case UPDATE_MYSELF_SUCCESS:
      return {
        ...state,
        myself: { ...state.myself, ...action.payload },
      };
    default:
      return state;
  }
};
