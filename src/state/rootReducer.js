import { combineReducers } from "redux";

import auth from "../features/auth/reducers/authReducers";
import assets from "../features/assets/reducers/assetsReducers";
import users from "../features/users/reducers/usersReducers";
import vendors from "../features/vendors/reducers/vendorsReducers";
import employees from "../features/employees/reducers/employeesReducers";
import locations from "../features/locations/reducers/locationsReducers";
import workspaces from "../features/workspaces/reducers/workspacesReducers";

const rootReducer = combineReducers({
  auth,
  assets,
  users,
  vendors,
  employees,
  locations,
  workspaces,
});

export default rootReducer;
