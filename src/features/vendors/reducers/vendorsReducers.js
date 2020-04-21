import {
  ADD_VENDOR_SUCCESS,
  GET_VENDORS_BY_WORKSPACE_ID_SUCCESS,
} from "../actions/vendorsActionTypes";

const initialState = {
  vendors: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VENDORS_BY_WORKSPACE_ID_SUCCESS:
      return {
        ...state,
        vendors: action.payload,
      };
    case ADD_VENDOR_SUCCESS:
      return {
        ...state,
        vendors: [...state.vendors, action.payload],
      };
    default:
      return state;
  }
};
