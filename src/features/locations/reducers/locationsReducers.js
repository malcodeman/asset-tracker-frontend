import {
  ADD_LOCATION_SUCCESS,
  GET_LOCATIONS_BY_WORKSPACE_ID_SUCCESS,
  RESET_LOCATIONS,
} from "../actions/locationsActionTypes";

const initialState = {
  locations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS_BY_WORKSPACE_ID_SUCCESS:
      return {
        ...state,
        locations: action.payload.locations,
      };
    case ADD_LOCATION_SUCCESS:
      return {
        ...state,
        locations: [...state.locations, action.payload],
      };
    case RESET_LOCATIONS:
      return {
        ...state,
        locations: [],
      };
    default:
      return state;
  }
};