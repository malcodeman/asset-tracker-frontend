import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../api";
import {
  GET_WORKSPACES_REQUEST,
  GET_WORKSPACES_FAILURE,
  GET_WORKSPACES_SUCCESS,
  ADD_WORKSPACE_REQUEST,
  ADD_WORKSPACE_FAILURE,
  ADD_WORKSPACE_SUCCESS,
  GET_ASSETS_REQUEST,
  GET_ASSETS_FAILURE,
  GET_ASSETS_SUCCESS,
} from "../actions/assetsActionTypes";

function* getWorkspaces() {
  try {
    const data = yield call(api.queries.getWorkspaces);

    yield put({ type: GET_WORKSPACES_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_WORKSPACES_FAILURE, error });
  }
}

function* addWorkspace(action) {
  try {
    const data = yield call(api.mutations.addWorkspace, action.payload);

    yield put({ type: ADD_WORKSPACE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: ADD_WORKSPACE_FAILURE, error });
  }
}

function* getAssets(action) {
  try {
    const data = yield call(api.queries.getAssets, action.payload);

    yield put({ type: GET_ASSETS_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_ASSETS_FAILURE, error });
  }
}

const saga = function* () {
  yield takeLatest(GET_WORKSPACES_REQUEST, getWorkspaces);
  yield takeLatest(ADD_WORKSPACE_REQUEST, addWorkspace);
  yield takeLatest(GET_ASSETS_REQUEST, getAssets);
};

export default saga;
