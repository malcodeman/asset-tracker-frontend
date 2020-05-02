import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../api";
import {
  GET_ASSETS_REQUEST,
  GET_ASSETS_FAILURE,
  GET_ASSETS_SUCCESS,
  ADD_ASSET_REQUEST,
  ADD_ASSET_FAILURE,
  ADD_ASSET_SUCCESS,
} from "../actions/assetsActionTypes";

function* getAssets(action) {
  try {
    const data = yield call(api.queries.getAssets, action.payload);

    yield put({ type: GET_ASSETS_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_ASSETS_FAILURE, error });
  }
}

function* addAsset(action) {
  const { formik, onClose } = action.meta;

  try {
    const data = yield call(api.mutations.addAsset, action.payload);

    formik.setSubmitting(false);
    onClose();

    yield put({ type: ADD_ASSET_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: ADD_ASSET_FAILURE, error });
  }
}

const saga = function* () {
  yield takeLatest(GET_ASSETS_REQUEST, getAssets);
  yield takeLatest(ADD_ASSET_REQUEST, addAsset);
};

export default saga;
