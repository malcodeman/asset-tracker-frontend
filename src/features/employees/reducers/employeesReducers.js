import {
  ADD_EMPLOYEE_SUCCESS,
  RESET_EMPLOYEES,
} from "../actions/employeesActionTypes";
import {
  GET_EMPLOYEES_BY_WORKSPACE_ID_SUCCESS,
  RESET_WORKSPACE,
} from "../../workspaces/actions/workspacesActionTypes";

const initialState = {
  employees: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES_BY_WORKSPACE_ID_SUCCESS:
      return {
        ...state,
        employees: action.payload.employees,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case RESET_EMPLOYEES:
      return {
        ...state,
        employees: [],
      };
    case RESET_WORKSPACE:
      return {
        ...state,
        employees: [],
      };
    default:
      return state;
  }
};
