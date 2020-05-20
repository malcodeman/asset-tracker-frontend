import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { loadState, saveState } from "./localStorage";
import constants from "../constants";

const initialState = {
  settings: {
    theme: constants.THEMES.AUTO,
  },
  auth: { isLoggedIn: false },
};
const persistedState = loadState(initialState);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(() => {
  saveState({
    auth: store.getState().auth,
    settings: store.getState().settings,
  });
});

sagaMiddleware.run(rootSaga);

export default store;
