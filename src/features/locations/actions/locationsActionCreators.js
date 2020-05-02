import { ADD_LOCATION_REQUEST, RESET_LOCATIONS } from "./locationsActionTypes";

function addLocation(payload, meta) {
  return {
    payload,
    meta,
    type: ADD_LOCATION_REQUEST,
  };
}

function resetLocations() {
  return {
    type: RESET_LOCATIONS,
  };
}

export { addLocation, resetLocations };
