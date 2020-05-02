import { call, put, takeLatest } from "redux-saga/effects";

import api from "../../../api";
import {
  ADD_EMPLOYEE_FAILURE,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
} from "../actions/employeesActionTypes";

function* addEmployee(action) {
  const { formik, onClose } = action.meta;

  try {
    const data = yield call(api.mutations.addEmployee, action.payload);

    formik.setSubmitting(false);
    onClose();

    yield put({ type: ADD_EMPLOYEE_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: ADD_EMPLOYEE_FAILURE, error });
  }
}

const saga = function* () {
  yield takeLatest(ADD_EMPLOYEE_REQUEST, addEmployee);
};

export default saga;
