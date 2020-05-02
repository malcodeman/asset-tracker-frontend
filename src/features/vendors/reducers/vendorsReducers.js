import {
  ADD_VENDOR_SUCCESS,
  RESET_VENDORS,
} from "../actions/vendorsActionTypes";
import { GET_VENDORS_BY_WORKSPACE_ID_SUCCESS } from "../../workspaces/actions/workspacesActionTypes";

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
