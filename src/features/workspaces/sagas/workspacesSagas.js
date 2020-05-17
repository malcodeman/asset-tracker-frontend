import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../api";
import {
  GET_WORKSPACES_REQUEST,
  GET_WORKSPACES_FAILURE,
  GET_WORKSPACES_SUCCESS,
  ADD_WORKSPACE_REQUEST,
  ADD_WORKSPACE_FAILURE,
  ADD_WORKSPACE_SUCCESS,
  GET_ASSETS_BY_WORKSPACE_ID_SUCCESS,
  GET_ASSETS_BY_WORKSPACE_ID_FAILURE,
  GET_ASSETS_BY_WORKSPACE_ID_REQUEST,
  GET_EMPLOYEES_BY_WORKSPACE_ID_FAILURE,
  GET_EMPLOYEES_BY_WORKSPACE_ID_REQUEST,
  GET_EMPLOYEES_BY_WORKSPACE_ID_SUCCESS,
  GET_LOCATIONS_BY_WORKSPACE_ID_FAILURE,
  GET_LOCATIONS_BY_WORKSPACE_ID_REQUEST,
  GET_LOCATIONS_BY_WORKSPACE_ID_SUCCESS,
  GET_VENDORS_BY_WORKSPACE_ID_FAILURE,
  GET_VENDORS_BY_WORKSPACE_ID_REQUEST,
  GET_VENDORS_BY_WORKSPACE_ID_SUCCESS,
  UPDATE_WORKSPACE_REQUEST,
  UPDATE_WORKSPACE_FAILURE,
  UPDATE_WORKSPACE_SUCCESS,
} from "../actions/workspacesActionTypes";

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

function* getEmployeesByWorkspaceId(action) {
  try {
    const data = yield call(
      api.queries.getEmployeesByWorkspaceId,
      action.payload
    );

    yield put({
      type: GET_EMPLOYEES_BY_WORKSPACE_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    yield put({ type: GET_EMPLOYEES_BY_WORKSPACE_ID_FAILURE, error });
  }
}

function* getlocationsByWorkspaceId(action) {
  try {
    const data = yield call(
      api.queries.getLocationsByWorkspaceId,
      action.payload
    );

    yield put({
      type: GET_LOCATIONS_BY_WORKSPACE_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    yield put({ type: GET_LOCATIONS_BY_WORKSPACE_ID_FAILURE, error });
  }
}

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

function* updateWorkspace(action) {
  const { formik } = action.meta;

  try {
    const data = yield call(
      api.mutations.updateWorkspace,
      action.payload.workspaceId,
      { values: action.payload.values }
    );

    yield put({
      type: UPDATE_WORKSPACE_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    yield put({ type: UPDATE_WORKSPACE_FAILURE, error });
  } finally {
    formik.setSubmitting(false);
  }
}

const saga = function* () {
  yield takeLatest(GET_WORKSPACES_REQUEST, getWorkspaces);
  yield takeLatest(GET_ASSETS_BY_WORKSPACE_ID_REQUEST, getAssetsByWorkspaceId);
  yield takeLatest(ADD_WORKSPACE_REQUEST, addWorkspace);
  yield takeLatest(
    GET_EMPLOYEES_BY_WORKSPACE_ID_REQUEST,
    getEmployeesByWorkspaceId
  );
  yield takeLatest(
    GET_LOCATIONS_BY_WORKSPACE_ID_REQUEST,
    getlocationsByWorkspaceId
  );
  yield takeLatest(
    GET_VENDORS_BY_WORKSPACE_ID_REQUEST,
    getVendorsByWorkspaceId
  );
  yield takeLatest(UPDATE_WORKSPACE_REQUEST, updateWorkspace);
};

export default saga;
