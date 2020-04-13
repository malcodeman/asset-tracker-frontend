import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../api";
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
} from "../actions/authActionTypes";

function* signup(action) {
  const { formik, history } = action.meta;

  try {
    const data = yield call(api.mutations.signup, action.payload);
    const token = data.data.token;

    localStorage.setItem("token", token);
    formik.setSubmitting(false);
    history.push("/");

    yield put({ type: SIGNUP_SUCCESS, payload: data.data });
  } catch (error) {
    const exception = error.data.exception;

    switch (exception) {
      case "EmailAlreadyInUseException":
        formik.setFieldError("email", "Email already in use");
        break;
      default:
        formik.setFieldError("general", "Something went wrong");
    }

    formik.setSubmitting(false);

    yield put({ type: SIGNUP_FAILURE, error });
  }
}

function* signin(action) {
  const { formik, history } = action.meta;

  try {
    const data = yield call(api.mutations.signin, action.payload);
    const token = data.data.token;
    const user = data.data.user;

    localStorage.setItem("token", token);
    formik.setSubmitting(false);
    history.push("/");

    yield put({ type: SIGNIN_SUCCESS, payload: user });
  } catch (error) {
    const exception = error.data.exception;

    switch (exception) {
      case "UserNotFoundException":
      case "NotAuthorizedException":
        formik.setFieldError(
          "general",
          "The email and password you entered did not match our records. Please double-check and try again."
        );
        break;
      default:
        formik.setFieldError("general", "Something went wrong");
    }

    formik.setSubmitting(false);

    yield put({ type: SIGNIN_FAILURE, error });
  }
}

const saga = function* () {
  yield takeLatest(SIGNUP_REQUEST, signup);
  yield takeLatest(SIGNIN_REQUEST, signin);
};

export default saga;
