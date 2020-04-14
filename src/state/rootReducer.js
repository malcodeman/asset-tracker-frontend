import { combineReducers } from "redux";

import auth from "../features/auth/reducers/authReducers";
import assets from "../features/assets/reducers/assetsReducers";

const rootReducer = combineReducers({
  auth,
  assets,
});

export default rootReducer;
