import { GET_MYSELF_REQUEST, UPDATE_MYSELF_REQUEST } from "./usersActionTypes";

function getMyself() {
  return {
    type: GET_MYSELF_REQUEST,
  };
}

function updateMyself(payload, meta) {
  return {
    payload,
    meta,
    type: UPDATE_MYSELF_REQUEST,
  };
}

export { getMyself, updateMyself };
