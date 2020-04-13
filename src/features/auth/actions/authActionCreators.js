import { SIGNUP_REQUEST, SIGNIN_REQUEST, LOGOUT } from "./authActionTypes";

function signup(payload, meta) {
  return {
    type: SIGNUP_REQUEST,
    payload,
    meta,
  };
}

function signin(payload, meta) {
  return {
    type: SIGNIN_REQUEST,
    payload,
    meta,
  };
}

function logout() {
  return {
    type: LOGOUT,
  };
}

export { signup, signin, logout };
