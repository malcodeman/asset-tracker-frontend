import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../api";
import {
  ADD_VENDOR_FAILURE,
  ADD_VENDOR_REQUEST,
  ADD_VENDOR_SUCCESS,
} from "../actions/vendorsActionTypes";

function* addVendor(action) {
  const { formik, onClose } = action.meta;

  try {
    const data = yield call(api.mutations.addVendor, action.payload);

    formik.setSubmitting(false);
    onClose();

    yield put({ type: ADD_VENDOR_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: ADD_VENDOR_FAILURE, error });
  }
}

const saga = function* () {
  yield takeLatest(ADD_VENDOR_REQUEST, addVendor);
};

export default saga;
