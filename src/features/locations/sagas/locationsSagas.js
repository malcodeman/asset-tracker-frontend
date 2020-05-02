import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../api";
import {
  ADD_LOCATION_FAILURE,
  ADD_LOCATION_REQUEST,
  ADD_LOCATION_SUCCESS,
} from "../actions/locationsActionTypes";

function* addlocation(action) {
  const { formik, onClose } = action.meta;

  try {
    const data = yield call(api.mutations.addLocation, action.payload);

    formik.setSubmitting(false);
    onClose();

    yield put({ type: ADD_LOCATION_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: ADD_LOCATION_FAILURE, error });
  }
}

const saga = function* () {
  yield takeLatest(ADD_LOCATION_REQUEST, addlocation);
};

export default saga;
