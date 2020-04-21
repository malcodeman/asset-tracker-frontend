import { combineReducers } from "redux";

import auth from "../features/auth/reducers/authReducers";
import assets from "../features/assets/reducers/assetsReducers";
import users from "../features/users/reducers/usersReducers";
import vendors from "../features/vendors/reducers/vendorsReducers";

const rootReducer = combineReducers({
  auth,
  assets,
  users,
  vendors,
});

export default rootReducer;
