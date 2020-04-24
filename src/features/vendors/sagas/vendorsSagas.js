import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../api";
import {
  ADD_VENDOR_FAILURE,
  ADD_VENDOR_REQUEST,
  ADD_VENDOR_SUCCESS,
  GET_VENDORS_BY_WORKSPACE_ID_FAILURE,
  GET_VENDORS_BY_WORKSPACE_ID_REQUEST,
  GET_VENDORS_BY_WORKSPACE_ID_SUCCESS,
} from "../actions/vendorsActionTypes";

function* getVendorsByWorkspaceId(action) {
  try {
    const data = yield call(
      api.queries.getVendorsByWorkspaceId,
      action.payload
    );

    yield put({
      type: GET_VENDORS_BY_WORKSPACE_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    yield put({ type: GET_VENDORS_BY_WORKSPACE_ID_FAILURE, error });
  }
}

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
  yield takeLatest(
    GET_VENDORS_BY_WORKSPACE_ID_REQUEST,
    getVendorsByWorkspaceId
  );
  yield takeLatest(ADD_VENDOR_REQUEST, addVendor);
};

export default saga;
