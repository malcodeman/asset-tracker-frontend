import { all, fork } from "redux-saga/effects";

import auth from "../features/auth/sagas/authSagas";

export default function* rootSaga() {
  yield all([fork(auth)]);
}
