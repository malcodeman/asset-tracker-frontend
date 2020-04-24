import {
  ADD_EMPLOYEE_SUCCESS,
  GET_EMPLOYEES_BY_WORKSPACE_ID_SUCCESS,
} from "../actions/employeesActionTypes";

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
    default:
      return state;
  }
};
