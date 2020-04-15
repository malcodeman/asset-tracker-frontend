import { combineReducers } from "redux";

import auth from "../features/auth/reducers/authReducers";
import assets from "../features/assets/reducers/assetsReducers";
import users from "../features/users/reducers/usersReducers";

const rootReducer = combineReducers({
  auth,
  assets,
  users,
});

export default rootReducer;
