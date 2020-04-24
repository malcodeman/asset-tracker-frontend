import {
  GET_EMPLOYEES_BY_WORKSPACE_ID_REQUEST,
  ADD_EMPLOYEE_REQUEST,
} from "./employeesActionTypes";

function getEmployeesByWorkspaceId(payload) {
  return {
    payload,
    type: GET_EMPLOYEES_BY_WORKSPACE_ID_REQUEST,
  };
}

function addEmployee(payload, meta) {
  return {
    payload,
    meta,
    type: ADD_EMPLOYEE_REQUEST,
  };
}

export { getEmployeesByWorkspaceId, addEmployee };
