import { all, fork } from "redux-saga/effects";

import auth from "../features/auth/sagas/authSagas";
import assets from "../features/assets/sagas/assetsSaga";
import users from "../features/users/sagas/usersSagas";
import vendors from "../features/vendors/sagas/vendorsSagas";
import employees from "../features/employees/sagas/employeesSagas";
import locations from "../features/locations/sagas/locationsSagas";

export default function* rootSaga() {
  yield all([
    fork(auth),
    fork(assets),
    fork(users),
    fork(vendors),
    fork(employees),
    fork(locations),
  ]);
}
