import {
  ADD_VENDOR_SUCCESS,
  GET_VENDORS_BY_WORKSPACE_ID_SUCCESS,
  RESET_VENDORS,
} from "../actions/vendorsActionTypes";

const initialState = {
  vendors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VENDORS_BY_WORKSPACE_ID_SUCCESS:
      return {
        ...state,
        vendors: action.payload.vendors,
      };
    case ADD_VENDOR_SUCCESS:
      return {
        ...state,
        vendors: [...state.vendors, action.payload],
      };
    case RESET_VENDORS:
      return {
        ...state,
        vendors: [],
      };
    default:
      return state;
  }
};
