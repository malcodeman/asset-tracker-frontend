import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../api";
import {
  GET_MYSELF_REQUEST,
  GET_MYSELF_FAILURE,
  GET_MYSELF_SUCCESS,
  UPDATE_MYSELF_REQUEST,
  UPDATE_MYSELF_FAILURE,
  UPDATE_MYSELF_SUCCESS,
} from "../actions/usersActionTypes";

function* getMyself() {
  try {
    const data = yield call(api.queries.getMyself);

    yield put({ type: GET_MYSELF_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_MYSELF_FAILURE, error });
  }
}

function* updateMyself(action) {
  const { formik } = action.meta;

  try {
    const data = yield call(api.mutations.updateMyself, action.payload);

    formik.setSubmitting(false);

    yield put({ type: UPDATE_MYSELF_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: UPDATE_MYSELF_FAILURE, error });
  }
}

const saga = function* () {
  yield takeLatest(GET_MYSELF_REQUEST, getMyself);
  yield takeLatest(UPDATE_MYSELF_REQUEST, updateMyself);
};

export default saga;
