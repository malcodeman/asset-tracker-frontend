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
  ADD_ASSET_REQUEST,
  ADD_ASSET_FAILURE,
  ADD_ASSET_SUCCESS,
  GET_ASSETS_BY_WORKSPACE_ID_SUCCESS,
  GET_ASSETS_BY_WORKSPACE_ID_FAILURE,
  GET_ASSETS_BY_WORKSPACE_ID_REQUEST,
} from "../actions/assetsActionTypes";

function* getWorkspaces() {
  try {
    const data = yield call(api.queries.getWorkspaces);

    yield put({ type: GET_WORKSPACES_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_WORKSPACES_FAILURE, error });
  }
}

function* getAssetsByWorkspaceId(action) {
  try {
    const data = yield call(api.queries.getAssetsByWorkspaceId, action.payload);

    yield put({ type: GET_ASSETS_BY_WORKSPACE_ID_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_ASSETS_BY_WORKSPACE_ID_FAILURE, error });
  }
}

function* addWorkspace(action) {
  const { history } = action.meta;

  try {
    const data = yield call(api.mutations.addWorkspace, action.payload);
    const id = data.data.id;

    history.push(`/workspaces/${id}`);

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

function* addAsset(action) {
  const { formik } = action.meta;

  try {
    const data = yield call(api.mutations.addAsset, action.payload);

    formik.setSubmitting(false);

    yield put({ type: ADD_ASSET_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: ADD_ASSET_FAILURE, error });
  }
}

const saga = function* () {
  yield takeLatest(GET_WORKSPACES_REQUEST, getWorkspaces);
  yield takeLatest(GET_ASSETS_BY_WORKSPACE_ID_REQUEST, getAssetsByWorkspaceId);
  yield takeLatest(ADD_WORKSPACE_REQUEST, addWorkspace);
  yield takeLatest(GET_ASSETS_REQUEST, getAssets);
  yield takeLatest(ADD_ASSET_REQUEST, addAsset);
};

export default saga;
