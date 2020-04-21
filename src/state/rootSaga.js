import { all, fork } from "redux-saga/effects";

import auth from "../features/auth/sagas/authSagas";
import assets from "../features/assets/sagas/assetsSaga";
import users from "../features/users/sagas/usersSagas";
import vendors from "../features/vendors/sagas/vendorsSagas";

export default function* rootSaga() {
  yield all([fork(auth), fork(assets), fork(users), fork(vendors)]);
}
