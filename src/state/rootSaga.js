import { all, fork } from "redux-saga/effects";

import auth from "../features/auth/sagas/authSagas";
import assets from "../features/assets/sagas/assetsSaga";

export default function* rootSaga() {
  yield all([fork(auth), fork(assets)]);
}
